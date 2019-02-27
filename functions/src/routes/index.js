import express from 'express'
import userRoute from './user'
import usersRoute from './users'
import projectRoute from './project'
import version1Route from './version1'

const routers = express.Router()

routers.use('/user', userRoute)
routers.use('/users', usersRoute)
routers.use('/project', projectRoute)
routers.use('/v1', version1Route)



export default routers