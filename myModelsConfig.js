//  this file is a good place to put low / no security data that takes would take up space were it put in the middle of complicated files

module.exports = {
  //  furColors and eyeColors are used in the Cat Models Enum tables for their corresponding keys.
  furColors: [
    'White',
    'Silver',
    'Gold',
    'Colorpoint',
    'Blue',
    'Brown',
    'Black',
  ],
  eyeColors: [
    'Green',
    'Blue',
    'Yellow',
    'Copper',
    'Odd',
  ],
  //  for public file serving
  defaultCatPictureSrc: '/catPictures/cat404.png',

  budgetRanges: [
    '$1500-$2000',
    '$2000-$2500',
    '$2500-$3000',
    '$3000-$3500',
    '$3500-$4000',
    '$4000+',
    '',
  ]
}
