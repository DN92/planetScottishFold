const Sequelize = require('sequelize')
const db = require('../dbSetup')
const { eyeColors, furColors, budgetRanges, mifOptions, genderOptions, earOptions } = require('../../../myModelsConfig')

const AnonVisitor = db.define('anonVisitor', {
  requestedUsername: {
    type: Sequelize.STRING
  },
  firstName: {
    type: Sequelize.STRING,
    defaultValue: ''
  },
  lastName: {
    type: Sequelize.STRING,
    defaultValue: ''
  },
  eMail: {
    type:Sequelize.STRING,
    isEmail: true,
  },
  aboutYou: {
    type: Sequelize.STRING,
    defaultValue: ''
  },
  firstCat: {
    type: Sequelize.BOOLEAN
  },
  otherPets: {
    type: Sequelize.STRING,
    defaultValue: ''
  },
  city: {
    type: Sequelize.STRING,
    defaultValue: ''
  },
  state: {
    type: Sequelize.STRING,
    defaultValue: ''
  },
  budget:{
    type: Sequelize.ENUM(...budgetRanges)
  },
  fB: {
    type: Sequelize.STRING
  },
  iG: {
    type: Sequelize.STRING
  },
  // cat preferences
  gender: {
    type: Sequelize.ENUM(genderOptions),
    defaultValue: genderOptions[0],
  },
  ears: {
    type: Sequelize.ENUM(earOptions),
    defaultValue: earOptions[0],
  },
  eyeColor: {
    type: Sequelize.ENUM(eyeColors),
    defaultValue: eyeColors[0],
  },
  furColor: {
    type: Sequelize.ENUM(furColors),
    defaultValue: furColors[0],
  },
  mif: {
    type: Sequelize.ENUM(mifOptions),
    defaultValue: mifOptions[0],
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
