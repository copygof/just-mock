import express from 'express'
import * as Project from '../models/project'
import { success, failure } from './utils'

const router = express.Router()

/**
 * Get all project
*/
router.get('/', (req, res) => {
  console.log('====================')
  console.log('Get all project')
  console.log('====================')
  return Project
    .getAllProject()
    .then(data => res.status(200).json(success(data)))
    .catch(error => res.status(400).json(failure(error)))
})

/**
 * Get detail by id
*/
router.get('/:projectId', (req, res) => {
  console.log('====================')
  console.log('Get detail by id')
  console.log('====================')

  return Project
    .getProjectById(req.params.projectId)
    .then(data => res.status(200).json(success(data)))
    .catch(error => res.status(400).json(failure(error)))
})

/**
 * Get endpoint response by project id
*/
router.get('/:projectId/:endpoint', (req, res) => {
  console.log('====================')
  console.log('Get endpoint response by project id')
  console.log('====================')

  return Project
    .getProjectById(req.params.projectId)
    .then(data => {
      // const realData = success(data)
      const mathEndpointInApiList = apiDetail => apiDetail.endpoint === req.params.endpoint
      const hasEndpointInAPIList = data.api_list.some(mathEndpointInApiList)
      if (!hasEndpointInAPIList) {
        return Promise.reject({
          message: 'Not has endpoint in API list',
        })
      }
  
      const endpointDetail = data.api_list.find(mathEndpointInApiList)
      const isRandomResponse = endpointDetail.is_random_response
      const endpointResponse = endpointDetail.response
      const responseTimeout = endpointDetail.response_timeout

      if (!isRandomResponse) {
        return res
          .setTimeout(responseTimeout)
          .status(endpointResponse[0].json_response.code)
          .header(endpointResponse[0].header)
          .json(endpointResponse[0].json_response)
      }

      const endpointResponseEnable = endpointDetail.response.filter(value => value.enable)
      const getRndInteger = (min, max) => (Math.floor(Math.random() * (max - min + 1) ) + min)
      const randomResonseNumber = getRndInteger(0, endpointResponseEnable.length - 1)

      return res
        .setTimeout(responseTimeout)
        .status(endpointResponseEnable[randomResonseNumber].json_response.code)
        .header(endpointResponseEnable[randomResonseNumber].header)
        .json(endpointResponseEnable[randomResonseNumber].json_response)
    })
    .catch(error => res.status(400).json(failure(error)))
})


/**
 * Upate endpoint response by project id
*/
router.post('/:projectId/:endpoint', (req, res) => {
  console.log('====================')
  console.log('Upate endpoint response by project id')
  console.log('====================')

  return Project
    .updateMoskJsonResponse(...req.params)
    .then(data => res.status(200).json(success(data)))
    .catch(error => res.status(400).json(failure(error)))
})


export default router