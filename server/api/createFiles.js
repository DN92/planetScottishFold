const router = require('express').Router()
const { unlink } = require('fs')
const path = require('path')
const fileExtensionValidator = require('../expressMiddleware/fileExtensionValidator')

const fileUpload = require('express-fileupload')

router.get('/upimage', (req, res, next) => {
  res.send({msg: 'hit get', result: path.join(path.dirname(__dirname), '../public/catImageRouter/')  })
})

router.post('/upimage',
  fileUpload({createParentPath: true}),
  fileExtensionValidator(['image', 'png', 'jpg', 'jpeg']),
  async (req, res, next) => {
  try {
    const sizeLimit = 8 * 1000000;
    const files = Object.values(req.files)
    const {filename, catName, category, id} = req.body

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

    files.forEach(file => {
      const date = new Date()
      const newFilename = date.toGMTString()
        .split(',')[1]
        .replaceAll(' ', '')
        .replaceAll('GMT', '')
        + '.'
        + filename
      const pathToWrite = path.join(`${path.dirname(__dirname)}`, '../public/catImageRouter', `${category}${id}`, newFilename)
      console.log('path will be:: ', pathToWrite)
      file.mv(pathToWrite, (err) => {
        if(err) {
          console.log('WRITE PROCESS ERRORED')
        }
      })
    })
    res.send({msg: ''})
  } catch(err) {
    next(err)
  }
})

router.delete('/images', (req, res, next) => {
  try {
    // confirm deletion only valid for catImageRouter Directory
    const validDir = 'catImageRouter'
    const tarPath = req.query.path || ''
    if(!tarPath.includes(validDir)) {
      res.send({success: false, msg:'bad target directory'})
      return
    }
    const basePath = path.join(__dirname, '..', '..', 'public' )
    const targetFile = tarPath.split(validDir)[1] ?? ''
    const pathToDelete = path.join(basePath, validDir, targetFile)
    unlink(pathToDelete, (err)=>{
      if(err) console.log('error from unlink:: ', err)
    })
    console.log('final:: ', pathToDelete)
    res.sendStatus(200)
  } catch (err) {
    next(err)
  }
})

module.exports = router
