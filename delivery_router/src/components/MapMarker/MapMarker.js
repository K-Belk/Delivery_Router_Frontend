import React from 'react'
import {CircleMarker, Popup} from 'react-leaflet'

const MapMarker = (props) => {

  const {location} = props

  return (
    <div>

      <CircleMarker 
          center={[location.address.latitude,location.address.longitude]} 
          color='#ea0a8e' 
          fillOpacity={1}
          >
        <Popup>
          {location.name} <br /> {location.notes}
        </Popup>
        </CircleMarker>

    </div>
  )
}

export default MapMarker