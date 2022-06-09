import LocationsApi from '../api/LocationsApi'

const deliveriesBaseUrl = 'http://localhost:8000/deliveries/'

const fetchNewDelivery = async (deliveryInformation, token) => {
  const url = deliveriesBaseUrl + 'deliveries/'
  return await LocationsApi.tryCatchFetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Authorization': token,
    },
    body: JSON.stringify(deliveryInformation)
  })
}

const fetchLocationDeliveries = async (addressId, token) => {
  const url = deliveriesBaseUrl + 'deliveries/' + `${addressId}`
  return await LocationsApi.tryCatchFetch(url, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      'Authorization': token,
    },
  })
}



const exportItems = {
  fetchNewDelivery,
  fetchLocationDeliveries,
}

export default exportItems