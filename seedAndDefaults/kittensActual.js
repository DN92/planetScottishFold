const makeKitten = (
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

const kittensArray = [
  //  Felisiya
  {
    name: 'Finley',
    breed:'Scottish Straight Shorthair',
    gender: 'Boy',
    ears: 'Straight',
    furColor: 'Silver Chinchilla Point',
    eyeColor: 'Blue',
    dob: 'March 16th, 2022',
    mother: 'Felisiya',
    father: 'Artemis',
    price: 1900,
    location: 'Bergenfield, New Jersey',
    description: '',
    mainImageSrcValue: './catPictures/kittenFelisiyaFinley.jpg',
  },
  // Danissima
  {
    name: 'Dew',
    breed:'Scottish Fold Shorthair',
    gender: 'Girl',
    ears: 'Fold',
    furColor: 'Silver Shaded Chinchilla',
    eyeColor: 'Green',
    dob: 'April 27th, 2022',
    mother: 'Danissima',
    father: 'Artemis',
    price: 2300,
    location: 'Bergenfield, New Jersey',
    description: '',
    mainImageSrcValue: './catPictures/kittenDanissimaDew.jpg',
  },
  {
    name: 'Daiquiri',
    breed:'Scottish Straight Shorthair',
    gender: 'Girl',
    ears: 'Straight',
    furColor: 'Silver Shaded Chinchilla',
    eyeColor: 'Green',
    dob: 'April 27th, 2022',
    mother: 'Danissima',
    father: 'Artemis',
    price: 1700,
    location: 'Bergenfield, New Jersey',
    description: '',
    mainImageSrcValue: './catPictures/kittenDanissimaDaiquiri.jpg',
  },
  {
    name: 'Dumpling',
    breed:'Scottish Fold Shorthair',
    gender: 'Boy',
    ears: 'Fold',
    furColor: 'Silver Shaded Chinchilla',
    eyeColor: 'Green',
    dob: 'April 27th, 2022',
    mother: 'Danissima',
    father: 'Artemis',
    price: 2300,
    location: 'Bergenfield, New Jersey',
    description: '',
    mainImageSrcValue: './catPictures/kittenDanissimaDumpling.jpg',
    // status: 'Sold',
  },
  {
    name: 'Dolce Gabbana',
    breed: 'Scottish Straight Shorthair',
    gender: 'Boy',
    ears: 'Straight',
    furColor: 'White',
    eyeColor: 'Odd',
    dob: 'April 27th, 2022',
    mother: 'Danissima',
    father: 'Artemis',
    price: 2500,
    location: 'Bergenfield, New Jersey',
    description: '',
    mainImageSrcValue: './catPictures/kittenDanissimaDG.jpg',
  },
    // BumbleBee
  {
    name: 'Fudge',
    breed: 'Scottish Straight Shorthair',
    gender: 'Boy',
    ears: 'Straight',
    furColor: 'Black Marble Tabby',
    eyeColor: 'Yellow',
    dob: 'March 30th, 2022',
    mother: 'BumbleBee',
    father: 'Pompano',
    price: 1500,
    location: 'Fort Lauderdale, Florida',
    description: '',
    mainImageSrcValue: '',
  },
  // Lucia
  {
    name: 'Olaf',
    breed:'Scottish Straight Shorthair',
    gender: 'Boy',
    ears: 'Straight',
    furColor: 'Blue Bicolor Tabby',
    eyeColor: 'Unknown',
    dob: 'June 8th, 2022',
    mother: 'Lucia',
    father: 'Artemis',
    price: 1600,
    location: 'High Point, North Carolina',
    description: '',
    mainImageSrcValue: './catPictures/kittenLuciaOlaf.jpg',
  },
  {
    name: 'Koda',
    breed:'Scottish Straight Shorthair',
    gender: 'Boy',
    ears: 'Straight',
    furColor: 'Brown Ticked Bicolor',
    eyeColor: 'Unknown',
    dob: 'June 8th, 2022',
    mother: 'Lucia',
    father: 'Artemis',
    price: 1600,
    location: 'High Point, North Carolina',
    description: '',
    mainImageSrcValue: './catPictures/kittenLuciaKoda.jpg',
  },
  {
    name: 'Baloo',
    breed:'Scottish Straight Shorthair',
    gender: 'Boy',
    ears: 'Straight',
    furColor: 'Brown Ticked Bicolor',
    eyeColor: 'Unknown',
    dob: 'June 8th, 2022',
    mother: 'Lucia',
    father: 'Artemis',
    price: 1600,
    location: 'High Point, North Carolina',
    description: '',
    mainImageSrcValue: './catPictures/kittenLuciaBaloo.jpg',
  },
  {
    name: 'Tiana',
    breed:'Scottish Straight Shorthair',
    gender: 'Girl',
    ears: 'Straight',
    furColor: 'Blue Ticked Bicolor',
    eyeColor: 'Unknown',
    dob: 'June 8th, 2022',
    mother: 'Lucia',
    father: 'Artemis',
    price: 1600,
    location: 'High Point, North Carolina',
    description: '',
    mainImageSrcValue: './catPictures/kittenLuciaTiana.jpg',
  },
  {
    name: 'Jasmine',
    breed:'Scottish Straight Shorthair',
    gender: 'Girl',
    ears: 'Straight',
    furColor: 'Brown Ticked Bicolor',
    eyeColor: 'Unknown',
    dob: 'June 8th, 2022',
    mother: 'Lucia',
    father: 'Artemis',
    price: 1600,
    location: 'High Point, North Carolina',
    description: '',
    mainImageSrcValue: './catPictures/kittenLuciaJasmine.jpg',
  },
  {
    name: 'Merida',
    breed:'Scottish Straight Shorthair',
    gender: 'Girl',
    ears: 'Straight',
    furColor: 'Black Tabby',
    eyeColor: 'Unknown',
    dob: 'June 8th, 2022',
    mother: 'Lucia',
    father: 'Artemis',
    price: 1600,
    location: 'High Point, North Carolina',
    description: '',
    mainImageSrcValue: './catPictures/kittenLuciaMerida.jpg',
  },
    // Iris
  {
    name: 'Bentley',
    breed:'Scottish Straight Shorthair',
    gender: 'Boy',
    ears: 'Straight',
    furColor: 'Blue Colorpoint',
    eyeColor: 'Blue',
    dob: 'June 19th, 2022',
    mother: 'Iris',
    father: 'Brooklyn',
    price: 2500,
    location: 'Hight Point, North Carolina',
    description: '',
    mainImageSrcValue: './catPictures/kittenIrisBentley.jpg',
  },
]


module.exports = kittensArray
