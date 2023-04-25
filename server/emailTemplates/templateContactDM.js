const { emailsFrom } = require('../../myModelsConfig')

const templateContactDM = (incomingMessage) => {

    const { name, phone, eMail, message } = incomingMessage ?? '/VALUE NOT PROVIDED/'

    return {
        from: emailsFrom,
        to: 'nataliyaKlin@gmail.com',
        subject: 'New Application ready for review',
        text: `
            you have a new direct message from ${name} at ${eMail}\n
            phone number: ${phone}\n
            \n
            ${message}
        `,
    }
}

module.exports = templateContactDM