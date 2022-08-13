const router = require('express').Router()
const { CatAsKitten } = require("../db").models

  // /api/catAsKitten

router.get('/', async (req, res, next) => {
  try {
    const cats = await CatAsKitten.findAll()
    res.send(cats)
  } catch (err) {
    next(err)
  }
})

module.exports = router
