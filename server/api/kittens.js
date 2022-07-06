const router = require('express').Router()
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

router.post('/', async (req, res, next) => {
  try{
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
