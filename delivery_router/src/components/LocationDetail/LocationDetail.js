import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import DeletePopup from '../DeletePopup/DeletePopup'
import AddOrUpdatePopup from '../AddOrUpdatePopup/AddOrUpdatePopup'

const LocationDetail = (props) => {

  const {locationDetails} = props

  return (
    <div>
      <Container >
      <Row >
      <Col> <AddOrUpdatePopup locationDetails={locationDetails} buttonName='Update' /> </Col>
      <Col className="d-flex justify-content-end" > <DeletePopup id={locationDetails.id} /> </Col>
      </Row>
        
      </Container>
    
      <div className='body selection-list' >
        {locationDetails['name'] + 
        ' ' + 
        locationDetails['address']['street'] + 
        ' ' + 
        ((locationDetails['address']['suite'] !== null) ? locationDetails['address']['suite'] + ' ': '') + 
        locationDetails['address']['city_and_state']['city'] + 
        ' ' + 
        locationDetails['address']['city_and_state']['state'] + 
        ' ' + 
        locationDetails['address']['city_and_state']['postal_code']}
  
      </div>
    <div className='body selection-list' >
    Some delivery stuff
    </div>
    
    </div>
    )
  }
  
  export default LocationDetail

