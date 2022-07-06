const { models } = require("../server/db")
const { Stud } = models

const makeMother = (
  name, serialNumber, ears, furColor, eyeColor, age, dob, image
) => ({
  name,
  serialNumber,
  ears,
  furColor,
  eyeColor,
  age,
  dob,
  image
})

const studsArray = [
  makeMother(),
  makeMother(),
  makeMother(),

]

module.exports = studsArray
