const Sequelize = require('sequelize')
const db = require('../dbSetup')

const ContactRequest = db.define('contactRequest', {
  name: {
    type: Sequelize.STRING,
    defaultValue: '',
  },
  phone: {
    type: Sequelize.STRING,
    defaultValue: '',
  },
  eMail: {
    type: Sequelize.STRING,
    defaultValue: '',
  },
  message: {
    type: Sequelize.STRING,
    defaultValue: '',
  },
  wasRead: {
    type: Sequelize.BOOLEAN,
    defaultValue:false
  },
  hidden: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = ContactRequest
