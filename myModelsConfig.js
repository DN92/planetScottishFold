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
    'Blue - Ticket/Tabby',
    'Lilac',
    'Tortoiseshell/Tricolor/Calico',
    'Bicolor/Any Color with White',
    'Chocolate/Black/Cinnamon',
  ],
  // end last comment
  furColorsAdmin: [
    'No Preference',
    'White',
    'Silver',
    'Gold',
    'Colorpoint',
    'Blue',
    'Brown',
    'Black',
    'Black Golden Shaded',
    'Black Golden Shell',
    'Black Golden Ticked',
    'Black Silver Ticked',
    'Silver Chinchilla Point',
    'Silver Shaded Chinchilla',
    'Black Marble Tabby',
    'Blue Bicolor Tabby',
    'Brown Ticked Bicolor',
    'Blue Ticked Bicolor',
    'Black Tabby',
    'Blue Colorpoint',
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
    '$4000+',
    '$3500-$4000',
    '$3000-$3500',
    '$2500-$3000',
    '$2000-$2500',
    '$1500-$2000',
    '$1000-$1500',
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
    'Facebook',
    'Instagram',
    'Pinterest',
    'TikTok',
    'Youtube',
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
}

myConfig.isPrivileged = (type) => (myConfig.userTypes.slice(2).includes(type))
myConfig.getAuthGrade = (type) => (myConfig.userTypes.indexOf(type))

module.exports = myConfig
