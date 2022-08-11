const router = require('express').Router();
const { InitialUser } = require("../db").models
let initRoute = null;

if(process.env.NODE_ENV !== 'production') {
  initRoute = require("../../secrets").initRoute
}

//  /api/init

const secretCode = process.env.natasha || initRoute

router.get('/', async (req, res, next) => {
  try {
    if(req.query.key !== secretCode) {
      res.status(403).send({message: "Bad internal Api Key"})
      return
    }
    res.send(await InitialUser.findAll({
      attributes: ['userId', 'firstPassword']
    }))
  } catch (err) {
    next(err)
  }
})

module.exports = router
