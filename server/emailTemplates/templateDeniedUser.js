const { emailsFrom } = require('../../myModelsConfig')

const templateDeniedUser = (userEmail) => {

  return {
    from: emailsFrom,
    to: userEmail,
    subject: 'Your application to Planet Scottish Fold has been denied',
    text: 'Thank you for your interest in Planet Scottish Fold.\nUnfortunately, we cannot approve you at this time.'
  }
}

module.exports = templateDeniedUser
