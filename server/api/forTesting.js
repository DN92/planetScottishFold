const router = require('express').Router()
const db = require('../db')


router.get('/processEnv', (req, res, next ) => {
  res.sendStatus(200)
})


module.exports = router
