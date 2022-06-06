import React from 'react'
import LocationsContextProvider from '../../contexts/LocationsContext'
import RouteSelection from '../RouteSelection/RouteSelection'

const RouteSelectionList = (props) => {

  const {locations} = props

  const ListOfLocations = (locations) => {
    if (locations) {
      return locations.map((location) => 
      <RouteSelection
      key={location['id']}
      location={location}
      />)

    }
  }

  return (
    <LocationsContextProvider>
  
      {ListOfLocations(locations)}
  
    </LocationsContextProvider>
  )
}

export default RouteSelectionList