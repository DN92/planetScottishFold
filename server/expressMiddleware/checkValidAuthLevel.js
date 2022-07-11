const passAuth = (minLevel, req) => {
  if(req.body.authLevel >= minLevel) {
    return true
  } else {
    throw Error('UNAUTHORIZED')
  }
}

module.exports = passAuth
