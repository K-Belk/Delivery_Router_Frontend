import React, { createContext } from 'react'

export const LocationsContext = createContext()

const LocationsContextProvider = (props) => {

  const assembleFetchedLocation = (location) => {
    return {
      id:location['id'],
      address: (location['name'] + ' ' + location['address']['street'] + ' ' + ((location['address']['suite'] != null)? location['address']['suite'] + ' ' : '') + location['address']['city_and_state']['city'] + ' ' + location['address']['city_and_state']['state'] + ' ' + location['address']['city_and_state']['postal_code']) 
  }
    
    
  }

  return (
    <LocationsContext.Provider value={{assembleFetchedLocation}}>
      {props.children}
    </LocationsContext.Provider>
  )
}

export default LocationsContextProvider