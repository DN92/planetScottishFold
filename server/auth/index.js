const router = require('express').Router()
const {models:{ User } } = require('../db')
const pwGenerator = require('generate-password')

//  auth

router.post('/login', async (req, res, next) => {
  try {
    //  throw back no and null passwords
    if(req.body.password) {
      res.send({ token: await User.authenticate(req.body)});
    } else {
      throw new Error('bad password')
    }
  } catch (err) {
    next(err)
  }
})

router.post('signup', async (req, res, next) => {
  try {
    const user = await User.create(req.body)
    if (user) {
      res.send({token: await user.generateToken()})
    }
  } catch (error) {
    next (err)
  }
})

router.get('/me', async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization)
    // deconstruct and reconstruct user for security
    const { type, eMail, id } = user
    res.send({type, eMail, id})
  } catch (err) {
    next(err)
  }
})

// error endpoint
router.use((req, res, next) => {
  const error = new Error('Not Found --auth index.js')
  error.status = 404
  next(error)
})

module.exports = router
