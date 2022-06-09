import React, { useEffect, useState } from 'react'
import DeliveryApi from '../../api/DeliveryApi'
import useAuth from '../../hooks/AuthHooks'

const LocationDeliveries = (props) => {

  const {locationDetails} = props
  const [deliveries, setDeliveries] = useState()

  const { authToken } = useAuth()

  useEffect(() => {
    
    const getLocationDeliveries = async () => {
      const data = await DeliveryApi.fetchLocationDeliveries(locationDetails.address.id, authToken)
      setDeliveries(data)
    }
    getLocationDeliveries()
  }, [])

  console.log(deliveries)

  return (
    <div>Location Deliveries

    </div>
  )
}

export default LocationDeliveries