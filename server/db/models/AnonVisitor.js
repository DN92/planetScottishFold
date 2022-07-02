const Sequelize = require('sequelize')
const db = require('../dbSetup')
const { eyeColors, furColors } = require('../../../myModelsConfig')

const AnonVisitor = db.define('anonVisitor', {
  requestedUsername: {
    type: Sequelize.STRING
  },
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  eMail: {
    type:Sequelize.STRING,
    isEmail: true,
  },
  aboutYou: {
    type: Sequelize.STRING,
  },
  firstCat: {
    type: Sequelize.BOOLEAN
  },
  otherPets: {
    type: Sequelize.STRING
  },
  city: {
    type: Sequelize.STRING
  },
  state: {
    type: Sequelize.STRING
  },
  budget:{
    type: Sequelize.ENUM('lessThan1500', '1500to2000','2000to2500','over2500', 'any', '')
  },
  fB: {
    type: Sequelize.STRING
  },
  iG: {
    type: Sequelize.STRING
  },
  // cat preferences
  gender: {
    type: Sequelize.ENUM('boy', 'girl', '')
  },
  ears: {
    type: Sequelize.ENUM('fold', 'straight', '')
  },
  eyeColor: {
    type: Sequelize.ENUM(...eyeColors, '')
  },
  furColor: {
    type: Sequelize.ENUM(...furColors, '')
  },
  mif: {
    type: Sequelize.STRING
  },
  IPaddress: {
    type: Sequelize.STRING
  },
  hasBeenReviewedByAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  }
})

module.exports = AnonVisitor;
