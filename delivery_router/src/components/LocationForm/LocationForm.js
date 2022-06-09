import '../../App.css'
import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import LocationsApi from '../../api/LocationsApi'
import useAuth from '../../hooks/AuthHooks'

const LocationForm = (props) => {

  const { authToken } = useAuth()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const latLong = await getGeoCode(event, authToken)
    const newLocationData = {
      name: event.target.name.value,
      address: {
        street: event.target.street.value,
        suite: event.target.suite.value,
        city_and_state: {
          city: event.target.city.value,
          state: event.target.state.value,
          postal_code: event.target.postal_code.value,
        },
        latitude: latLong.results[0].geometry.location.lat,
        longitude: latLong.results[0].geometry.location.lng,
        notes: '',
      }
    }

    if (props.locationDetails){
      const submittedData = await LocationsApi.fetchUpdateLocation(newLocationData, props.locationDetails.id.toString(), authToken)
      if (submittedData.id) {
        event.target.reset()
      }
    } else {
      const submittedData = await LocationsApi.fetchNewLocation(newLocationData, authToken)
      if (submittedData.id) {
        event.target.reset()
    }
    }
  }

  const getGeoCode = async (event, authToken) => {
    const data = await LocationsApi.fetchGeoCode(event, authToken)
    return data
  }

  const handleChange = (event) => {
    // console.log(event)
    // console.log('change')
    return 
  }

  return (
    <div id="forms" >
      <Form onSubmit={handleSubmit} onChange={handleChange} >
      <Form.Group className="mb-3" >
        <Form.Label>Location Name</Form.Label>
        <Form.Control type="text" placeholder="Enter location name" name='name' defaultValue={props.locationDetails ? props.locationDetails.name : ''}/>
      </Form.Group>
    
      <Form.Group className="mb-3" >
      <Form.Label>Street</Form.Label>
        <Form.Control id="form-content"  type="text" placeholder="Street" name='street' defaultValue={props.locationDetails ? props.locationDetails.address.street : ''} />
      </Form.Group>
    
      <Form.Group className="mb-3" >
      <Form.Label>Street 2</Form.Label>
        <Form.Control type="text" placeholder="Street 2" name='suite' defaultValue={props.locationDetails ? props.locationDetails.address.suite : ''} />
      </Form.Group>
    
      <Form.Group className="mb-3" >
      <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="City" name='city' defaultValue={props.locationDetails ? props.locationDetails.address.city_and_state.city : ''} />
      </Form.Group>
    
      <Form.Group className="mb-3" >
      <Form.Label>State</Form.Label>
        <Form.Control type="text" placeholder="State" name='state' defaultValue={props.locationDetails ? props.locationDetails.address.city_and_state.state : ''} />
      </Form.Group>
    
      <Form.Group className="mb-3" >
      <Form.Label>Postal Code</Form.Label>
        <Form.Control type="text" placeholder="Postal Code" name='postal_code' defaultValue={props.locationDetails ? props.locationDetails.address.city_and_state.postal_code : ''} />
      </Form.Group>

      <Button id='toggle' variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  </div>
  )
}

export default LocationForm