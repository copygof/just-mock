import admin from 'firebase-admin'
import {
  getDocumentDetail,
  getDocumentListWithDetail
} from './utils'

const getAllAPI = () => admin
  .firestore()
  .collection('api_list')
  .get()
  .then(getDocumentListWithDetail)

const getAPIByEndpointDetail = (endpoint) => {
  return admin
    .firestore()
    .collection('api_list')
    .doc(endpoint)  
    .get()
    .then(getDocumentDetail)
}
const getAPIByEndpointList = (endpoint) => {
  return admin
    .firestore()
    .collection('api_list')
    .doc(endpoint)  
    .collection('response')
    .get()
    .then(getDocumentListWithDetail)
}

const getAPIEndpointByResponseName = (endpoint, resopnseName) => {
  return admin
    .firestore()
    .collection('api_list')
    .doc(endpoint)  
    .collection('response')
    .doc(resopnseName)
    .get()
    .then(getDocumentDetail)
}

/** Add endpoint */
const addEndpoint = (endpoint, data) => {
  return admin
  .firestore()
  .collection('api_list')
  .doc(endpoint)
  .set({
    is_random: true,
    timeout: 0,
    ...data,
  })
}

/** Update endpoint */
const updateEndpoint = (endpoint, data) => {
  return admin
  .firestore()
  .collection('api_list')
  .doc(endpoint)
  .update(data)
}

/** Add response */
const addResponseByEndpoint = (endpoint, responseName, data) => {
  return admin
  .firestore()
  .collection('api_list')
  .doc(endpoint)
  .collection('response')
  .doc(responseName)
  .set({
    json_response: {},
    header: {},
    method: "GET",
    enable: true,
    ...data,
  })
}

/** Update response */
const updateResponseByEndpoint = (endpoint, responseName, data) => {
  return admin
  .firestore()
  .collection('api_list')
  .doc(endpoint)
  .collection('response')
  .doc(responseName)
  .update(data)
}

export {
  getAllAPI,
  getAPIByEndpointDetail,
  getAPIByEndpointList,
  getAPIEndpointByResponseName,
  addEndpoint,
  updateEndpoint,
  addResponseByEndpoint,
  updateResponseByEndpoint,
}