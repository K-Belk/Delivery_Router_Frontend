import React from 'react'
import LocationsContextProvider from '../../contexts/LocationsContext'
import Location from '../Location/Location'

const LocationList = (props) => {

  const {locations} = props
  
  const ListOfLocations = (locations) => {
    if (locations) {
      return locations.map((location) => 
      <Location 
      key={location['id']}
      location={location}
      />)

    }
  }

  return (
    <div>
      <div>
      <LocationsContextProvider>
        {ListOfLocations(locations)}
      </LocationsContextProvider>
      </div>
    </div>
    )
  }
  
  export default LocationList