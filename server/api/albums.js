const router = require('express').Router()
const { Kitten, Stud, Mother } = require("../db").models
const { readdir, mkdir, writeFile, copyFile } = require( 'fs/promises');
const { existsSync, readdirSync } = require('fs');
const path = require('path')

router.get('/', async (req, res, next) => {
  try {
    const tarBase = `catImageRouter`
    const tarParentDir = `public/${tarBase}`
    const { id, type} = req.query
    if( ! (id && type ) ) {
      throw Error('api albums requires an id and type')
    }
    const tarDir = tarParentDir + `/${type}${id}`
    if(!existsSync(tarDir)) {
      await mkdir(tarDir)
    }
    if(readdirSync(tarDir).length === 0) {
      const animal = await (async () => {
        switch (type.toLowerCase()) {
          case 'kitten': {
            return await Kitten.findByPk(id)
          }
          case 'dam': {
            return await Mother.findByPk(id)
          }
          case 'sire': {
            return await Stud.findByPk(id)
          }
          default:
            return null
          }
        })()
      if(animal) {
        const { mainImageSrcValue }= animal
        const extname = path.extname(mainImageSrcValue)
        await copyFile(`public${mainImageSrcValue}`, `${tarDir}/main${extname}`)
      }
    }
    const publicPath = `/${tarBase}/${type}${id}`
    const files = readdirSync(tarDir).sort((a, b) => (a === 'main.jpg' ? -1 : 1))
    res.send(files.map(file => `${publicPath}/${file}`))

  } catch (err) {
    next(err)
  }
})

module.exports = router
