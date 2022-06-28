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
    type: Sequelize.ENUM('boy', 'girl')
  },
  ears:{
    type: Sequelize.ENUM('fold', 'straight')
  },
  furColor: {
    type: Sequelize.ENUM(...furColors)
  },
  eyeColor: {
    type: Sequelize.ENUM(...eyeColors)
  },
})

module.exports = Kitten
