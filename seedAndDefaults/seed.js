"use-strict"

const { db, models } = require ('../server/db')
const dummyKittens = require('./kittensDummy')
const dummyUsers = require('./userDummy')
const dummyAnon = require('./anonDummy')
const dummyStuds = require('./studsDummy')
const dummyDams = require('./damsDummy')
const contactRequests = require('./contactReqDummy')


const { Kitten, Mother, Stud, User, AnonVisitor, ContactRequest } = models
const modelsArray = [ Kitten, Mother, Stud, User, AnonVisitor, ContactRequest ]
/**
 *  seed - this function clears the database, updates tables to
 *    match our models, and populates the database
 */

async function seed() {
  await Promise.all(modelsArray.map(model => (model.drop({force: true}))))
  await db.sync({force: true})  //  clears the db and matches models to tables

  await Promise.all([
    Promise.all(dummyKittens.map(kitten => {
      return Kitten.create(kitten)
    })),
    Promise.all(dummyUsers.map(user => {
      return User.create(user)
    })),
    Promise.all(dummyAnon.map(anon => {
      return AnonVisitor.create(anon)
    })),
    Promise.all(dummyStuds.map(stud => {
      return Stud.create(stud)
    })),
    Promise.all(dummyDams.map(dam => {
      return Mother.create(dam)
    })),
    Promise.all(contactRequests.map(req => {
      return ContactRequest.create(req)
    })),
  ])
}

// runSeed isolates error handling and exit trapping.

async function runSeed() {
  try {
    console.log("Running database seed function")
    await seed()
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
