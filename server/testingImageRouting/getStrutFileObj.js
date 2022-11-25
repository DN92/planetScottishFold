function getStrutFileObjs(pathsArray) {
  if (pathsArray.some(path => (typeof path !== 'string'))) return

  let nextOrder = 1
  const postSplit = pathsArray.map(path => {
    splitPath = path.split('.')
    if (
      splitPath.length > 2 &&
      splitPath.length < 5 &&
      splitPath.every(ele => ele.length > 0)
      // !isNaN(parseInt((splitPath[splitPath.length -2]), 10 ))
    ) {
      //  handle order
      const order = splitPath.length > 3 ? parseInt(splitPath[2], 10) : null
      if (order) {
        if (nextOrder === order ) {
          nextOrder++
        } else {
          nextOrder = Math.max(nextOrder, order)
        }
      } else {
        splitPath.splice(2, 0, (nextOrder + 1).toString())
        nextOrder++
      }
      // handle target dirName
      let dirname
      const nameParts = splitPath[1].split('-')
      if (!nameParts.length) {
        dirname = 'overFlow'
      }
      else {
        dirname = nameParts[nameParts.length - 1]
      }
      return {
        type: splitPath[0],
        name: splitPath[1],
        order: splitPath[2],
        ext: splitPath[3],
        dirname: dirname,
        original: path
      }
    } else {
      return null
    }
  })
    .filter(ele => typeof ele === 'object')

  return postSplit

  // postSplit.forEach((arr) => {
  //   const order = arr.length > 3 ? parseInt(arr[2], 10) : null
  //   if (order) {
  //     if (nextOrder === order ) {
  //       nextOrder++
  //     } else {
  //       nextOrder = Math.max(nextOrder, order)
  //     }
  //   } else {
  //     arr.splice(2, 0, (nextOrder + 1).toString())
  //     nextOrder++
  //   }
  // })
  // const inputToObjArr = postSplit.map(arr => {
  //   let dirName
  //   const nameParts = arr[1].split('-')
  //   if (!nameParts.length) {
  //     dirName = 'overFlow'
  //   }
  //   else {
  //     dirName = nameParts[nameParts.length - 1]
  //   }

  //   return {
  //     type: arr[0],
  //     name: arr[1],
  //     order: arr[2],
  //     ext: arr[3],
  //     dirname: dirName,
  //     original: arr.join('.')
  //   }
  // })

  // return inputToObjArr
}

// getStructedFileObjs(testData)

module.exports = getStrutFileObjs
