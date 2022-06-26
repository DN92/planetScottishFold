const db = require('./dbSetup')


//  this file is for non setup, modifications and or imports related to the DB if needed.

// If not required, this can be merged with ./dbSetup

db.models = require("./Models")

module.exports = db
