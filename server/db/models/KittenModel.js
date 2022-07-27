const Sequelize = require('sequelize')
const db = require("../dbSetup")
const {furColors, eyeColors, defaultCatPictureSrc, earOptions, genderOptions, statusOptionsKitten} = require("../../../myModelsConfig")

const Kitten = db.define("kitten", {
  name: {
    type:Sequelize.STRING
  },
  gender:{
    type: Sequelize.ENUM(genderOptions),
    defaultValue: genderOptions[0]
  },
  ears:{
    type: Sequelize.ENUM(earOptions),
    defaultValue: earOptions[0]
  },
  furColor: {
    type: Sequelize.ENUM(furColors),
    defaultValue: furColors[0]
  },
  eyeColor: {
    type: Sequelize.ENUM(eyeColors),
    defaultValue: eyeColors[0]
  },
  mother: {
    type:Sequelize.STRING,
    defaultValue: ''
  },
  father: {
    type:Sequelize.STRING,
    defaultValue: ''
  },
  status: {
    type: Sequelize.ENUM(statusOptionsKitten),
    defaultValue: statusOptionsKitten[0],
  },

  isAvailable: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
  description: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  price: {
    type: Sequelize.INTEGER,
    defaultValue: 2500
  },
  regNum: {
    type: Sequelize.STRING,
    defaultValue: '5432'
  },
  breed: {
    type: Sequelize.STRING,
    defaultValue: '',
  },
  mainImageSrcValue: {
    type:Sequelize.STRING,
    defaultValue: defaultCatPictureSrc,
  },
})

module.exports = Kitten
