/**
 * In your development environment, you can keep all of your
 * app's secret API keys in a file called `secrets.js`, in your project
 * root. This file is included in the .gitignore - it will NOT be tracked
 * or show up on Github. On your production server, you can add these
 * keys as environment variables, so that they can still be read by the
 * Node process on process.env
 */

const path = require('path')
const express = require('express')
const morgan = require('morgan')
const compression = require('compression')  // note to self = read docs about this
const { db } = require('./db')
const PORT = process.env.PORT || 8081
const app = express()

if (process.env.NODE_ENV !== 'production') require('../secrets')

const createApp = () => {
  // logging middleware
  app.use(morgan('dev'))

  // body parsers
  app.use(express.json())
  // app.use(express.urlencoded({extended: true}))

  // // compression middleware
  // app.use(compression())

  // api routes
  app.use('/api', require('./api'))

  app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'))
  });

  // file serving middleware
  app.use(express.static(path.join(__dirname, '..', 'public')))

  // remaining requests with an extension (.js, .css, other) send 404

  app.use((req, res, next) => {
    if (path.extname(req.path).length) {
      const err = new Error('File Could not be located- custom error')
      // console.log('request :: ', req)
      err.status = 404
      next(err)
    } else {
      next()
    }
  })

  // send index.html
  app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'))
  })

  // errorhandlers
  app.use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Endpoint Server Error')
  })
}

const startListening = async () => {
  // start listening and creates a server object
  const server = app.listen(PORT, () => {
    console.log(`App initialising. Now running on Port ${PORT}`)
  })
}

const syncDb = () => {
  db.sync()
}

async function bootStartApp() {
  await syncDb()
  await createApp()
  await startListening()
}

if (require.main === module) {
  bootStartApp()
  console.log(' boot start')
} else {
  createApp()
  console.log( ' create app')
}

 module.exports = app
