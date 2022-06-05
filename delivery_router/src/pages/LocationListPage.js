import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import LocationsApi from '../api/LocationsApi'
import AddOrUpdatePopup from '../components/AddOrUpdatePopup/AddOrUpdatePopup'
import LocationList from '../components/LocationList/LocationList'
import useAuth from '../hooks/AuthHooks'

const LocationsListPage = () => {

  const [locations, setLocations] = useState(null)
  const { tokenOk, authToken } = useAuth()

  useEffect(() => {
    const getLocations = async () => {
      const data = await LocationsApi.fetchLocations(authToken)
      setLocations(data)
    }
    tokenOk()
    getLocations()
  }, [])

  return (
    <div className='body' >
      <div >
        <AddOrUpdatePopup buttonName='Add' />
      </div>
      <div>
        <LocationList locations={locations} />
      </div>
    </div>
  )
}
export default LocationsListPage