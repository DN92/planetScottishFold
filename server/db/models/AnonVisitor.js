const Sequelize = require('sequelize')
const db = require('../dbSetup')
const { eyeColor, furColor } = require('./myModelsConfig')

const AnonVisitor = db.define('anonVisitor', {
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
  fB: {
    type: Sequelize.STRING
  },
  iG: {
    type: Sequelize.STRING
  },
  // cat preferences
  gender: {
    type: Sequelize.ENUM('boy', 'girl')
  },
  ears: {
    type: Sequelize.ENUM('fold', 'straight')
  },
  color: {
    type: Sequelize.ENUM(...eyeColor)
  },
  mif: {
    type: Sequelize.STRING
  },
  budget:{
    type: Sequelize.ENUM('under1500', '1500-2000','2000-2500','over2500')
  },
})

module.exports = AnonVisitor;
