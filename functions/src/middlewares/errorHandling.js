

const errorHandler = (err, req, res, next) => {
  // console.error(err.stack)
  if (res.headersSent) {
    return next(err)
  }
  res.status(500).json({ error: 'internal server error' })
}

const joiErrorHandling = (err, req, res, next) => {
  // console.log('joiErrorHandling', err)
  if (err.error.isJoi) {
    // we had a joi error, let's return a custom 400 json response
    res.status(400).json({
      type: err.type, // will be "query" here, but could be "headers", "body", or "params"
      message: err.error.toString()
    });
  } else {
    // pass on to another error handler
    next(err);
  }
}

export {
  errorHandler,
  joiErrorHandling,
}