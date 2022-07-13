const { models } = require('../server/db')
const { anonVisitor } = models
const {budgetRanges, mifOptions, eyeColors, furColors, earOptions, genderOptions} = require('../myModelsConfig')

const makeAnonVisitor = (
  requestedUsername,
  firstName,
  lastName,
  eMail,
  aboutYou,
  firstCat,
  otherPets,
  city,
  state,
  fB,
  iG,
  gender,
  ears,
  budget,
  furColor,
  eyeColor,
  mif,
) => ({
  requestedUsername,
  firstName,
  lastName,
  eMail,
  aboutYou,
  firstCat,
  otherPets,
  city,
  state,
  fB,
  iG,
  gender,
  ears,
  budget,
  eyeColor,
  furColor,
  mif,
})

const anonVisitorsArray = [
  makeAnonVisitor(
    'callMeBob',
    'anon1First',
    'anon1Last',
    '432@gmail.com',
    'i am an anon visitor',
    true,
    'dogs',
    'brooklyn',
    'new york',
    'myFB',
    'myIG',
    genderOptions[Math.floor(Math.random() * genderOptions.length)],
    earOptions[Math.floor(Math.random() * earOptions.length)],
    budgetRanges[Math.floor(Math.random() * budgetRanges.length)],
    furColors[Math.floor(Math.random() * furColors.length)],
    eyeColors[Math.floor(Math.random() * eyeColors.length)],
    mifOptions[Math.floor(Math.random() * mifOptions.length)],
  ),
  makeAnonVisitor(
    'callMeAlice',
    'anon2First',
    'anon2Last',
    '4221@gmail.com',
    'i am an another anon visitor',
    false,
    'no',
    'high point',
    'north Carolina',
    'myFB',
    'myIG',
    genderOptions[Math.floor(Math.random() * genderOptions.length)],
    earOptions[Math.floor(Math.random() * earOptions.length)],
    budgetRanges[Math.floor(Math.random() * budgetRanges.length)],
    furColors[Math.floor(Math.random() * furColors.length)],
    eyeColors[Math.floor(Math.random() * eyeColors.length)],
    mifOptions[Math.floor(Math.random() * mifOptions.length)],
  ),
  makeAnonVisitor(
    'callMeAlice',
    'anon2First',
    'anon2Last',
    '4221@gmail.com',
    'i am an another anon visitor',
    false,
    'no',
    'high point',
    'north Carolina',
    'myFB',
    'myIG',
    genderOptions[Math.floor(Math.random() * genderOptions.length)],
    earOptions[Math.floor(Math.random() * earOptions.length)],
    budgetRanges[Math.floor(Math.random() * budgetRanges.length)],
    furColors[Math.floor(Math.random() * furColors.length)],
    eyeColors[Math.floor(Math.random() * eyeColors.length)],
    mifOptions[Math.floor(Math.random() * mifOptions.length)],
)]

module.exports = anonVisitorsArray
