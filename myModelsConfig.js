//  this file is a good place to put low / no security data that takes would take up space were it put in the middle of complicated files

module.exports = {
  //  furColors and eyeColors are used in the Cat Models Enum tables for their corresponding keys.
  furColors: [
    'No Preference',
    'White',
    'Silver',
    'Gold',
    'Colorpoint',
    'Blue',
    'Brown',
    'Black',
  ],
  eyeColors: [
    'No Preference',
    'Green',
    'Blue',
    'Yellow',
    'Copper',
    'Odd',
  ],
  //  for public file serving
  defaultCatPictureSrc: '/catPictures/cat404.png',

  budgetRanges: [
    '$4000+',
    '$3500-$4000',
    '$3000-$3500',
    '$2500-$3000',
    '$2000-$2500',
    '$1500-$2000',
  ],

  // most important feature (of product - cat)
  mifOptions: [
    'No Preference',
    'Health',
    'Appearance',
    'Show Quality',
    'Personality',
    'Price',
  ],
  statusOptionsKitten: [
    'Available',
    'Reserved',
    'Sold',
  ],
  statusOptionsParents: [
    'Active',  // default is active, not ''
    'Retired',
    'Reserved',
    'Available',
  ],
  earOptions: [
    'No Preference',
    'Fold',
    'Straight',
  ],
  genderOptions: [
    'No Preference',
    'Boy',
    'Girl',
  ]
}
