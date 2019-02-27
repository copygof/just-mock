import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import validator from 'express-joi-validation'
import initialize from './models/initial'
const { celebrate, errors } = require('celebrate');
import { errorHandler, joiErrorHandling } from './middlewares/errorHandling'
import headerSchema from './schema/header'
import routers from './routes'

const app = express()

// initialize database from firestore
initialize()

// support parsing of application/json type post data
app.use(bodyParser.json())
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors({ origin: true }))
app.use(validator().headers(headerSchema))
app.use(routers)
app.use(errors());
app.use(errorHandler)
app.use(joiErrorHandling)

export default app
