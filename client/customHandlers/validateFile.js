function getExtension(filename) {
  return filename.substring(filename.lastIndexOf(".") + 1);
}

function validateFile(file, validType) {
  if( typeof file.name !== 'string') return false
  const valid = (()=> {
    switch(validType) {
      case 'image':
        return ['png', 'jpg', 'jpeg', 'image'].includes(getExtension(file.name.toLowerCase()))
      default :
        return false
    }
  })()
  return valid
}

export default validateFile
