const router = require('express').Router()
const { User } = require('../db').models

//  api/users

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll()
    res.send(users) // array
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try{
    const newUser = await User.create(req.body)
    if(!newUser) {
      throw new Error('newUser creation failed')
    }
    res.send(newUser)
  } catch (err) {
    next(err)
  }
})

router.put('/', async(req, res, next) => {
  try {
    const user = await User.findByPk(req.query.id)
    const update = await user.update(req.body)
    if(!update) {
      throw new Error('user update failed')
    }
    res.send(update)
  } catch (err) {
    next(err)
  }
})

router.delete('/', async(req, res, next) => {
  try {
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



module.exports = router
