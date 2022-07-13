const router = require('express').Router()
const { Op } = require("sequelize");
const { ContactRequest } = require("../db").models
const passAuth = require('../expressMiddleware/checkValidAuthLevel')

// api/contactRequests

router.get('/', async (req, res, next) => {
  try {
    passAuth(3, req, res)
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
  passAuth(4, req, res)
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

router.put('/bulk', async (req, res, next) => {
  passAuth(4, req, res)
  try {
    const markReadArr = Object.keys(req.body.markRead)
      .filter(key => req.body.markRead[key] == true)
    const markDeleteArr = Object.keys(req.body.markDelete)
      .filter(key => req.body.markDelete[key] == true)
    await Promise.all([
      ContactRequest.update(
        { wasRead: true },
        { where: {
            id: markReadArr,
          },
        }
      ),
      ContactRequest.update(
        { hidden : true },
        { where: {
            id: markDeleteArr,
          },
        }
      )
    ])
    res.send(await ContactRequest.findAll())
  } catch (err) {
    next(err)
  }
})

router.delete('/', async(req, res, next) => {
  try {
    passAuth(5, req, res)
    const contactRequest = await ContactRequest.findByPk(req.query.kittenId)
    if(contactRequest) {
      await contactRequest.destroy()
      res.send(202)
    } else {
      res.send(401)
    }
  } catch (err) {
    next(err)
  }
})

module.exports = router
