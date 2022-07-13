const passAuth = (minLevel, req, res) => {
  if(req.body.authLevel >= minLevel) {
    return true
  } else {
    console.log('authLevel: ', req.body.authLevel, 'required: ', minLevel)
    res.status(401)
    throw Error('UNAUTHORIZED')
  }
}

module.exports = passAuth
