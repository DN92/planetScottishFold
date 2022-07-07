const { models } = require('../server/db')
const { User } = models

const makeUser = (
  type,
  username,
  password,
  eMail,
  city,
  state,
) => ({
  type,
  username,
  password,
  eMail,
  city,
  state,
})

const userArray = [
  makeUser(
    'registered',
    'Alex',
    '123',
    '2@gmail.com',
    'brooklyn',
    'new york'
  ),
  makeUser(
    'admin',
    'Klin13',
    'nb0phRDH',
    'Nataliya.Klin@gmail.com',
    '',
    '',
  ),
  makeUser(
    'master',
    'God',
    '123',
    '4gmail.com',
    'odessa',
    'ukraine',
  )
]

module.exports = userArray
