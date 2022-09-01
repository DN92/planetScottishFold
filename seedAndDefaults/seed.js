"use-strict"

const { db, models } = require ('../server/db')
const dummyUsers = require('./userDummy')
const contactRequests = require('./contactReqDummy')
const studsActual = require('./studsActual')
const damsActual = require('./damsActual')
const kittensActual = require('./kittensActual')
const initialUsers = require("./initTest")
const catAsKittenArray = require('./catAsKittenActual')

const { Kitten, Mother, Stud, User, ContactRequest, InitialUser, CatAsKitten } = models
const modelsArray = [ ... Object.values(models) ]
/**
 *  seed - this function clears the database, updates tables to
 *    match our models, and populates the database
 */

async function seed() {
  // await Promise.all([
  //   Kitten.sync({force:true}),
  //   Mother.sync({force:true}),
  //   Stud.sync({force:true}),
  //   User.sync({force:true}),
  //   ContactRequest.sync({force:true}),
  //   InitialUser.sync({force:true}),
  //   CatAsKitten.sync({force:true}),
  // ])

  await db.sync({force: true, alter: true})  //  clears the db and matches models to tables
  await Promise.all([
    Promise.all(kittensActual.map(kitten => {
      return Kitten.create(kitten)
    })),
    Promise.all(dummyUsers.map(user => {
      return User.create(user)
    })),
    Promise.all(studsActual.map(stud => {
      return Stud.create(stud)
    })),
    Promise.all(damsActual.map(dam => {
      return Mother.create(dam)
    })),
    Promise.all(contactRequests.map(req => {
      return ContactRequest.create(req)
    })),
    Promise.all(initialUsers.map(init => {
      return InitialUser.create(init)
    })),
    Promise.all(catAsKittenArray.map(cat => {
      return CatAsKitten.create(cat)
    }))
  ])
}

// runSeed isolates error handling and exit trapping.

async function runSeed() {
  try {
    console.log("Running database seed function")
    await seed()
    console.log('Seed function completed with no errors')
  } catch (err) {
    console.log("Database seed failed")
    console.error(err)
    console.log(err.stack)
  } finally {
    console.log("closing db connection")
    await db.close()
    console.log("db connection closed")
  }
}

// execute our runSeed IF we ran this directly from Node ('node seed')

if (module === require.main) {
  runSeed();
}
