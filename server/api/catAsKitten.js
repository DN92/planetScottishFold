const router = require('express').Router()
const { CatAsKitten } = require("../db").models

  // /api/catAsKitten

router.get('/', async (req, res, next) => {
  try {
    let data;
    req.query.id ?
      data = await CatAsKitten.findByPk(id) :
      data = await CatAsKitten.findAll()
    res.send(data)
  } catch (err) {
    next(err)
  }
})



module.exports = router
