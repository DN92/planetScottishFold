const router = require('express').Router()
const { Stud } = require('../db').models
const { Op } = require("sequelize");
const passAuth = require('../expressMiddleware/checkValidAuthLevel')

// api/fathers

router.get('/', async (req, res, next) => {
  try {
    if(req.query.onlyNames) {
      const studs = await Stud.findAll({
        attributes: ['name'],
      })
      res.send(studs.map(stud => stud.name))
      return
    }
    req.query.id
    ? res.send(await Stud.findByPk(req.query.id))
    : res.send(await Stud.findAll({
      where: {
        isHidden: {
          [Op.eq]: 'false'
        }
      }
    }))
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try{
    passAuth(3, req, res)
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
    passAuth(3, req, res)
    const stud = req.query.id
      ? await Stud.findByPk(req.query.id)
      : await Stud.findByPk(req.body.id)
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
    passAuth(4, req, res)
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
