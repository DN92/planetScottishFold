const router = require('express').Router()
const db = require('../db')
const { Kitten, Mother, Father } = db.models


//  api/

router.get('/fullDB', async   (req, res, next) => {
  try {
    // THIS IS FOR TESTING. DELETE WHEN DONE !!!!!!!!!
    const fullDataBase = {}
    fullDataBase.Kittens = await Kitten.findAll()
    fullDataBase.Mothers = await Mother.findAll()
    fullDataBase.Fathers = await Father.findAll()
    res.send(fullDataBase)
  } catch (err) {
    next(err)
  }
})


// error endpoint
router.use((req, res, next) => {
  const error = new Error('Not Found --api index.js')
  error.status = 404
  next(error)
})



module.exports = router
