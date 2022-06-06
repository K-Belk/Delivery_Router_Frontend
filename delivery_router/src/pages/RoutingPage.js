import React, { useContext, useEffect, useState } from 'react'
import DisplayMap from '../components/Map/DisplayMap'
import LocationsApi from '../api/LocationsApi'
import RoutingApi from '../api/RoutingApi'
import RouteSelectionList from '../components/RouteSelectionList/RouteSelectionList'
import { Button, Form } from 'react-bootstrap'
import { RoutingContext } from '../contexts/RoutingContext'
import useAuth from '../hooks/AuthHooks'
import Directions from '../components/Directions/Directions'

const RoutingPage = () => {

  const latLng = [40.814486, -96.711091]

  const [locations, setLocations] = useState()
  const [directions, setDirections] = useState()
  const [stepByStep, setStepByStep] = useState()
  
  const {selectedDeliveries} = useContext(RoutingContext)

  const { tokenOk, authToken } = useAuth()

  useEffect(() => {
    const getLocations = async () => {
      const data = await LocationsApi.fetchLocations(authToken)
      setLocations(data)
    }
    tokenOk()
    getLocations()
  }, [])

  useEffect(() => {
    setDirections()
    setStepByStep()
  }, [selectedDeliveries])

  const handleRouting = async (event) => {
    event.preventDefault()
    const submittedData = await RoutingApi.fetchRoutes(selectedDeliveries, authToken)
    let route = submittedData.routes.map((route) => {
      return route.steps.map((step) => {
        return [step.location[0], step.location[1]]
      })
    })
    const fetchedDirections = await RoutingApi.fetchDirections(route[0], authToken)
    setDirections(fetchedDirections)
    stepByStepSetup(submittedData.routes[0].steps, fetchedDirections)
    return 
  }

  const stepByStepSetup = (stops, directions) => {
    let data = []
    stops.map((stop,idx) => {
      if(stop.type !== 'start') {
        data.push({
          location: ((stop.type == 'end') ? {name: 'Eleanor'} : selectedDeliveries.find((location) => location.id === stop.id)),
          steps: directions.features[0].properties.segments[idx-1].steps
        })
      }
    })
    return setStepByStep(data)
  }

  return (
    <div className='body' >
      <div onSubmit={handleRouting}>
        <DisplayMap latLng={latLng} locations={selectedDeliveries} directions={directions} />
        {stepByStep && <Directions directions={stepByStep} />}
        <Form className='selection-list' >
          <RouteSelectionList locations={locations} />
          <Button id='toggle' variant='primary' type='submit' className='selection-list' >
          Route
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default RoutingPage