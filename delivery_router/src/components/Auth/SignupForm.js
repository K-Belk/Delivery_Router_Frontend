import React, { useState } from 'react'
import  { Form, Button } from 'react-bootstrap'
import AuthenticationApi from '../../api/AuthenticationApi'

const SignupForm = () => {

  const [signupError, setSignupError] = useState()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
      password2: event.target.confirmPassword.value,
      email: event.target.email.value,
      first_name: event.target.first_name.value,
      last_name: event.target.last_name.value,
    }
    
    const response = await AuthenticationApi.fetchSignup(data)
    if (response.ok) {
      return await response.json()
    }
    else if (response.status === 400) {
      setSignupError(await response.json())
      
    }
    else {
      throw new Error(`Bad Response: ${response.status} ${response.statusText}`)
    }
  }
  console.log(signupError)
  
  const displayErrors = (signupError) => {
    
    return signupError.map((val) => 
      <div>`${val.key}: ${val.value}` </div>
    )
  }

        // {signupError && <div> {displayErrors(signupError)} </div>}

  return (
      
      <Form onSubmit={handleSubmit} >


        <Form.Group className="mb-3" >
        <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Username" name='username' />
        </Form.Group>
    
        <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name='password' />
        </Form.Group>

        <Form.Group className="mb-3" >
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" name='confirmPassword' />
        </Form.Group>

        <Form.Group className="mb-3" >
        <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" name='email' />
        </Form.Group>

        <Form.Group className="mb-3" >
        <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="First Name" name='first_name' />
        </Form.Group>

        <Form.Group className="mb-3" >
        <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Last Name" name='last_name' />
        </Form.Group>

        <Button id='toggle' variant='primary' type='submit'>
        Submit
        </Button>

      </Form>
  )
}

export default SignupForm