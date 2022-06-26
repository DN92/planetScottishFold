const Sequelize = require('sequelize')
const db = require("../../db")

const Kitten = db.define("kitten", {
  gender:{
    type: Sequelize.ENUM('boy', 'girl')
  },
  ears:{
    type: Sequelize.ENUM('fold', 'straight')
  },
  color: {
    type: Sequelize.ENUM('blue', 'brown', 'black', 'red', 'white', 'grey')
  },
  mif: {
    type: Sequelize.STRING
  },
})

module.exports = Kitten
