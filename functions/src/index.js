import * as functions from 'firebase-functions'
import admin from 'firebase-admin'
import expressApp from './app'

export const app = functions.https.onRequest((_, res) => {
  res.send('Say hi app')
})

export const api = functions.https.onRequest(expressApp)
