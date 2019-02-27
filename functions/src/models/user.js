import admin from 'firebase-admin'
import {
  getDocumentDetail,
  getDocumentListWithDetail
} from './utils'

const getAllUser = () => admin
  .firestore()
  .collection('users')
  .get()
  .then(getDocumentListWithDetail)

const getUserById = (userId) => {
  return admin
  .firestore()
  .collection('users')
  .doc(userId)
  .get()
  .then(getDocumentDetail)
}

export {
  getAllUser,
  getUserById,
}