const makeDam = (
  name, ears, furColor, eyeColor, dob, status, description, image
) => ({
  name,
  ears,
  furColor,
  eyeColor,
  status,
  dob,
  description,
  image,
})

const damsArray = [
  {
    name: 'Danissima',
    breed: 'Scottish Straight Highland',
    ears: 'Straight',
    furColor: 'White',
    eyeColor: 'Yellow',
    status: 'Active',
    dob: 'December 15, 2019',
    description: '',
    mainImageSrcValue: '/catPictures/damDanissima.jpg',
  },
  {
    name: 'Felisiya',
    breed: 'Scottish Straight Shorthair',
    ears: 'Straight',
    furColor: 'Silver Chinchilla',
    eyeColor: 'Green',
    status: 'Active',
    dob: 'August 1st, 2019',
    description: '',
    mainImageSrcValue: '/otherPictures/photoComingSoon.png',
  },
  {
    name: 'BumbleBee',
    breed: 'Scottish Fold Shorthair',
    ears: 'Fold',
    furColor: 'Black Marble',
    eyeColor: 'Yellow',
    status: 'Active',
    dob: 'April 4th, 2017',
    description: '',
    mainImageSrcValue: '/catPictures/damBumbleBee.jpg',
  },
  {
    name: 'Iris',
    breed: 'Scottish Straight Shorthair',
    ears: 'Straight',
    furColor: 'Blue Gold Chinchilla',
    eyeColor: 'Green',
    status: 'Active',
    dob: 'August 3rd, 2020',
    description: '',
    mainImageSrcValue: '/catPictures/damIris.jpg',
  },
  {
    name: 'Lucia',
    breed: 'Scottish Straight Shorthair',
    ears: 'Straight',
    furColor: 'Black Van',
    eyeColor: 'Yellow',
    status: 'Active',
    dob: 'August 24th, 2020',
    description: '',
    mainImageSrcValue: '/catPictures/damLucy.jpg',
  },
]


module.exports = damsArray
