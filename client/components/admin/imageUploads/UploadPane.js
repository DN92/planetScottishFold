import React, { useState, useMemo, useEffect } from 'react'
import validateFile from '../../../customHandlers/validateFile'

function getExtension(filename) {
  return filename.substring(filename.lastIndexOf(".") + 1);
}

const UploadPane = ({prime, category, setFileChangeOccurred}) => {

  const [selectedFile, setSelectedFile] = useState(null)
  const [customFilename, setCustomFilename] = useState('')
  const [formData, setFormData] = useState(new FormData())
  const [validationError, setValidationError] = useState('')
  const [uploadError, setUploadError] = useState('')
  const [responseCode, setResponseCode] = useState(null)
  const [responseMsg, setResponseMsg] = useState('')

  const ext = useMemo(() => {
    if(!selectedFile) return ''
    return getExtension(selectedFile.name)
  }, [selectedFile])

  function resetState() {
    setSelectedFile(null);
    setCustomFilename('')
    setFormData(new FormData())
    setValidationError('')
  }

  function handleCustomFilename(e) {
    setCustomFilename(`${e.target.value}.${ext}`)
  }

  function handleSelectFile(file) {
    setValidationError('')
    if (!file) return
    if (!validateFile(file, 'image')) setValidationError('File type validation failed. Only .img .jpg .jpeg files are allowed')
    file && setSelectedFile(file)
  }

  async function handlePushFileOld(e) {
    e.preventDefault()

    if(!selectedFile) return
    setValidationError('')
    if (validateFile(selectedFile, 'image')) {
      formData.append('image', selectedFile, selectedFile.name)
      formData.append('catName', prime?.name || '')
      formData.append('category', category)
      formData.append('id', prime?.id ?? 0)
      formData.append('filename', customFilename || selectedFile.name)

      const response = await fetch('/api/createFiles/upimage', {
        method: 'post',
        body: formData,
      })
      if(response.status >= 200 && response.status <= 299) {
        const json = await response.json()
        setResponseCode(response?.status ?? 600)
        setResponseMsg(json?.msg ?? '')
        resetState()
        setFileChangeOccurred(true)
      } else {
        console.log('ERROR RESPONSE:: ', response)
        setUploadError(response.statusText || 'unknown error')
      }

    } else {
      setValidationError('File type validation failed. Only .img .jpg .jpeg files are allowed')
    }
  }

  async function handlePushFileNew(e) {
    e.preventDefault()

    if(!selectedFile) return
    setValidationError('')
    if (validateFile(selectedFile, 'image')) {
      formData.append('image', selectedFile, selectedFile.name)
      formData.append('catName', prime?.name || '')
      formData.append('category', category)
      formData.append('id', prime?.id ?? 0)
      formData.append('filename', customFilename || selectedFile.name)

      const response = await fetch('/api/supabase/imageUpload', {
        method: 'post',
        body: formData,
      })

      if(response.status >= 200 && response.status <= 299) {
        setResponseCode(response?.status ?? 600)
        resetState()
        setFileChangeOccurred(true)
      } else {
        console.log('ERROR RESPONSE:: ', response)
        setUploadError(response.statusText || 'unknown error')
      }

    } else {
      setValidationError('File type validation failed. Only .img .jpg .jpeg files are allowed')
    }
  }

  function handleReset() {
    resetState()
  }

  return (
    <div>
      <h3>UploadPane</h3>

      {prime ?
      <form onSubmit={handlePushFileNew}>
        {validationError && <p className='error'>{validationError}</p>}
        <input
          type="file"
          onChange={e => handleSelectFile(e.target.files[0])}
        />
        <input
          disabled={!selectedFile}
          onChange={handleCustomFilename}
          type="text"
          name='name'
          placeholder={selectedFile ? 'optional custom file name' : 'Click Choose File' }
        />
        <button type='reset' onClick={handleReset}>
          Clear
        </button>
        <button type='submit'>
          Push File To Server
        </button>
      </form>

      :
      <h4>Select A Cat to upload an image</h4>
      }
    </div>
  )
}

export default UploadPane
