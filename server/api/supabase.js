const router = require('express').Router()
const includeSupabase = require('../expressMiddleware/includeSupabase')

router.get('/', includeSupabase, async (req,res,next) => {
  res.send({msg: 'successful endpoint', db: req.supabase})
})

module.exports = router
