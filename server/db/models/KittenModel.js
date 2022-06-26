const Sequelize = require('sequelize')
const db = require("../dbSetup")

const Kitten = db.define("kitten", {
  gender:{
    type: Sequelize.ENUM('boy', 'girl')
  },
  ears:{
    type: Sequelize.ENUM('fold', 'straight')
  },
  furColor: {
    type: Sequelize.ENUM('blue', 'brown', 'tabby', 'black', 'white', 'gold', 'silver', 'colorpoint', 'chinchilla' )
  },
  eyeColor: {
    type: Sequelize.ENUM('green','blue', 'yellow','copper', 'odd')
  },
})

module.exports = Kitten
