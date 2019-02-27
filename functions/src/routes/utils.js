

export const success = data => {
  if (data.error) {
    return failure(data.error, data.code)
  }
  return { data, code: 200 }
}
export const failure = ({ message, errors }, code = 400) => ({
  error: {
    ...message ? { message } : {},
    ...errors ? { errors } : {},
  },
  code
})
