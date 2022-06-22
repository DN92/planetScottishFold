const Sequelize = require('sequelize')
const pkg = require('../../package.json')

//  2 databases are associated with this app. psf and psf-test, the latter being a test server
const databaseName = pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '')

let dbConfiguration = {}

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
  process.env.DATABASE_URL ||
  `postgres://localhost:5432/${databaseName}`, dbConfiguration
)

module.exports = db
