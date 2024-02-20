const Sequelize = require('sequelize')
const pkg = require('../../package.json')

require('dotenv').config()

const databaseName = pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '')

let config = {}

if(process.env.DATABASE_URL) {
  config = {
    logging: false,
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
} else {
  config = {
    logging: false
  }
}

const db = new Sequelize(
  process.env.DATABASE_URL
  ||
  `postgres://postgres:postgres@127.0.0.1:5432/${'psf-test'}`, config
  // `postgres://localhost:5400/${databaseName}`, config
)

module.exports = db
