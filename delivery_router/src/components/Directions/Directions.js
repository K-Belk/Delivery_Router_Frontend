import React, { useState } from 'react'
import { Accordion, Card, useAccordionButton } from 'react-bootstrap/'
import DirectionsDetails from '../DirectionsDetails/DirectionsDetails'

const Directions = (props) => {

  const { directions } = props

  const CustomToggle = ({ children, eventKey }) => {
    const decoratedOnClick = useAccordionButton(eventKey, onclick);
  
    return (
      <div onClick={decoratedOnClick}>
        {children}
      </div>
    );
  }

  const displayDirections = () => {
    return directions.map((stop, idx) => 
    <Card id='accord-top' >
        <Card.Header>
          <CustomToggle eventKey={idx}>
          {stop.location.name}
          
          </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey={idx}>
          <DirectionsDetails steps={stop.steps}></DirectionsDetails>
        </Accordion.Collapse>
      </Card>
    )
  }

  return (
    <div >Directions
    <Accordion  defaultActiveKey="0">
      { displayDirections() }
    </Accordion>
  </div>
  )
}

export default Directions
