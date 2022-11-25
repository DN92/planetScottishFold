const router = require('express').Router()
const { copyFile, constants, readdir, writeFile, mkdir } = require( 'fs/promises');
const { existsSync, openSync } = require('fs')
const path = require('path')
const readFilesRec = require('fs-readdir-recursive')

const testData = require('../testingImageRouting/forStaging')
const getStrutFileObjs = require('../testingImageRouting/getStrutFileObj')

const filesToCreate = getStrutFileObjs(testData)

router.get('/', async (req, res, next) => {
  try {
    const desRoot = path.resolve(__dirname + '/../uploadedContent/imageFiles')

    const reccurFiles = ( readFilesRec(__dirname + '/../uploadedContent/staging'))
    const files = getStrutFileObjs(reccurFiles)
    console.log(files)

    files.forEach(async obj => {
      const targetDir = `/${obj.dirname}`
      const fileName = `/${obj.type}.${obj.name}.${obj.order}.${obj.ext}`
      if (!existsSync(desRoot + targetDir)) {
        await mkdir(desRoot+targetDir)
      }
      await writeFile(desRoot+targetDir+fileName, '')

    })
    res.send(desRoot)
  } catch (err) {
    next(err)
  }
})

module.exports = router
