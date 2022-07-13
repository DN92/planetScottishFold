//  this file is a good place to put low / no security data that takes would take up space were it put in the middle of complicated files

module.exports = {
  //  furColors and eyeColors are used in the Cat Models Enum tables for their corresponding keys.
  furColors: [
    'No Pref',
    'White',
    'Silver',
    'Gold',
    'Colorpoint',
    'Blue',
    'Brown',
    'Black',
  ],
  eyeColors: [
    'No Pref',
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
    'No Pref',
    'Health',
    'Appearance',
    'Show Quality',
    'Personality',
    'Price',
  ],
  statusOptions: [
    'Active',  // default is active, not ''
    'Retired',
    'Reserved',
    'Available',
  ],
  earOptions: [
    'No Pref',
    'Fold',
    'Straight',
  ],
  genderOptions: [
    'No Pref',
    'Boy',
    'Girl',
  ]
}
