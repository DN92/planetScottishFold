const Sequelize = require('sequelize')
const db = require("../dbSetup")
const { statusOptions, eyeColors, defaultCatPictureSrc } = require("../../../myModelsConfig")

const Mother = db.define("mother", {
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
    type: Sequelize.ENUM(...statusOptions),
    defaultValue: 'active'
  },
  mainImageSrcValue: {
    type:Sequelize.STRING,
    defaultValue: defaultCatPictureSrc,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT,
    defaultValue: ''
  }
})

module.exports = Mother
