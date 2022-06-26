const Sequelize = require('sequelize')
const db = require("../db")

const Mother = db.define("mother", {
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

module.exports = Mother
