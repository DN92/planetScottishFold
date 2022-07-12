const Sequelize = require('sequelize')
const db = require("../dbSetup")
const { eyeColors, defaultCatPictureSrc, statusOptions } = require("../../../myModelsConfig")

const Stud = db.define('stud', {
  name: {
    type: Sequelize.STRING,
    defaultValue:'',
  },
  serialNumber:{
    type:Sequelize.STRING,
    defaultValue:'',
  },
  ears: {
    type: Sequelize.ENUM('fold', 'straight', '')
  },
  furColor: {
    type:Sequelize.STRING,
    defaultValue:'',
  },
  eyeColor: {
    type: Sequelize.ENUM(...eyeColors)
  },
  age: {
    type: Sequelize.INTEGER,
    defaultValue:0,
  },
  dob: {
    type:Sequelize.STRING,
    defaultValue:'',
  },
  status: {
    type: Sequelize.ENUM(statusOptions),
    defaultValue: 'active'
  },
  mainImageSrcValue: {
    type:Sequelize.STRING,
    defaultValue: defaultCatPictureSrc,
  },
  description: {
    type: Sequelize.TEXT,
    defaultValue: ''
  }
})

module.exports = Stud
