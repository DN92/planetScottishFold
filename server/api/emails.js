const router = require('express').Router()
const passAuth = require('../expressMiddleware/checkValidAuthLevel')
const transporter = require('../transporter')

//  /api/emails

router.get('/', async(req, res, next) => {
  try {
    const emailFields = {
      from: '"Planet Scottish Fold" <planetscottishfold@outlook.com>',
      to: 'anatoly.tsinker13@gmail.com',
      subject: 'test using transporter file and env vars',
      text: 'most test text',
      html: '<H1>H1 TEST</H1>'
    }

    transporter.sendMail(emailFields, (error, info) => {
      if (error) {
        console.log(error)
        res.status(400).send("Email failed with error:" , error)
        return
      } else {
        console.log('MESSAGE(s) HAVE BEEN SENT: ', info)
        res.send(info)
        return
      }
    })

  } catch (err) {
    next(err)
  }
})

module.exports = router
