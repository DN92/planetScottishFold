//  this file is a good place to put low / no security data that would take up space were it put in the middle of complicated files

module.exports = {
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
    'pending',
    'denied',
    'approved'
  ],
}
