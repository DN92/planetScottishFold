const Sequelize = require('sequelize')
const db = require('../dbSetup')


const Application = db.define('application', {
  type: Sequelize.TEXT
})

module.exports = Application
