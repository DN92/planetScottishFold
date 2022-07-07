const Sequelize = require('sequelize')
const db = require("../dbSetup")
const { furColors, eyeColors, defaultCatPictureSrc } = require("../../../myModelsConfig")

const Stud = db.define('stud', {
  name: {
    type: Sequelize.STRING
  },
  serialNumber:{
    type:Sequelize.STRING
  },
  ears: {
    type: Sequelize.ENUM('fold', 'straight', '')
  },
  // furColor: {
  //   type: Sequelize.ENUM(...furColors,  '')
  // },
  furColor: {
    type:Sequelize.STRING
  },
  eyeColor: {
    type: Sequelize.ENUM(...eyeColors,  '')
  },
  age: {
    type: Sequelize.INTEGER
  },
  dob: {
    type:Sequelize.STRING
  },
  status: {
    type: Sequelize.ENUM('active', 'retired', ''),
    defaultValue: 'active'
  },
  mainImageSrcValue: {
    type:Sequelize.STRING,
    defaultValue: defaultCatPictureSrc,
    validate: {
      notEmpty: true
    }
  },
})

module.exports = Stud
