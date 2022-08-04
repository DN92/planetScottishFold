// all models go here to be exported together

const models = {}

models.Stud = require("./StudModel")
models.Mother = require("./MotherModel")
models.Kitten = require("./KittenModel")
models.User = require("./User")
models.InitialUser = require("./InitialUsers")
models.ContactRequest = require('./ContactRequest')

module.exports = models
