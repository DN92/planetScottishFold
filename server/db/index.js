const db = require('./dbSetup')
const models = require('./models')

//  this file is for non setup, modifications and or imports related to the DB if needed.

// If not required, this can be merged with ./dbSetup

module.exports = {
  db,
  models,
}
