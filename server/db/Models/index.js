// all models go here to be exported together

const models = {}

models.Father = require("./FatherModel")
models.Mother = require("./MotherModel")
models.Kitten = require("./KittenModel")

module.exports = models
