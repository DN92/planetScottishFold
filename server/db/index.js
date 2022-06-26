const db = require('./dbSetup')

// model imports go here
const Kitten = require('./KittenModel')
const Mother = require('./MotherModel')
const Father = require('./FatherModel')

// associations here


module.exports = {
  db,
  models: {
    Kitten: Kitten,
    Mother,
    Father,

  }
}
