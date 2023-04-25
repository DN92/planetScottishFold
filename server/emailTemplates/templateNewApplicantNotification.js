const { emailsFrom } = require('../../myModelsConfig')

const templateNewApplicantNotification = (applicant) => {

  const userInfoAsText = Object.entries(applicant).reduce((acc, [key, value]) => `${acc}${key}: ${value}\n`,"" )

  const link =  `<a
      href='https://www.planetscottishfold.com/login'
      target='_blank'
    >Go to Planet Scottish Fold</a>`

  return {
    from: emailsFrom,
    to: 'nataliyaKlin@gmail.com',
    subject: 'New Application ready for review',
    text: applicant.eMail + ` has submitted an application. Review it when you're ready beautiful. \n\n\n${userInfoAsText}`,
  }
}

module.exports = templateNewApplicantNotification
