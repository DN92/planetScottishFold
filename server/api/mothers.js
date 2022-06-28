const router = require('express').Router();
const { Mother } = require('../db').models

//  api/mothers

router.get('/', async (req, res, next) => {
  try {
    const mothers = await Mother.findAll()
    res.send(mothers)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try{
    const newMother = await Mother.create(req.body)
    if(!newMother) {
      throw new Error('newMother creation failed')
    }
    res.send(newMother)
  } catch (err) {
    next(err)
  }
})

router.put('/', async(req, res, next) => {
  try {
    const mother = await Mother.findByPk(req.query.id)
    const update = await mother.update(req.body)
    if(!update) {
      throw new Error('mother update failed')
    }
    res.send(update)
  } catch (err) {
    next(err)
  }
})

router.delete('/', async(req, res, next) => {
  try {
    const motherToDelete = await Mother.findByPk(req.query.motherId)
    if(motherToDelete) {
      await motherToDelete.destroy()
      res.send(202)
    } else {
      res.send(401)
    }
  } catch (err) {
    next(err)
  }
})

module.exports = router