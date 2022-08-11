// all models go here to be exported together

const models = {
  Stud : require("./StudModel"),
  Mother : require("./MotherModel"),
  Kitten : require("./KittenModel"),
  User : require("./User"),
  InitialUser : require("./InitialUsers"),
  ContactRequest : require('./ContactRequest'),

}


module.exports = models
