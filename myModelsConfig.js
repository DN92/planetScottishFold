//  this file is a good place to put low / no security data that would take up space were it put in the middle of complicated files

const myConfig = {
  //  furColors and eyeColors are used in the Cat Models Enum tables for their corresponding keys.
  //  FOR CLIENT Q FORM v2
  furColors: [
    'White',
    'Silver Chinchilla',
    'Gold Chinchilla',
    'Blue Gold Chinchilla',
    'Colorpoint',
    'Blue - Ticked/Tabby',
    'Lilac',
    'Tortoiseshell/Tricolor/Calico',
    'Bicolor/Any Color with White',
    'Chocolate/Black/Cinnamon',
  ],
  // end last comment
  furColorsAdmin: [
    'No Preference',
    'Bicolor (any color with white marks)',
    'Blue Gold Chinchilla (very rare!)',
    'Brown / Chocolate',
    'Colorpoint (Seamese pattern)',
    'Gold Chinchilla (Black Golden shaded/shell)',
    'Grey (aka Blue)',
    'Lilac (very rare!)',
    'Silver Chinchilla (Black silver shaded/shell)',
    'Tabby pattern (striped or spotted)',
  ],
  eyeColors: [
    'No Preference',
    'Green',
    'Blue',
    'Yellow',
    'Copper',
    'Odd',
  ],
  eyeColorsAdmin: [
    'Unknown',
    'Green',
    'Blue',
    'Yellow',
    'Copper',
    'Odd',
    // 'No Preference'
  ],

  //  for public file serving
  defaultCatPictureSrc: '/catPictures/cat404.png',

  budgetRanges: [
    'under $1500',
    '$1500 max',
    '$1600 max',
    '$1700 max',
    '$1800 max',
    '$1900 max',
    '$2000 max',
    '$2200 max',
    '$2400 max',
    '$2600 max',
    '$2800 max',
    '$3000 max',
    '$3500 max',
    '$4000 max',
    'Above $4000',
  ],

  // most important feature (of product - cat)
  mifOptions: [
    'No Preference',
    'Health',
    'Appearance',
    'Show Quality',
    'Personality',
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
  ],
  willBreedOptions: [
    'Have Not Decided',
    'Yes',
    'No',
  ],
  hasAllergiesOptions: [
    'Dont Know',
    'Yes',
    'No',
  ],
  foundUsByOptions: [
    'Google',
    'Facebook Page',
    'Facebook Group',
    'Instagram',
    'Pinterest',
    'TikTok',
    'Youtube',
    'Classifieds',
    'Referral',
    'Other',
  ],
  applyStatusOptions: [
    'Pending',
    'Denied',
    'Approved'
  ],
  userTypes: [
    'guest',
    'registered',
    'ghost',
    'admin',
    'master',
  ],

  emailsFrom: '"Planet Scottish Fold" <planetscottishfold@outlook.com>',
  locationOptions: [
    "",
    "Winston Salem, North Carolina",
  ],
  globalPriceModifier: 1.25,
}

myConfig.isPrivileged = (type) => (myConfig.userTypes.slice(2).includes(type))
myConfig.getAuthGrade = (type) => (myConfig.userTypes.indexOf(type))

module.exports = myConfig
