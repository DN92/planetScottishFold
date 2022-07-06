const { models } = require("../server/db")
const { Mother } = models

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

const mothersArray = [
  makeMother(),
  makeMother(),
  makeMother(),

]

module.exports = mothersArray
