const { models } = require("../server/db")
const { Kitten } = models

const makeKitten = (
    name,
    serialNumber,
    gender,
    ears,
    furColor,
    eyeColor,
    mainImageSrcValue,
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
  "brown",
  "brown",
  "/catPictures/ktnLcyC01.jpg"
  ),
  makeKitten(
  "ktnLcyC02",
  "ktnLcyC02",
  "boy",
  "fold",
  "brown",
  "brown",
  "/catPictures/ktnLcyC02.jpg"
  ),
  makeKitten(
  "ktnLcyC03",
  "ktnLcyC03",
  "boy",
  "fold",
  "brown",
  "brown",
  "/catPictures/ktnLcyC03.jpg"
  ),
  makeKitten(
  "ktnLcyC04",
  "ktnLcyC04",
  "boy",
  "fold",
  "brown",
  "brown",
  "/catPictures/ktnLcyC04.jpg"
  ),
  makeKitten(
  "ktnLcyC05",
  "ktnLcyC05",
  "boy",
  "fold",
  "brown",
  "brown",
  "/catPictures/ktnLcyC05.jpg"
  ),
  makeKitten(
  "ktnLcyC06",
  "ktnLcyC06",
  "boy",
  "fold",
  "brown",
  "brown",
  "/catPictures/ktnLcyC06.jpg"
  ),
  makeKitten(
  "ktnLcyC07",
  "ktnLcyC07",
  "boy",
  "fold",
  "brown",
  "brown",
  "/catPictures/ktnLcyC07.jpg"
  ),
]

module.exports = kittensArray
