const { models } = require("../server/db")

const makeMother = (
  name, serialNumber, ears, furColor, eyeColor, dob, image
) => ({
  name,
  serialNumber,
  ears,
  furColor,
  eyeColor,
  dob,
  image
})

const mothersArray = [
  makeMother(
    'Danissima',
    'Dami',
    'straight',
    'White',
    'Yellow',
    'December, 2019'
  ),
  makeMother(
    'Felisiya',
    'Feli',
    'straight',
    'Silver Chinchilla',
    'Green',
    'August 1st, 2019'
  ),
  makeMother(
    'BumbleBee',
    'BumB',
    'fold',
    'Black Marble',
    'Yellow',
    'April 4th, 2017',
  ),
  makeMother(
    'Iris',
    'Iris',
    'straight',
    'Blue Gold Chinchilla',
    'Green',
    'August 4th, 2020',
  ),
  makeMother(
    'Lucia',
    'Lucy',
    'straight',
    'Black Van',
    'Yellow',
    'August 23rd, 2020',
  ),
]

module.exports = mothersArray
