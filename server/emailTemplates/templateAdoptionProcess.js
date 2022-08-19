const { emailsFrom } = require('../../myModelsConfig')


const templateAdoptionProcess = (userEmail) => {

  return {
    from: emailsFrom,
    to: userEmail,
    subject: 'Your application to Planet Scottish Fold has been approved!',
    text: ''

  }
}

module.exports = templateAdoptionProcess
