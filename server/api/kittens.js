const router = require('express').Router()
const { Kitten } = require("../db").models
const fs = require('fs');
const passAuth = require('../expressMiddleware/checkValidAuthLevel')

// api/kittens

router.get('/', async (req, res, next) => {
  try {
    if(req.query.id) {
      res.send(await Kitten.findByPk(req.query.id))
    } else {
      res.send(await Kitten.findAll())
    }
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try{
    passAuth(3, req, res)
    const newKitty = await Kitten.create(req.body)
    if(!newKitty) {
      throw new Error('newKitty creation failed')
    }
    res.send(newKitty)
  } catch (err) {
    next(err)
  }
})

router.put('/', async(req, res, next) => {
  try {
    passAuth(3, req, res)
    const kitten = await Kitten.findByPk(req.body.id)
    const update = await kitten.update(req.body)
    if(!update) {
      throw new Error('kitten update failed')
    }
    res.send(update)
  } catch (err) {
    next(err)
  }
})

router.delete('/', async(req, res, next) => {
  try {
    passAuth(4, req, res)
    const kittenToDelete = await Kitten.findByPk(req.query.kittenId)
    if(kittenToDelete) {
      await kittenToDelete.destroy()
      res.send(202)
    } else {
      res.send(401)
    }
  } catch (err) {
    next(err)
  }
})

module.exports = router
