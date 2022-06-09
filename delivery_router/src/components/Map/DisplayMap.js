import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, GeoJSON, CircleMarker } from 'react-leaflet'
import MapMarker from '../MapMarker/MapMarker'
import RoutingApi from '../../api/RoutingApi'
import useAuth from '../../hooks/AuthHooks'


const DisplayMap = (props) => {

  const {latLng, locations, directions} = props
  const [mapUrl, setMapUrl] = useState('')
  const { authToken } = useAuth()
  

  useEffect(() => {
    const getMapKey = async () => {
      const mapKey = await RoutingApi.fetchMapKey(authToken)
      setMapUrl('https://tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token='+mapKey.key)
    }
    getMapKey()
  }, [])

  const locationMarkers = () => {
    if (locations) {
      return locations.map((location) => 
      <MapMarker 
      key={location['id']}
      location={location}
      />)
    }

    return 
  }

  return (
    <div>
      <MapContainer center={latLng} zoom={13} fitBounds={true} >
      {mapUrl && <TileLayer
      url={mapUrl}
      />}
      {directions && <GeoJSON data={directions.features[0]} />}
        <CircleMarker 
          center={latLng} 
          color='#ea0a8e' 
          fillOpacity={1}
          >
          <Popup>
          Eleanor Distribution Center
        </Popup>
          </CircleMarker>

        {locationMarkers()}
      </MapContainer>



    </div>
  )
}

export default DisplayMap