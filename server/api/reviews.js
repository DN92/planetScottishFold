const router = require('express').Router()
const fs = require('fs');

//  /api/reviews

router.get('/', async (req, res, next) => {
  try {
    res.send(fs.readdirSync('public/reviews'))
  } catch(err) {
    next(err)
  }
})



module.exports = router
