import '../../App.css'
import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/AuthHooks'

const NavigationBar = () => {
  const navigate = useNavigate()

  const { onLogout, authToken, setSigningup } = useAuth()

  const handleLogout = (event) => {
    onLogout()
    return navigate('')
  }

  const handleSignup = (event) => {
      console.log('signup')
    return setSigningup(true)
  }


  return (
    <Navbar  >
      <Navbar.Brand id='nav-brand' >Eleanor Deliveries</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse id='Dark' className="justify-content-end" >
        <Nav.Link id='nav-link' onClick={() => navigate('locations/')} >Locations</Nav.Link>
        <Nav.Link id='nav-link' onClick={() => navigate('routing/')} >Routing</Nav.Link>
        {authToken ? <Nav.Link id='nav-link' onClick={() => handleLogout()} >Logout</Nav.Link>: <Nav.Link id='nav-link' onClick={() => handleSignup()} >Signup</Nav.Link>}
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationBar