import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { LocationsContext } from '../../contexts/LocationsContext'

const Location = (props) => {


  const {location} = props

  const {assembleFetchedLocation} = useContext(LocationsContext)



  return (
    <div>
    <NavLink className='RouteLinkItems' to={`${location.id}/`}>
    {assembleFetchedLocation(location).address}
    </NavLink>
    <hr className='list-line' />
    </div>
    )
  }
  
  export default Location