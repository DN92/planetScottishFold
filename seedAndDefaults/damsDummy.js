const { eyeColors, } = require('../myModelsConfig')

const makeMother = (
  name, ears, furColor, eyeColor, dob, description, image, isHidden
) => ({
  name,
  ears,
  furColor,
  eyeColor,
  dob,
  description,
  image,
  isHidden,
})

const mothersArray = [
  makeMother(
    'Danissima',
    'Straight',
    'White',
    eyeColors[Math.floor(Math.random() * eyeColors.length)],
    'December, 2019',
    'This is where the description goes.This is where the description goes.This is where the description goes.This is where the description g',
  ),
  makeMother(
    'Felisiya',
    'Straight',
    'Silver Chinchilla',
    eyeColors[Math.floor(Math.random() * eyeColors.length)],
    'August 1st, 2019',
    'is whes.This is where the description goes.',
  ),
  makeMother(
    'BumbleBee',
    'Fold',
    'Black Marble',
    eyeColors[Math.floor(Math.random() * eyeColors.length)],
    'April 4th, 2017',
    'This is where the description goes.This is where the description goes.This is where the description goes.description goes.This is where the description goes.',
    true
  ),
  makeMother(
    'Iris',
    'Straight',
    'Blue Gold Chinchilla',
    eyeColors[Math.floor(Math.random() * eyeColors.length)],
    'August 4th, 2020',
    'This is where the description goes.This is where the description goes.This is where the description goes.Th'
  ),
  makeMother(
    'Lucia',
    'Straight',
    'Black Van',
    eyeColors[Math.floor(Math.random() * eyeColors.length)],
    'August 23rd, 2020',
    'This is whes.This is where the description goes.',
  ),
]

module.exports = mothersArray
