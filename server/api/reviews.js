const router = require('express').Router()
const fs = require('fs');
const files = fs.readdirSync('public/reviews');

//  /api/reviews
router.get('/', async (req, res, next) => {
  try {
    res.send(files)
  } catch(err) {
    next(err)
  }
})



module.exports = router
