import LocationsApi from '../api/LocationsApi'
const deliveriesBaseUrl = 'http://localhost:8000/deliveries/'
const routeOptimizationBaseUrl = 'https://api.openrouteservice.org/optimization'
const directionsBaseUrl = 'https://api.openrouteservice.org/v2/directions/driving-car/geojson'

const fetchMapKey = async (token) => {
  const url = deliveriesBaseUrl + 'map-key'
  return await LocationsApi.tryCatchFetch(url, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      'Authorization': token,
    },
  })
}

const fetchRoutes = async ( selectedDeliveries, token ) => {
  const routeKey = await fetchRoutingKey(token)
  const url = routeOptimizationBaseUrl
  return await LocationsApi.tryCatchFetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Authorization': routeKey.key
    },
    body: JSON.stringify({
      jobs: jobsSetup(selectedDeliveries),
      vehicles: [vehicleSetup()],
    })
  })
}
const fetchDirections = async ( deliveriesRoute, token ) => {
  const routeKey = await fetchRoutingKey(token)
  const url = directionsBaseUrl
  return await LocationsApi.tryCatchFetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Authorization': routeKey.key
    },
    body: JSON.stringify({
      coordinates: deliveriesRoute
    })
  })
}

const fetchRoutingKey = async ( token ) => {
  const url = deliveriesBaseUrl + 'routing-key'
  return await LocationsApi.tryCatchFetch(url, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      'Authorization': token,
    },
  })
}

const jobsSetup = (selectedDeliveries) => {
  let jobs = []
  selectedDeliveries.map((delivery) =>
  jobs.push({
    id: delivery.id,
    location: [parseFloat(delivery.address.longitude), parseFloat(delivery.address.latitude)]
  })
  )
  console.log(JSON.stringify(jobs))
  return jobs
}

const vehicleSetup = () => {
  return {
    id:1, 
    profile: "driving-car",
    start:[ -96.711091,40.814486],
    end:[ -96.711091,40.814486]
  }
}

export default {
  jobsSetup,
  fetchRoutes,
  fetchDirections,
  fetchMapKey,
}