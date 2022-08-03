const router = require('express').Router()
const { User } = require('../db').models
const passAuth = require('../expressMiddleware/checkValidAuthLevel')
const pwGenerator = require('generate-password')
const { Op } = require('sequelize')

//  api/users

router.get('/', async (req, res, next) => {
  passAuth(2, req, res)
  try {
    const users = await User.findAll({
      attributes: {exclude: ['password', 'updatedAt']}
    })
    res.send(users) // array
  } catch (err) {
    next(err)
  }
})

router.get('/pending', async (req, res, next) => {
  passAuth(2, req, res)
  try {
    const users = await User.findAll({
      attributes: {exclude: ['password', 'updatedAt']},
      where : {
        applyStatus: 'Pending',
        type: ['registered', 'guest', null]
      }
    })
    res.send(users) // array
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try{
    const allEmailsData = await User.findAll( {attributes: ['eMail']} )
    const allEmails = allEmailsData.map(ele => ele.dataValues.eMail)
    if(!req.body.eMail) {
      res.status(400).send({errorMessage: 'Email Field Empty'})
      return
    }
    if(allEmails.includes(req.body.eMail)) {
      res.status(400).send({errorMessage: 'That Email already Exists'})
      return
    }
    //  furColors is an array that needs to be converted to a String before being stored.
    req.body.furColor = JSON.stringify(req.body.furColor)
    //  generate random password
    req.body.password = pwGenerator.generate({
      length: 10,
      numbers: true,
    })
    const newUser = await User.create(req.body)
    if(!newUser) {
      throw new Error('newUser creation failed')
    }
    res.send(newUser)
  } catch (error) {
    next(error)
  }
})

router.put('/handleApplicant', async(req, res, next) => {
  try {
    passAuth(3, req, res)
    delete req.body.type
    const user = await User.findByPk(req.query.id)
    if (user) {
      if(!['guest', 'registered'].includes(user.type)) {
        throw new Error('cannot edit this user')
      }
      if(req.body.applyStatus === 'Denied') {
        req.body.type = 'guest'
      } else {
        req.body.type = 'registered'
      }
      const update = await user.update(req.body)
      if(update) {
        res.send(update)
      }
    } else {
      throw new Error('user update failed')
    }
  } catch (err) {
    next(err)
  }
})

router.delete('/', async(req, res, next) => {
  try {
    passAuth(4, req, res)
    const userToDelete = await User.findByPk(req.query.userId)
    if(userToDelete) {
      await userToDelete.destroy()
      res.send(202)
    } else {
      res.send(401)
    }
  } catch (err) {
    next(err)
  }
})

module.exports = router
