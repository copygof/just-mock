import admin from 'firebase-admin'
import {
  getDocumentDetail,
  getDocumentListWithDetail
} from './utils'

const getAllProject = () => admin
  .firestore()
  .collection('project')
  .get()
  .then(getDocumentListWithDetail)

const getProjectById = (projectId) => {
  return admin
  .firestore()
  .collection('project')
  .doc(projectId)
  .get()
  .then(getDocumentDetail)
}

const updateMoskJsonResponse = (projectId, endpoint) => {
  return admin
    .firestore()
    .collection('project')
    .doc(projectId)
    .update('project_name', 'dfsfdfd')
    .then(getDocumentDetail)
}


export {
  getAllProject,
  getProjectById,
  updateMoskJsonResponse,
}