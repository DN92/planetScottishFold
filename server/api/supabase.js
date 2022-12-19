const router = require('express').Router()
const includeSupabase = require('../expressMiddleware/includeSupabase')
const fileUpload = require('express-fileupload')
const fileExtensionValidator = require('../expressMiddleware/fileExtensionValidator')

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

router.get('/testBucketCreator', includeSupabase, async (req, res, next) => {
  try{
    await req.supabase.storage.createBucket('testerBucket', {public: true})
    res.send({msg:'success?'})
  } catch(err) {
    next(err)
  }

})

router.post(
  '/imageUpload',
  includeSupabase,
  fileUpload({createParentPath: true}),
  fileExtensionValidator(['image', 'png', 'jpg', 'jpeg']),
  async (req, res, next) =>
  {
    try {
      const sizeLimit = 8 * 1000000;
      const files = Object.values(req.files)
      const {filename, catName, category, id} = req.body
      const supabase = req.supabase

      if (!(filename && catName && category && id)) {
        res.send({msg: 'missing required fields'})
        return
      }

      if (!files.length) {
        throw Error('no files received')
      }

      if (files.some(file => file.size > sizeLimit)) {
        throw Error(`file exceeds size limit of ${sizeLimit/1000000} megabytes`)
      }

      await supabase.storage.createBucket(`${category}${id}`, {public: true})

      await Promise.all(files.map(async file => {
        const date = new Date()
        const newFilename = date.toGMTString()
          .split(',')[1]
          .replaceAll(' ', '')
          .replaceAll('GMT', '')
          + '.'
          + filename
        const { data } = await supabase.storage
          .from(`${category}${id}`)
          .upload(
            `${newFilename}`,
            file.data,
            {
              upsert: true,
              contentType: 'image/png',
            }
          )
        return data
      }))
      res.sendStatus(204)
    } catch(err) {
      next(err)
    }
  }
)

module.exports = router
