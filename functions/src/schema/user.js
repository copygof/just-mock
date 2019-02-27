import Joi from 'joi'

const userSchema = Joi.object({
  username: Joi.string().email(),
  password: Joi.string().required(),
  user_image: Joi.string(),
  facebook_account: Joi.string(),
  facebook_token: Joi.string(),
  google_token: Joi.string(),
})

export default userSchema