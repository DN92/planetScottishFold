const router = require('express').Router()
const { Stud } = require('../db').models

// api/studs

router.get('/', async (req, res, next) => {
  try {
    const studs = await Stud.findAll()
    res.send(studs) // array
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try{
    const newStud = await Stud.create(req.body)
    if(!newStud) {
      throw new Error('newStud creation failed')
    }
    res.send(newStud)
  } catch (err) {
    next(err)
  }
})

router.put('/', async(req, res, next) => {
  try {
    const stud = await Stud.findByPk(req.query.id)
    const update = await stud.update(req.body)
    if(!update) {
      throw new Error('stud update failed')
    }
    res.send(update)
  } catch (err) {
    next(err)
  }
})

router.delete('/', async(req, res, next) => {
  try {
    const studToDelete = await Stud.findByPk(req.query.studId)
    if(studToDelete) {
      await studToDelete.destroy()
      res.send(202)
    } else {
      res.send(401)
    }
  } catch (err) {
    next(err)
  }
})

module.exports = router