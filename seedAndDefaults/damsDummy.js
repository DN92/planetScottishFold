const { models } = require("../server/db")
const { eyeColors } = require('../myModelsConfig')

const makeMother = (
  name, serialNumber, ears, furColor, eyeColor, dob, description, image
) => ({
  name,
  serialNumber,
  ears,
  furColor,
  eyeColor,
  dob,
  description,
  image,
})

const mothersArray = [
  makeMother(
    'Danissima',
    'Dami',
    'straight',
    'White',
    eyeColors[Math.floor(Math.random() * eyeColors.length)],
    // 'This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.',
    'December, 2019'
  ),
  makeMother(
    'Felisiya',
    'Feli',
    'straight',
    'Silver Chinchilla',
    eyeColors[Math.floor(Math.random() * eyeColors.length)],
    // 'This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.',
    'August 1st, 2019'
  ),
  makeMother(
    'BumbleBee',
    'BumB',
    'fold',
    'Black Marble',
    eyeColors[Math.floor(Math.random() * eyeColors.length)],
    // 'This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.',
    'April 4th, 2017',
  ),
  makeMother(
    'Iris',
    'Iris',
    'straight',
    'Blue Gold Chinchilla',
    eyeColors[Math.floor(Math.random() * eyeColors.length)],
    // 'This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.',
    'August 4th, 2020',
  ),
  makeMother(
    'Lucia',
    'Lucy',
    'straight',
    'Black Van',
    eyeColors[Math.floor(Math.random() * eyeColors.length)],
    // 'This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.',
    'August 23rd, 2020',
  ),
]

module.exports = mothersArray
