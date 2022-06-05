import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/AuthHooks'

const Login = () => {

  const {onLogin} = useAuth()

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const loginData = {
      username: event.target[0].value,
      password: event.target[1].value,
    }
    onLogin(loginData)
    
    return navigate('/locations/')
  }

  return (
    <div>Login
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" >
      <Form.Control type="username" placeholder='Enter Username' name='username'/>
      </Form.Group>
      <Form.Group className="mb-3" >
      <Form.Control type="password" placeholder='Enter Password' name='password'/>
      </Form.Group>
      <Button id='toggle' variant='primary' type='submit'>
      Submit
      </Button>
    </Form>
    </div>
  )
}

export default Login