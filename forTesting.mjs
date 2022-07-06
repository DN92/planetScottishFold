import utilFuncs from './myUtilFuncs.js'

const obj1 = {
  username: 'charles',
  type: 'dad',
  id: 3,

}

const obj2 = {
  username: 'charles',
  type: 'dad',
  id: 2,
  log:{}
}

const keyVals1 = Object.entries(obj1).map(key => (JSON.stringify(key)))
const keyVals2 = Object.entries(obj2).map(key => (JSON.stringify(key)))

console.log(keyVals1)
console.log(keyVals2)

let counter = 0

keyVals1.forEach(key => {
  if(keyVals2.includes(key)) {
    counter++
  }
})

console.log(counter)

