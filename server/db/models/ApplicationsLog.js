const Sequelize = require('sequelize')
const db = require('../dbSetup')


const Application = db.define('application', {
  data: Sequelize.TEXT
})

module.exports = Application
