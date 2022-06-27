const router = require('express').Router()
const axios = require('axios')
const { Kitten } = require("../db").models

// api/kittens

router.get('/', async (req, res, next) => {
  try {
    const kittens = await Kitten.findAll()
    res.send(kittens) // array
  } catch (err) {
    next(err)
  }
})

module.exports = router
