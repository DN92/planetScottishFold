const router = require('express').Router();
const { InitialUser } = require("../db").models
let code = '';

if(process.env.NODE_ENV !== 'production') {
  code = require("../../secrets").initRoute
}

//  /api/init

const secretCode = process.env.natasha || code

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
