import { map, pipe } from 'lodash/fp'

export const getDocumentList = ({ docs }) => docs
export const getDocumentDetail = doc => {
  if (doc.exists) {
    return { id: doc.id, ...doc.data() }
  }
  return { error: { message: 'Not found!' }, code: 404 }
}
export const getDocumentListWithDetail = queryDocSnapshot => pipe(getDocumentList, map(getDocumentDetail))(queryDocSnapshot)
