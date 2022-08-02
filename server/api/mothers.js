const router = require('express').Router();
const { Mother } = require('../db').models
const passAuth = require('../expressMiddleware/checkValidAuthLevel')

//  api/mothers

router.get('/', async (req, res, next) => {
  try {
    if(req.query.onlyNames) {
      const mothers = await Mother.findAll({
        attributes: ['name']
      })
      res.send(mothers.map(mother => mother.name))
      return
    }
    req.query.id
    ? res.send(await Mother.findByPk(req.query.id))
    : res.send(await Mother.findAll())
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try{
    passAuth(3, req, res)
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
    passAuth(3, req, res)
    const mother = req.query.id
      ? await Mother.findByPk(req.query.id)
      : await Mother.findByPk(req.body.id)
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
    passAuth(4, req)
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
