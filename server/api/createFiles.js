const router = require('express').Router()
const { copyFile, constants, readdir, writeFile, mkdir } = require( 'fs/promises');
const { existsSync, openSync } = require('fs')
const path = require('path')
const readFilesRec = require('fs-readdir-recursive')
const multer = require('multer')

const storage = multer.diskStorage({

})
const upload = multer({storage: storage})

router.post('/upimage', (req, res, next) => {
  try {} catch(err) {
    next(err)
  }
})



module.exports = router
