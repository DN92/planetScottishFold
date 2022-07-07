const { models } = require("../server/db")
const { Kitten } = models

const makeKitten = (
    name, serialNumber, gender, ears, furColor, eyeColor, mainImageSrcValue,
  ) => ({
    name,
    serialNumber,
    gender,
    ears,
    furColor,
    eyeColor,
    mainImageSrcValue,
  })

const kittensArray = [
  makeKitten(
  "ktnLcyC01",
  "ktnLcyC01",
  "boy",
  "fold",
  "Silver",
  "Green",
  "/catPictures/ktnLcyC01.jpg"
  ),
  makeKitten(
  "ktnLcyC02",
  "ktnLcyC02",
  "girl",
  "straight",
  "Colorpoint",
  "Yellow",
  "/catPictures/ktnLcyC02.jpg"
  ),
  makeKitten(
  "ktnLcyC03",
  "ktnLcyC03",
  "boy",
  "fold",
  "Blue",
  "Odd",
  "/catPictures/ktnLcyC03.jpg"
  ),
  makeKitten(
  "ktnLcyC04",
  "ktnLcyC04",
  "girl",
  "straight",
  "White",
  "Green",
  "/catPictures/ktnLcyC04.jpg"
  ),
  makeKitten(
  "ktnLcyC05",
  "ktnLcyC05",
  "boy",
  "fold",
  "Gold",
  "Odd",
  "/catPictures/ktnLcyC05.jpg"
  ),
  makeKitten(
  "ktnLcyC06",
  "ktnLcyC06",
  "boy",
  "straight",
  "Brown",
  "Yellow",
  "/catPictures/ktnLcyC06.jpg"
  ),
  makeKitten(
  "ktnLcyC07",
  "ktnLcyC07",
  "girl",
  "fold",
  "Black",
  "Blue",
  "/catPictures/ktnLcyC07.jpg"
  ),
]

module.exports = kittensArray
