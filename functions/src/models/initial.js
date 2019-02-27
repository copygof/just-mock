import admin from 'firebase-admin'

const initialize = () => (
  admin.initializeApp()
  .firestore()
  .settings({
    timestampsInSnapshots: true
  })
)

export default initialize