function getStrutFileObjs(pathsArray) {
  if (pathsArray.some(path => (typeof path !== 'string'))) return

  const postSplit = pathsArray.map(path => {
    splitPath = path.split('.')
    if (splitPath.length > 2 && splitPath.length < 5 && splitPath.every(ele => ele.length > 0)) {
      return splitPath
    } else {
      return null
    }
  })
    .filter(ele => Array.isArray(ele))

  let nextOrder = 1

  postSplit.forEach((arr) => {
    const order = arr.length > 3 ? parseInt(arr[2], 10) : null
    if (order) {
      if (nextOrder === order ) {
        nextOrder++      } else {
        nextOrder = Math.max(nextOrder, order)
        }
    } else {
      arr.splice(2, 0, (nextOrder + 1).toString())
      nextOrder++
    }
  })
  const inputToObjArr = postSplit.map(arr => ({
    type: arr[0],
    name: arr[1],
    order: arr[2],
    ext: arr[3]
  }))
  // console.log(inputToObjArr)

  return inputToObjArr
}

// getStructedFileObjs(testData)

module.exports = getStrutFileObjs
