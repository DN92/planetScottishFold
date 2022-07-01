const obj = {}

obj.string = 'false'

console.log(obj)

// if (obj.string === 'false' ) {
//   obj.string = false
// }

// console.log(obj.string)

Object.keys(obj).forEach(key => {
  console.log(obj[key])
  if (obj[key] === 'false') {
    obj[key] = false
  }
  console.log(obj[key])
})

console.log(obj)
