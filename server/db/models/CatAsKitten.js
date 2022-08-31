const Sequelize = require('sequelize')
const db = require("../dbSetup")
const {eyeColorsAdmin, defaultCatPictureSrc, earOptions, genderOptions, statusOptionsKitten} = require("../../../myModelsConfig")

const CatAsKitten = db.define("catAsKitten", {
  name: {
    type:Sequelize.STRING
  },
  gender:{
    type: Sequelize.ENUM(genderOptions),
    defaultValue: genderOptions[0],
  },
  ears:{
    type: Sequelize.ENUM(earOptions),
    defaultValue: earOptions[0]
  },
  furColor: {
    type: Sequelize.STRING,
    defaultValue: '',
  },
  eyeColor: {
    type: Sequelize.ENUM(eyeColorsAdmin),
    defaultValue: eyeColorsAdmin[0]
  },
  breed: {
    type: Sequelize.STRING,
    defaultValue: '',
  },
  dob: {
    type: Sequelize.STRING,
    defaultValue: '',
  },
  status: {
    type: Sequelize.ENUM(statusOptionsKitten),
    defaultValue: statusOptionsKitten[0],
  },
  description: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  price: {
    type: Sequelize.INTEGER,
    defaultValue: 2000,
  },
  location: {
    type:Sequelize.STRING,
    defaultValue: ''
  },
  regNum: {
    type: Sequelize.STRING,
    defaultValue: ''
  },
  mainImageSrcValue: {
    type:Sequelize.STRING,
    defaultValue: defaultCatPictureSrc,
  },
  isAdultCat: {
    type:Sequelize.BOOLEAN,
    defaultValue: true,
  },
  isHidden: {
    type: Sequelize.STRING,
    defaultValue:false,
  },
  isAdminHidden: {
    type: Sequelize.STRING,
    defaultValue: false,
  }
})

module.exports = CatAsKitten
