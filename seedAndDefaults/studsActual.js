
const makeStud = (
  name, ears, furColor, eyeColor, dob, status, description, image
) => ({
  name,
  ears,
  furColor,
  eyeColor,
  status,
  dob,
  description,
  mainImageSrcValue,
})

const studsArray = [
  {
    name: 'Artemis',
    breed: 'Scottish Fold Shorthair',
    ears: 'Fold',
    furColor: 'Gold Chinchilla',
    eyeColor: 'Green',
    status: 'Active',
    dob: 'July 18th, 2018',
    description: '',
    mainImageSrcValue: '/catPictures/studArtemis.jpg',
  },
  {
    name: 'Cupid',
    breed: 'Scottish Fold Shorthair',
    ears: 'Fold',
    furColor: 'Chocolate Shaded Chinchilla Point',
    eyeColor: 'Blue',
    status: 'Active',
    dob: 'November 18th, 2021',
    description: '',
    mainImageSrcValue: '/catPictures/studCupid.jpg',
  },
  {
    name: 'Brooklyn',
    breed: 'Scottish Fold Shorthair',
    ears: 'Fold',
    furColor: 'Blue',
    eyeColor: 'Copper',
    status: 'Active',
    dob: 'August, 2018',
    description: '',
    mainImageSrcValue: '/catPictures/studBrooklyn.jpg',
    isHidden: true,
  },
  {
    name: 'Pompano',
    breed: 'Scottish Straight Shorthair',
    ears: 'Straight',
    furColor: 'Black Marble Tabby',
    eyeColor: 'Copper',
    status: 'Active',
    dob: 'December, 2017',
    description: '',
    mainImageSrcValue: '/catPictures/studPompano.jpg',
    isHidden: true,
  },

]

module.exports = studsArray
