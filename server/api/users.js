const { Op } = require('sequelize')
const router = require('express').Router()
const { User, InitialUser } = require('../db').models
const passAuth = require('../expressMiddleware/checkValidAuthLevel')
const { generate } = require('generate-password')
const transporter = require('../transporter')
const templateApprovedUser = require('../emailTemplates/templateApprovedUser')
const templateDeniedUser = require('../emailTemplates/templateDeniedUser')
const templateNewApplicantNotification = require('../emailTemplates/templateNewApplicantNotification')

//  api/users

router.get('/', async (req, res, next) => {
  passAuth(2, req, res)
  try {
    const users = await User.findAll({
      attributes: {exclude: ['password', 'updatedAt']}
    })
    res.send(users)
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
    res.send(users)
  } catch (err) {
    next(err)
  }
})

router.post('/validate', async (req, res, next) => {
  try {
    let isValidSubmission = true
    if(!req.body.eMail) {
      isValidSubmission = false
      res.send({isValidSubmission})
    }
    // email validation
    const allEmailsData = await User.findAll({attributes: ['eMail']})
    const allEmails = allEmailsData.map(ele => ele.dataValues.eMail)
    if(allEmails.includes(req.body.eMail)) {
      isValidSubmission = false
    }
    res.send({isValidSubmission})
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try{
    //  furColors is an array that needs to be converted to a String before being stored.
    req.body.furColor = JSON.stringify(req.body.furColor)
    const newUser = await User.create(req.body)
    if(!newUser) {
      throw new Error('newUser creation failed')
    }
    newUser.password = ''
    transporter.sendMail(templateNewApplicantNotification(newUser))
    res.send({newUser})
  } catch (error) {
    next(error)
  }
})

router.put('/handleApplicant', async(req, res, next) => {
  try {
    passAuth(3, req, res)
    delete req.body.type
    const newPassword = generate({
      length: 16,
      numbers:true
    })
    const user = await User.findByPk(req.query.id)
    if (user) {
      if(!['guest', 'registered'].includes(user.type)) {
        throw new Error('cannot edit this user')
      }
      if(req.body.applyStatus === 'Denied') {
        req.body.type = 'guest'
        req.body.applyStatus = 'Denied'
        req.body.password = null
        transporter.sendMail(templateDeniedUser(req.body.eMail))
      } else {
        req.body.type = 'registered'
        req.body.applyStatus = 'Approved'
        req.body.password = newPassword
        transporter.sendMail(templateApprovedUser(req.body.eMail, newPassword))
      }
      const update = await user.update(req.body)
      res.send(update)
    } else {
      res.send({error: 'user update failed'})
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
