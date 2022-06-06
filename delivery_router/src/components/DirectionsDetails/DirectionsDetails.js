import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'

const DirectionsDetails = (props) => {

  const { steps } = props

  const displaySteps = () => {
    return steps.map((step,idx) => 
    <Card.Body id='accord-content' >
      <hr className='list-line' />
      <div > {step.instruction} for {step.distance}mi </div>
    </Card.Body>
    )
  }

  return (
    <ListGroup>
    { displaySteps() }
    </ListGroup>
  )
}

export default DirectionsDetails