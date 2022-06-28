const router = require('express').Router()
const { AnonVisitor } = require("../db").models

// api/anonVisitor

router.get('/', async (req, res, next) => {
  try {
    const anonVisitor= await AnonVisitor.findAll()
    res.send(anonVisitor) // array
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try{
    const newAnonVisitor= await AnonVisitor.create(req.body)
    if(!newAnonVisitor) {
      throw new Error('newAnonVisitor creation failed')
    }
    res.send(newAnonVisitor)
  } catch (err) {
    next(err)
  }
})

router.put('/', async(req, res, next) => {
  try {
    const anonVisitor = await AnonVisitor.findByPk(req.query.id)
    const update = await anonVisitor.update(req.body)
    if(!update) {
      throw new Error('anonVisitor update failed')
    }
    res.send(update)
  } catch (err) {
    next(err)
  }
})
anonVisitor
router.delete('/', async(req, res, next) => {
  try {
    const anonVisitorToDelete = await AnonVisitor.findByPk(req.query.anonVisitorId)
    if(anonVisitorToDelete) {
      await anonVisitorToDelete.destroy()
      res.send(202)
    } else {
      res.send(401)
    }
  } catch (err) {
    next(err)
  }
})

module.exports = router
