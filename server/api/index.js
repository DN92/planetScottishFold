const router = require('express').Router()
const db = require('../db')
const setAuthorizations = require('../expressMiddleware/setAuthLevel')

//  jwt custom verifier middleware
router.use(setAuthorizations)

//  api/
router.use('/kittens', require('./kittens'))
router.use('/mothers', require('./mothers'))
router.use('/fathers', require('./fathers'))
router.use('/users', require('./users'))
router.use('/anonVisitors', require('./anonVisitor'))
router.use('/contactRequests', require('./contactRequest'))

// error endpoint
router.use((req, res, next) => {
  const error = new Error('Not Found --api index.js')
  error.status = 404
  next(error)
})



module.exports = router
