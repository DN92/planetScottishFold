require('dotenv').config()

const nodemailer = require('nodemailer')
if(process.env.NODE_ENV !== 'production') {
  var user = process.env.emailsUser
  var pass = process.env.emailsPass
}

const transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  secure: false,
  port: 587,
  tls: {
    rejectUnauthorized: false,
    ciphers:'SSLv3'
 },
  auth: {
    user: process.env.emailsUser || user,
    pass: process.env.emailsPass || pass,
  },
})

module.exports = transporter
