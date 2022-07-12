const Sequelize = require('sequelize')
const db = require("../dbSetup")
const {furColors, eyeColors, defaultCatPictureSrc} = require("../../../myModelsConfig")

const Kitten = db.define("kitten", {
  name: {
    type:Sequelize.STRING
  },
  serialNumber:{
    type:Sequelize.STRING
  },
  mainImageSrcValue: {
    type:Sequelize.STRING,
    defaultValue: defaultCatPictureSrc,
    validate: {
      notEmpty: true
    }
  },
  gender:{
    type: Sequelize.ENUM('boy', 'girl', '')
  },
  ears:{
    type: Sequelize.ENUM('fold', 'straight', '')
  },
  furColor: {
    type: Sequelize.ENUM(...furColors)
  },
  eyeColor: {
    type: Sequelize.ENUM(...eyeColors)
  },
  mother: {
    type:Sequelize.STRING,
    defaultValue: ''
  },
  father: {
    type:Sequelize.STRING,
    defaultValue: ''

  },
  isAvailable: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
  description: {
    type: Sequelize.TEXT,
    defaultValue: ''
  }
})

module.exports = Kitten
