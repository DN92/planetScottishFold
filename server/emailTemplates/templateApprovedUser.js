const { emailsFrom } = require('../../myModelsConfig')

const templateApprovedUser = (userEmail, password) => {

  return {
    from: emailsFrom,
    to: userEmail,
    subject: 'Your application to Planet Scottish Fold has been approved!',
    text: 'Thank you for your interest in Planet Scottish Fold. You may now log in with credentials:\nEmail: ' + userEmail + '\nPassword: ' + password,

  }
}

module.exports = templateApprovedUser
