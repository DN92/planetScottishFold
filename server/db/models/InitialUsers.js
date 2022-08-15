const Sequelize = require('sequelize')
const db = require('../dbSetup')

const initialUser = db.define('initialUser', {
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: true,
  },
  firstPassword: {
    type: Sequelize.STRING,
  }
})

module.exports = initialUser
