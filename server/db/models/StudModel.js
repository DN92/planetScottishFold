const Sequelize = require('sequelize')
const db = require("../dbSetup")
const { eyeColors, defaultCatPictureSrc, statusOptions, earOptions } = require("../../../myModelsConfig")

const Stud = db.define('stud', {
  name: {
    type: Sequelize.STRING,
    defaultValue:'',
  },
  ears: {
    type: Sequelize.ENUM(earOptions),
    defaultValue: earOptions[0]
  },
  furColor: {
    type:Sequelize.STRING,
    defaultValue:'',
  },
  eyeColor: {
    type: Sequelize.ENUM(...eyeColors),
    defaultValue: eyeColors[0]
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
    defaultValue: statusOptions[0]
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
