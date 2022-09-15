// all models go here to be exported together

const models = {
  Stud : require("./StudModel"),
  Mother : require("./MotherModel"),
  Kitten : require("./KittenModel"),
  User : require("./User"),
  ContactRequest : require('./ContactRequest'),
  CatAsKitten : require('./CatAsKitten'),
  Application : require('./ApplicationsLog')

}


module.exports = models
