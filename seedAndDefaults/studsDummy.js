const { models } = require("../server/db")

const makeStud = (
  name, serialNumber, ears, furColor, eyeColor, age, dob, image
) => ({
  name,
  serialNumber,
  ears,
  furColor,
  eyeColor,
  dob,
  image
})

const studsArray = [
  makeStud(
    'Artemis',
    'Arty',
    'fold',
    'Gold Chinchilla',
    'Green',
    'July 18th, 2018',
  ),
  makeStud(
    'Cupid',
    'Cupe',
    'fold',
    'Chocolate Shaded Silver Chinchilla Point',
    'Blue',
    'November 18th, 2021',
  ),
]

module.exports = studsArray
