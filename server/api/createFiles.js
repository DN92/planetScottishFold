const router = require('express').Router()
const { copyFile, constants, readdir, writeFile, mkdir } = require( 'fs/promises');
const { existsSync, openSync } = require('fs')
const path = require('path')
const readFilesRec = require('fs-readdir-recursive')
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

module.exports = router
