import React, { useContext } from 'react'
import { Form } from 'react-bootstrap'
import { RoutingContext } from '../../contexts/RoutingContext'

const RouteSelection = (props) => {

  const {location} = props


  const {selectedDeliveries, setSelectedDeliveries} = useContext(RoutingContext)

  const handleChange = (event) => {
    let deliveries = [...selectedDeliveries]
    // console.log(event.target.value)
    if (event.target.checked === true) {
      deliveries.push(location)
    } else {
      deliveries = deliveries.filter((ele) => ele !== location)
    }

    setSelectedDeliveries(deliveries)
    return 
  }
  
  return (

    <Form.Group className="mb-3" controlId="formBasicCheckbox" >
      <Form.Check 
      className='checkbox'
      type="checkbox"
      label={location.name} 
      name={location.name} 

      onChange={handleChange}
      />
    </Form.Group>

  )
}

export default RouteSelection

