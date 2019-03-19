import { useCAllAPI } from '../hooks'

const baseUrl = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? 'http://localhost:5001/just-mock/us-central1' : 'https://us-central1-just-mock.cloudfunctions.net'

const getAPIList = () => useCAllAPI(`${baseUrl}/api/v1/`)
const createNewAPI = (body = {}) => useCAllAPI({
  method: 'POST',
  url: `${baseUrl}/api/v1/endpoint`,
  body
})

export default {
  baseUrl,
  getAPIList,
  createNewAPI,
}