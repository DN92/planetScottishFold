import React, { useState, useEffect } from 'react'
import validateFile from '../../../customHandlers/validateFile'

const UploadPane = ({selectedType}) => {

  const [selectedFile, setSelectedFile] = useState(null)
  const [customFilename, setCustomeFilename] = useState('')
  const formData = new FormData()
  const [validationError, setValidationError] = useState('')

  function handleCustomFilename() {

  }

  function handleSelectFile(file) {
    setValidationError('')
    console.log('file:: ', file)
    if (!file) return
    if (!validateFile(file, 'image')) setValidationError('File type validation failed. Only .img .jpg .jpeg files are allowed')
    file && setSelectedFile(file)
  }

  function handlePushFile(e) {
    e.preventDefault()
    console.log('push file')
    if(!selectedFile) return
    setValidationError('')
    if (validateFile(selectedFile, 'image')) {
      formData.append('image', selectedFile, selectedFile.name)
      formData.append('category', selectedType)
      formData.append('filename', customFilename || selectedFile.name)

      // console.log('image', formData.has('image'))
      // console.log('category', formData.has('category'))
      // console.log('filename', formData.has('filename'))

    } else {
      setValidationError('File type validation failed. Only .img .jpg .jpeg files are allowed')
    }
  }

  useEffect(() => {
    console.log('selectedFile :: ', selectedFile)
  }, [selectedFile])

  return (
    <div>
      <h3>UploadPane</h3>
      <form onSubmit={handlePushFile}>
        {validationError && <p className='error'>{validationError}</p>}
        <input
          type="file"
          onChange={e => handleSelectFile(e.target.files[0])}
        />
        <input
          type="text"
          name='type'
          placeholder='category'
        />
        <input
          onChange={handleCustomFilename}
          type="text"
          name='name'
          placeholder='optional custom file name'
        />
      <button type='submit'>
        Push File To Server
      </button>
      </form>
    </div>
  )
}

export default UploadPane
