const Sequelize = require('sequelize')
const db = require("../db")

const Father = db.define('father', {
  ears: {
    type: Sequelize.ENUM('fold', 'straight')
  },
  color: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.INTEGER
  },
})

module.exports = Father
