import React from 'react'
import {  Col, Container, Row } from 'react-bootstrap'
import Login from '../components/Auth/Login'
import SignupPopup from '../components/SignupPopup/SignupPopup'


const HomePage = () => {

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className='login' >
              <Login/>
            </div>
          </Col>
        </Row>
      </Container>
      <SignupPopup />
    </div>
    )
}

export default HomePage