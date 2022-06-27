// all models go here to be exported together

const models = {}

models.Father = require("./FatherModel")
models.Mother = require("./MotherModel")
models.Kitten = require("./KittenModel")
models.User = require("./User")

module.exports = models
