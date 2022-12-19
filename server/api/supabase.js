const router = require('express').Router()
const includeSupabase = require('../expressMiddleware/includeSupabase')

router.get('/', includeSupabase, async (req,res,next) => {
  res.send({msg: 'successful endpoint', db: req.supabase})
})

router.get('/byname', includeSupabase, async(req, res, next ) => {
  try{
    if (!req.supabase) {
      throw Error('MYERROR:: missing supabase credentials')
    }
    const { dir } = req.query
    const supabase = req.supabase
    const { data, error } = await supabase.storage
      .from(`${dir}`)
      .list('', {
        limit: 100,
        offset: 0,
        sortBy: {
          column: 'name',
          order: 'desc',
        }
      })
    // const { data, error } = await supabase.storage.listBuckets()
    if (error) {
      throw Error(error)
    }
    res.send({data: data})
  } catch(err) {
    next(err)
  }
})

router.get('/urlsByBucket', includeSupabase, async(req, res, next ) => {
  try {
    if (!req.supabase) {
      throw Error('LOCAL:: missing supabase credentials')
    }
    const supabase = req.supabase
    const { bucket } = req.query
    const { data, error } = await supabase.storage
      .from(`${ bucket }`)
      .list('', {
        limit: 100,
        offset: 0,
        sortBy: {
          column: 'name',
          order: 'desc',
        }
      })
    if (error) {
      throw Error(error)
    }
    const allURLs = await Promise.all(data.map(ele => (
      supabase.storage
        .from(`${ bucket }`)
        .getPublicUrl(`${ ele.name ?? '' }`)
    )))
    const final = allURLs.map(ele => (
      ele.data?.publicUrl
    ))
    res.send(final)
  } catch(err) {
    next(err)
  }
})

module.exports = router
