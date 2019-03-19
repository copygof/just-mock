import express from 'express'
import * as API from '../models/api'
import { success, failure } from './utils'

const router = express.Router()

/**
 * Get all API list
*/
router.get('/', (req, res) => {
  return API
    .getAllAPI()
    .then(data => res.status(200).json(success(data)))
    .catch(error => res.status(400).json(failure(error)))
})


/**
 * Create new endpoint
*/
router.post('/endpoint', (req, res) => {
  return API
    .addEndpoint(req.body.endpoint, {
      is_random: req.body.is_random,
      timeout: req.body.timeout,
    })
    .then(data => res.status(200).json(success(data)))
    .catch(error => res.status(400).json(failure(error)))
})


/**
 * Update endpoint detail
*/
router.put('/endpoint', (req, res) => {
  const { endpoint, ...reqData } = req.body
  return API
    .updateEndpoint(endpoint, reqData)
    .then(data => res.status(200).json(success(data)))
    .catch(error => res.status(400).json(failure(error)))
})


/**
 * Create api response by endpoint name
*/
router.post('/endpoint/response', (req, res) => {
  console.log('Create api response by endpoint name')
  const { endpoint, response_name, ...reqData } = req.body
  return API
    .addResponseByEndpoint(endpoint, response_name, {
      json_response: reqData.json_response,
      header: reqData.header,
      method: reqData.method,
      enable: reqData.enable,
    })
    .then(data => res.status(200).json(success(data)))
    .catch(error => res.status(400).json(failure(error)))
})


/**
 * Update response details by endpoint name
*/
router.put('/endpoint/response', (req, res) => {
  const { endpoint, response_name, ...reqData } = req.body
  return API
    .updateResponseByEndpoint(endpoint, response_name, reqData)
    .then(data => res.status(200).json(success(data)))
    .catch(error => res.status(400).json(failure(error)))
})


/**
 * All rounte of endpoint defined. 
*/
router.all('/:endpoint', (req, res) => {
  console.log('All rounte of endpoint defined. ')
  return Promise.all([
      API.getAPIByEndpointDetail(req.params.endpoint),
      API.getAPIByEndpointList(req.params.endpoint),
    ])
    .then(([endpointDetail, endpointList]) => {
      if (req.query.view) {
        return res.status(200).json(success({
          ...endpointDetail,
          items: endpointList
        }))
      }

      if (endpointList.length === 0) {
        return Promise.reject({
          message: 'endpoint is not exits.',
        })
      }

      const isRandomResponse = endpointDetail.is_random
      const responseTimeout = endpointDetail.timeout

      if (!isRandomResponse) {
        // when method is not eexits.
        if (endpointList[0].method.toUpperCase() !== req.method.toUpperCase()) {
          return Promise.reject({
            message: 'method is invalid.',
          })
        }
      
        return res
          .setTimeout(responseTimeout)
          .status(endpointList[0].json_response.code)
          .header(endpointList[0].header)
          .json(endpointList[0].json_response)
      }

      const endpointResponseEnable = endpointList.filter(value => value.enable)
      const getRndInteger = (min, max) => (Math.floor(Math.random() * (max - min + 1) ) + min)
      const randomResonseNumber = getRndInteger(0, endpointResponseEnable.length - 1)

      // when method is not eexits.
      if (endpointResponseEnable[randomResonseNumber].method.toUpperCase() !== req.method.toUpperCase()) {
        return Promise.reject({
          message: 'method is invalid.',
        })
      }

      return res
        .setTimeout(responseTimeout)
        .status(endpointResponseEnable[randomResonseNumber].json_response.code)
        .header(endpointResponseEnable[randomResonseNumber].header)
        .json(endpointResponseEnable[randomResonseNumber].json_response)

    })
    .catch(error => res.status(400).json(failure(error)))

})

/**
 * Get detail by id
*/
router.all('/:endpoint/:responseName', (req, res) => {
  return API
    .getAPIEndpointByResponseName(req.params.endpoint, req.params.responseName)
    .then(data => {
      // case is not exits in database
      if (Object.keys(data).length === 0) {
        return Promise.reject({
          message: 'endpoint is not exits.',
        })
      }

      // when method is not eexits.
      if (data.method.toUpperCase() !== req.method.toUpperCase()) {
        return Promise.reject({
          message: 'method is invalid.',
        })
      }
    
      return res
        .status(data.json_response.code)
        .header(data.header)
        .json(data.json_response)
    })
    .catch(error => res.status(400).json(failure(error)))
})

export default router