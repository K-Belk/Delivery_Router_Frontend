

const deliveriesBaseUrl = 'http://localhost:8000/deliveries/'
const geoCodeBaseUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address='

const tryCatchFetch = async (url, init=null) => {
  try {
    const response = await fetch(url, init)
    if (response.ok) {
      return await response.json()
    }
    else {
      throw new Error(`Bad Response: ${response.status} ${response.statusText}`)
    }
  }
  catch (e) {
    console.log(e)
    return null
  }
}

const fetchLocations = async (token) => {
  const url = deliveriesBaseUrl + 'locations/'
  return await tryCatchFetch(url, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      'Authorization': token,
    }
  })
}

const fetchLocationDetails = async (locationId, token) => {
  const url = deliveriesBaseUrl + 'locations/' + `${locationId}/`
  return await tryCatchFetch(url, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      'Authorization': token,
    }
  })
}

const fetchNewLocation = async (newLocation, token) => {
  const url = deliveriesBaseUrl + 'locations/'
  return await tryCatchFetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Authorization': token,
    },
    body: JSON.stringify(newLocation)
  })
}

const fetchUpdateLocation = async (updatedLocation, id, token) => {
  const url = deliveriesBaseUrl + 'locations/' + id + '/'
  return await tryCatchFetch(url, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
      'Authorization': token,
    },
    body: JSON.stringify(updatedLocation)
  })
}

const fetchDeleteLocation = async ( id, token) => {
  const url = deliveriesBaseUrl + 'locations/' + id + '/'
  return await tryCatchFetch(url, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
      'Authorization': token,
    },
  })
}

const fetchGoogleKey = async ( token) => {
  const url = deliveriesBaseUrl + 'google-key'
  return await tryCatchFetch(url, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      'Authorization': token,
    },
  })
}

const fetchGeoCode = async (event, token) => {
  const googleKey = await fetchGoogleKey(token)
  const url = geoCodeBaseUrl + assembleAddress(event) +googleKey.key
  return await tryCatchFetch(url)
}

const assembleAddress = (event) => {
  let address = event.target.name.value + ' , ' + event.target.street.value + ' , ' +  event.target.suite.value + ' , ' +  event.target.city.value + ' , ' + event.target.state.value + ' , ' + event.target.postal_code.value
  const cleanedAddress = address.split('').map((element) => {
    if (element == ' ') {
      return element = '%20'
    } else return element
  }).join('')
  return cleanedAddress
}

const exportItems = {
  fetchLocations,
  fetchLocationDetails,
  fetchNewLocation,
  fetchGeoCode,
  tryCatchFetch,
  fetchUpdateLocation,
  fetchDeleteLocation,
}

export default exportItems