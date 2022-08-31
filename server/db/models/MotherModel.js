const Sequelize = require('sequelize')
const db = require("../dbSetup")
const { statusOptionsParents, eyeColors, earOptions } = require("../../../myModelsConfig")

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
  dob: {
    type:Sequelize.STRING,
    defaultValue:'',
  },
  status: {
    type: Sequelize.ENUM(statusOptionsParents),
    defaultValue: statusOptionsParents[0]
  },
  description: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  breed: {
    type: Sequelize.STRING,
    defaultValue: '',
  },
  regNum: {
    type: Sequelize.STRING,
    defaultValue: ''
  },
  mainImageSrcValue: {
    type:Sequelize.STRING,
    defaultValue: '/otherPictures/photoComingSoon.png'
  },
})

module.exports = Mother
