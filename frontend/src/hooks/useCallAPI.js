import { useState, useEffect } from 'react'
import axios from 'axios'

function useCAllAPI(req) {
  const [response, setResponse] = useState({
    isFetching: false,
    data: {},
    error: {},
    code: null
  })
 
  useEffect(() => {
    setResponse({
      isFetching: true,
      data: {},
      error: {},
      code: null
    })
  
    axios(req)
      .then(res => setResponse({
        isFetching: false,
        data: res.data.data,
        code: res.data.code,
        error: {},
      }))
      .catch((error) => setResponse({
        isFetching: false,
        error: error.error,
        code: error.code,
        error: {},
      }))
  }, [])

  return response
}

export default useCAllAPI
