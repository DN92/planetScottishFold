const Sequelize = require('sequelize')
const db = require("../dbSetup")
const { statusOptions, eyeColors, earOptions, defaultCatPictureSrc } = require("../../../myModelsConfig")

const Mother = db.define("mother", {
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
    type: Sequelize.ENUM(eyeColors),
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
