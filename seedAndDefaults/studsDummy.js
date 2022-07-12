const { eyeColors } = require('../myModelsConfig')

const makeStud = (
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

const studsArray = [
  makeStud(
    'Artemis',
    'Arty',
    'fold',
    'Gold Chinchilla',
    eyeColors[Math.floor(Math.random() * eyeColors.length)],
    'July 18th, 2018',
    'This is where the description goes.This is where the description goes.This is where the description goes.This is where the'
  ),
  makeStud(
    'Cupid',
    'Cupe',
    'fold',
    'Chocolate Shaded Silver Chinchilla Point',
    eyeColors[Math.floor(Math.random() * eyeColors.length)],
    'November 18th, 2021',
    'This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.'
  ),
]

module.exports = studsArray
