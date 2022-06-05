import React, { createContext, useState } from 'react'

export const RoutingContext = createContext()

const RoutingContextProvider = (props) => {

  const [selectedDeliveries, setSelectedDeliveries] = useState([])

  return (

    <RoutingContext.Provider value={{selectedDeliveries, setSelectedDeliveries}} >
    {props.children}
    </RoutingContext.Provider>

  )
}

export default RoutingContextProvider