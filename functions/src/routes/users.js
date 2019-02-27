import express from 'express'
import * as User from '../models/user'
import { success, failure } from './utils'

const router = express.Router()

router.get('', (req, res) => {
  return User
    .getAllUser()
    .then(data => res.status(200).json(success(data)))
    .catch(error => res.status(400).json(failure(error)))
})

export default router