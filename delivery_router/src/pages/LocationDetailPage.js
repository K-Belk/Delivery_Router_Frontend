import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import LocationsApi from '../api/LocationsApi'
import LocationDetail from '../components/LocationDetail/LocationDetail'
import DisplayMap from '../components/Map/DisplayMap'
import{Card} from 'react-bootstrap'
import useAuth from '../hooks/AuthHooks'

const LocationDetailPage = () => {

  let {locationID} = useParams()

  const [locationDetails, setLocationDetails] = useState()

  const { tokenOk, authToken } = useAuth()

  

  useEffect(() => {

    const getLocationDetails = async () => {
      const data = await LocationsApi.fetchLocationDetails(locationID, authToken)
      setLocationDetails(data)
    }
    // add API for getting delivery details
    getLocationDetails()
  }, [])

  return (
    <div>
      <div className='map' >
        {locationDetails && <DisplayMap latLng={[locationDetails.address.latitude, locationDetails.address.longitude]} locations={[locationDetails]}  />}
      </div>
      <div className='body' >
        {locationDetails && <LocationDetail locationDetails={locationDetails} />}
      </div>
    </div>
  )
}

export default LocationDetailPage