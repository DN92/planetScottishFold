const Sequelize = require('sequelize')
const db = require("../dbSetup")
const { furColors, eyeColors } = require("../../../myModelsConfig")

const Stud = db.define('stud', {
  name: {
    type: Sequelize.STRING
  },
  serialNumber:{
    type:Sequelize.STRING
  },
  ears: {
    type: Sequelize.ENUM('fold', 'straight')
  },
  furColor: {
    type: Sequelize.ENUM(...furColors)
  },
  eyeColor: {
    type: Sequelize.ENUM(...eyeColors)
  },
  age: {
    type: Sequelize.INTEGER
  },
})

module.exports = Stud
