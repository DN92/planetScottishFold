const Sequelize = require('sequelize')
const db = require("../dbSetup")
const {furColors, eyeColors} = require("../../../myConfig")

const Kitten = db.define("kitten", {
  name: {
    type:Sequelize.STRING
  },
  gender:{
    type: Sequelize.ENUM('boy', 'girl')
  },
  ears:{
    type: Sequelize.ENUM('fold', 'straight')
  },
  furColor: {
    type: Sequelize.ENUM(...furColors)
  },
  eyeColor: {
    type: Sequelize.ENUM(...eyeColors)
  },
})

module.exports = Kitten
