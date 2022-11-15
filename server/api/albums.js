const router = require('express').Router()
const { Kitten } = require("../db").models
const fs = require('fs');

//  /api/albums

function readFilePaths(path) {
  const mainPath = 'public/catImageRouter'
  try {
    const files = fs.readdirSync(mainPath+path.toLowerCase()) // array of strings
    return files
  } catch (e) {
    console.log(`ERROR FROM api/albums:: failed to find image dir from path: ${e}.`)
  }
}

//  requires id query
router.get('/kitten', async (req, res, next) => {
  try {
    if(!req.query.id) {
      throw Error('This api route requires an id query')
    }
    const kitten = await Kitten.findByPk(req.query.id)
    if(!kitten) {
      throw Error('no match found from /api/albums/kitten')
    }
    const name = kitten.name.toLowerCase()
    const paths = readFilePaths(`/${name}`)
    paths ?
      res.send(paths.map(path => (`/catImageRouter/${name}/${path}`))) :
      res.send('Code should not reach here')
  } catch (err) {
    next(err)
  }
})

module.exports = router
