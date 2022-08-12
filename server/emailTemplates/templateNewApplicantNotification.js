const { emailsFrom } = require('../../myModelsConfig')

const templateNewApplicantNotification = (applicant) => {

  const link =  `<a
      href='https://www.planetscottishfold.com/login'
      target='_blank'
    >Go to Planet Scottish Fold</a>`

  return {
    from: emailsFrom,
    to: 'nataliyaKlin@gmail.com',
    subject: 'New Application ready for review',
    text: applicant.eMail + ` has submitted an application. Review it when you're ready beautiful.`,
    html: link
  }
}

module.exports = templateNewApplicantNotification
