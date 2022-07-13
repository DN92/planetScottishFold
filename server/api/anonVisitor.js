const router = require('express').Router()
const { AnonVisitor } = require("../db").models
const passAuth = require('../expressMiddleware/checkValidAuthLevel')

// DO I EVEN NEED THIS MODEL?

// api/anonVisitors

router.get('/', async (req, res, next) => {
  try {
    passAuth(3, req)
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
  passAuth(4, req, res)
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

//  DO I EVEN NEED THIS MODEL?

router.delete('/', async(req, res, next) => {
  passAuth(4, req, res)
  try {
    const anonVisitorToDelete = await AnonVisitor.findByPk(req.query.id)
    if(anonVisitorToDelete) {
      await anonVisitorToDelete.destroy()
      console.log('got TO THIS POINT IN THE DELETE ROUTE')
      res.sendStatus(202)
    } else {
      res.sendStatus(401)
    }
  } catch (err) {
    next(err)
  }
})

module.exports = router
