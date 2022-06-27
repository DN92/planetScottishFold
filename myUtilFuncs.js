
const myUtilFuncs = {}

myUtilFuncs.resetForm = (event) => {
  try {
    document.getElementById(event.nativeEvent.srcElement.id).reset()
    console.log(event.nativeEvent.srcElement.id, "  Should have been reset")
  } catch (err) {
    console.err(err)
    console.log(err.stack)
  }
}

myUtilFuncs.convertToPhoneNumber = (number) => {
  number = number.split('')
    .filter(char => char !== "-" && char !== " ")
    .join('')
  if(number.length < 4) {
    return number
  }
  if(number.length < 7) {
    return number.slice(0,3) + ' - ' + number.slice(3)
  }
  return number.slice(0,3) + ' - ' + number.slice(3, 6) + ' - ' + number.slice(6,10)  //  will discard any digits after the tenth
}

myUtilFuncs.objectKeysToLowerCase = (object) => {
  try {
    Object.keys(object).forEach(key => {
      if(typeof object[key] === string) {
        object[key] = object[key].toLowerCase()
      }
    })
  } catch (err) {
    console.error('Utility Function objectKeysToLowerCase failed')
    console.error(err)
    console.log(error.stack)
  }
}

module.exports = myUtilFuncs
