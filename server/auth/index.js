const router = require('express').Router()
const {models:{ User } } = require('../db')

//  auth

router.post('/login', async (req, res, next) => {
  try {
    res.send({ token: await User.authenticate(req.body)});
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
    if(err.name == 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists')
    } else {
      next (err)
    }
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

module.exports = router
