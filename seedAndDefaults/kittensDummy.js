const { models } = require("../server/db")
const { Kitten } = models

const makeKitten = (
    name, gender, ears, furColor, eyeColor, description, mainImageSrcValue, price,
  ) => ({
    name,
    gender,
    ears,
    furColor,
    eyeColor,
    description,
    mainImageSrcValue,
    price,
  })

const kittensArray = [
  makeKitten(
  "ktnLcyC01",
  "Boy",
  "Fold",
  "Silver",
  "Green",
  'This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.',
  "/catPictures/ktnLcyC01.jpg",
  2800,
  ),
  makeKitten(
  "ktnLcyC02",
  "Girl",
  "Straight",
  "Colorpoint",
  "Yellow",
  'This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.',
  "/catPictures/ktnLcyC02.jpg",
  2800,
  ),
  makeKitten(
  "ktnLcyC03",
  "Boy",
  "Fold",
  "Blue",
  "Odd",
  "/catPictures/ktnLcyC03.jpg",
  'description',
  2800,
  ),
  makeKitten(
  "ktnLcyC04",
  "Girl",
  "Straight",
  "White",
  "Green",
  'This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.',
  "/catPictures/ktnLcyC04.jpg",
  2800,
  ),
  makeKitten(
  "ktnLcyC05",
  "Boy",
  "Fold",
  "Gold",
  "Odd",
  'This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.',
  "/catPictures/ktnLcyC05.jpg",
  2800,
  ),
  makeKitten(
  "ktnLcyC06",
  "Boy",
  "Straight",
  "Brown",
  "Yellow",
  'This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.',
  "/catPictures/ktnLcyC06.jpg",
  2800,
  ),
  makeKitten(
  "ktnLcyC07",
  "Girl",
  "Fold",
  "Black",
  "Blue",
  'This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.This is where the description goes.',
  "/catPictures/ktnLcyC07.jpg",
  2800,
  ),
]

module.exports = kittensArray
