import Joi from 'joi'

const headerSchema = Joi.object({
  // no auth token means no access!
  // 'authorization': Joi.string().regex(/^Bearer [A-Za-z0-9]+/).required(),
  // an api version must be specified
  // 'x-api-version': Joi.number().valid(1.0, 1.1, 1.2, 2.0)
  'Content-Type': 'application/json'
})

export default headerSchema