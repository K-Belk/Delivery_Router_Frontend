import LocationsApi from '../api/LocationsApi'

const authBaseUrl = 'http://localhost:8000/api/auth/'

const fetchLogin = async (loginData) => {
  const url = authBaseUrl + 'login/'
  
  return await LocationsApi.tryCatchFetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(loginData)
  })
}

const fetchLogout = async (token) => {
  const url = authBaseUrl + 'logout/'
  console.log(url)
  return await LocationsApi.tryCatchFetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Authorization': token,
    }
  })
}

const fetchSignup = async (signupData) => {
  const url = authBaseUrl + 'signup'
  try {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(signupData)
  })
  return response
}
catch (e) {
  console.log(e)
  return null
}
}

const exportItems = {
  fetchLogin,
  fetchLogout,
  fetchSignup,
}

export default exportItems