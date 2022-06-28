// all models go here to be exported together

const models = {}

models.Stud = require("./StudModel")
models.Mother = require("./MotherModel")
models.Kitten = require("./KittenModel")
models.User = require("./User")
models.AnonVisitor = require("./AnonVisitor")

module.exports = models
