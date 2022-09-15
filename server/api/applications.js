const router = require('express').Router()
const Application = require('../db/models').Application

router.get('/applications', async (req, res, next) => {
  try {
    const data = await Application.findAll()
    req.send(data)

  } catch(err) {
    next(err)
  }
})
