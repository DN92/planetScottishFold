const router = require('express').Router()
const db = require('../db')
const { Kitten, Mother, Father } = db.models


//  api/
router.use('/kittens', require('./kittens'))
router.use('/mothers', require('./mothers'))
router.use('/studs', require('./studs'))
router.use('/users', require('./users'))
router.use('/anonVisitors', require('./anonVisitor'))
router.use('/forTesting', require('./forTesting'))  //  delete later

// router.get('/getImage', async (req, res, next) => {
//   try {
//     const image = '<image src="/catPictures/artemis.jpg">'
//     res.send(image)
//   } catch (err) {
//     next (err)
//   }
// })

router.get('/fullDB', async (req, res, next) => {
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

// router.get('/justImages', async (req, res, next) => {
//   try {
//     const kittens = await Kitten.findAll()
//     res.send(kittens.map(kitten => {
//       return `<img src=${kitten.mainImageSrcValue}>`
//     }))
//   } catch (err) {
//     next(err)
//   }
// })


// error endpoint
router.use((req, res, next) => {
  const error = new Error('Not Found --api index.js')
  error.status = 404
  next(error)
})



module.exports = router
