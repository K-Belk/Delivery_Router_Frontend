import React, { createContext, useEffect, useState } from 'react'
import AuthenticationApi from '../api/AuthenticationApi'
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext()

const AuthContextProvider = (props) => {

  
  
  const [authToken, setAuthToken] = useState(JSON.parse(sessionStorage.getItem('authToken')) || null)
  const [tokenExpire, setTokenExpire] = useState(JSON.parse(sessionStorage.getItem('tokenExpire')) || null)
  
  useEffect(() => {
    sessionStorage.setItem('authToken', JSON.stringify(authToken))
    sessionStorage.setItem('tokenExpire', JSON.stringify(tokenExpire))
  }, [authToken])
  
  const handleLogin = async (loginData) => {
    const tokenData = await AuthenticationApi.fetchLogin(loginData)
    setAuthToken('token ' + tokenData.token)
    setTokenExpire(new Date(tokenData.expiry).getTime())
    
  }

  const handleLogout = async () => {
    const logout = await AuthenticationApi.fetchLogout(authToken)
    setAuthToken(null)
    setTokenExpire(null)
    sessionStorage.clear()
  }
  
  const checkTokenExpiry = () => {
    if (Date.now() < new Date(tokenExpire).getTime()){
      return 'valid token'
    } else {
      handleLogout()
      return 'expired token'
    }
  }

  const value = {
    authToken,
    tokenExpire,
    onLogin: handleLogin,
    onLogout: handleLogout,
    tokenOk: checkTokenExpiry,
  }

  return (
    <AuthContext.Provider value={value}>
    {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider