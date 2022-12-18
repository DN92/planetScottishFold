const router = require('express').Router()
const includeSupabase = require('../expressMiddleware/includeSupabase')

router.get('/', includeSupabase, async (req,res,next) => {
  res.send({msg: 'successful endpoint', db: req.supabase})
})

router.get('/test1', includeSupabase, async(req, res, next ) => {
  try{
    if (!req.supabse) {
      throw Error('missing supabase credentials')
    }

    const { supabase } = req.supabase
    const { data, error } = await supabase.storage.from('testkitty1').list('folder', {
      limit: 100,
      offset: 0,
      sortby: {
        column: 'name',
        order: 'asc',
      }
    })
    if (error) {
      throw Error(error)
    }
    res.send({data: data})
  } catch(err) {
    next(err)
  }
})

module.exports = router
