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
      const kittens = await Kitten.findAll()
      const shownOnly = kittens.filter(kitten => kitten.isHidden === 'false')
      res.send(shownOnly)
    }
  } catch (err) {
    next(err)
  }
})

router.get('/fromMother', async (req, res, next) => {
  try {
    if(!req.query.mother) {
      res.send(['didnt get a mother'])
      return
    }
    const fiveMostExpensiveKittensFromMotherWithId = await Kitten.findAll({
      attributes: ['mainImageSrcValue'],
      where: {
        mother: req.query.mother,
      },
      order: [['price', 'DESC']],
      limit: 5
    })
    const imageFiles = fiveMostExpensiveKittensFromMotherWithId.map(kitten => kitten.mainImageSrcValue);
    res.send(imageFiles.concat('success?'))
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
