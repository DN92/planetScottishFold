const router = require('express').Router()
const db = require('../db')


router.get('/processEnv', (req, res, next ) => {
  console.log('LOGGING PROCESS ENV ::  ' , process.env)
  res.sendStatus(200)
})


module.exports = router
