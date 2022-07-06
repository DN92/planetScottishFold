const { models } = require("../server/db")

const makeStud = (
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
  makeStud(),
  makeStud(),
  makeStud(),
]

module.exports = studsArray
