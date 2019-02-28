import express from 'express'
import version1Route from './version1'

const routers = express.Router()

routers.use('/v1', version1Route)



export default routers