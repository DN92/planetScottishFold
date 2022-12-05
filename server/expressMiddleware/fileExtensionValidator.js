const path = require('path')

function fileExtensionLimiter(allowedExtArray) {
  return (req, res, next) => {
    if(!req.files) {
      next()
    }
    console.log('files:: ', Object.values(req.files))

    filesExtensions = Object.values(req.files)
      .map(file => path.extname(file.name || '').toLowerCase().slice(1));

    if(filesExtensions.every(ext => allowedExtArray.includes(ext))) {
      next()
    } else {
      throw Error(`Attempted to upload file with bad extension. Valid Extension: ${JSON.stringify(allowedExtArray)}. Provided Exts: ${filesExtensions}. extra:: ${Object.values(req.files).map(file => JSON.stringify(file))}`)
    }
  }
}

module.exports = fileExtensionLimiter
