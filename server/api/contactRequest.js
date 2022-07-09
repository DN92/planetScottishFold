const router = require('express').Router()
const { Op } = require("sequelize");
const { ContactRequest } = require("../db").models

// api/contactRequests

router.get('/', async (req, res, next) => {
  try {
    const contactRequest= await ContactRequest.findAll({
      where: {
        hidden: {[Op.eq]: false}
      }
    })
    res.send(contactRequest)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try{
    const contactRequest= await ContactRequest.create(req.body)
    if(!contactRequest) {
      throw new Error('contactRequest creation failed')
    }
    res.send(contactRequest)
  } catch (err) {
    next(err)
  }
})

router.put('/', async(req, res, next) => {
  try {
    const contactRequest = req.query.id ?
      await ContactRequest.findByPk(req.query.id) :
      await ContactRequest.findByPk(req.body.id)
    const update = await contactRequest.update(req.body)
    if(!update) {
      throw new Error('mother update failed')
    }
    res.send(update)
  } catch (err) {
    next(err)
  }
})


module.exports = router
