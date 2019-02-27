import express from 'express'
import { celebrate } from 'celebrate'
import * as User from '../models/user'
import userSchema from '../schema/user'

const router = express.Router()

router.get('/:userId', (req, res) => {
    // const errors = validationResult(req)

    // if (!errors.isEmpty()) {
    //   return res.status(422).json({ errors: errors.array(), code: 422 })
    // }

    return User
      .getUserById(req.params.userId)
      .then(data => res.status(200).json(success(data)))
      .catch(error => res.status(400).json(failure(error)))
  })

  
router.post('/', celebrate({ body: userSchema }), (req, res) => {
    // const errors = validationResult(req)

    // if (!errors.isEmpty()) {
    //   return res.status(422).json({ errors: errors.array(), code: 422 })
    // }
    // console.log('req.body', req)
    return res.status(200).json({ code: '200' })

    // return User
    //   .getUserById(req.params.userId)
    //   .then(data => res.status(200).json(success(data)))
    //   .catch(error => res.status(400).json(failure(error)))
  })



export default router