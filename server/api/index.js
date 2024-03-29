const router = require('express').Router()
const db = require('../db')
const setAuthorizations = require('../expressMiddleware/setAuthLevel')

//  jwt verifier middleware
router.use(setAuthorizations)

//  api/
router.use('/albums', require('./albums'))
router.use('/kittens', require('./kittens'))
router.use('/mothers', require('./mothers'))
router.use('/fathers', require('./fathers'))
router.use('/users', require('./users'))
router.use('/contactRequests', require('./contactRequest'))
router.use('/emails', require('./emails'))
router.use('/catAsKitten', require('./catAsKitten'))
router.use('/applications', require('./applications'))
router.use('/reviews', require('./reviews'))
router.use('/createFiles', require('./createFiles'))
router.use('/supabase', require('./supabase'))

// error endpoint
router.use((req, res, next) => {
  const error = new Error(`Not Found --api index.js, path:: ${req.path}`)
  error.status = 404
  next(error)
})

module.exports = router
