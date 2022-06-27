const Sequelize = require('sequelize')
const db = require('../dbSetup')

const User = db.define("user", {
  type: {
    type: Sequelize.ENUM('registered', 'ghost', 'admin', 'master')
  },
  password: {
    type: Sequelize.STRING,
    unique: true,
    validate: {
      notEmpty: true
    }
  },

})

module.exports = User
