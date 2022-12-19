import React, { useState, useEffect } from 'react'
import { fetchEffect } from '../../axiosHandlers/fetchEffect'

const PhotoAlbum = ({cat, type, fileChangeOccurred, setFileChangeOccurred}) => {
  const [imagePaths, setImagePaths] = useState([])
  const [selectedPath, setSelectedPath] = useState('')
  const [pathsToDelete, setPathsToDelete] = useState([])
  const [readyDeleteAll, setReadyDeleteAll] = useState(false)
  const [error, setError] = useState('')

  function handleSelectImage(e) {
    if(e.target.src) setSelectedPath(e.target.src)
  }

  function handleMarkForDeletion(e) {
    if(selectedPath) {
      setPathsToDelete(pathsToDelete => [...pathsToDelete, selectedPath])
    }
  }

  function handleUndoDeletion(e) {
    setPathsToDelete(pathsToDelete => pathsToDelete.filter(path => path !== selectedPath))
  }

  function undoAllDeletions() {
    setReadyDeleteAll(false)
    setPathsToDelete([])
  }

  async function handleDeleteAll() {
    setReadyDeleteAll(false)
    await Promise.all(pathsToDelete.map(path => {
      return fetch(`/api/createFiles/images?path=${path}`, {
        method: 'delete',
      })
    }))
    setFileChangeOccurred(true)
    setPathsToDelete([])
    setSelectedPath('')
  }

  function clearSelected() {
    setSelectedPath('')
  }

  // useEffect(() => {
  //   if ((cat && type) || fileChangeOccurred) {
  //     setFileChangeOccurred(false)
  //     fetchEffect(
  //       [setImagePaths, setError],
  //       'get',
  //       `/api/albums?type=${type}&id=${cat.id}`
  //     )
  //   }
  // }, [cat, type, fileChangeOccurred, setFileChangeOccurred])

  useEffect(() => {
    if ((cat && type) || fileChangeOccurred) {
      setFileChangeOccurred(false)
      fetchEffect(
        [setImagePaths, setError],
        'get',
        `/api/supabase/urlsByBucket?bucket=${type}${cat.id}`
      )
    }
  }, [cat, type, fileChangeOccurred, setFileChangeOccurred])

  return (
    <div>
      <h3>Photo Album</h3>
      <div className='album-container' style={{
        display: 'flex',
        flexWrap: 'wrap'
      }}>
        {imagePaths.map((path,idx) => (
        <div
          key={idx + path}
          value={idx}
          onClick={handleSelectImage}
          style={{
            width: '100px',
            height: '100px',
            padding: '.5rem'
          }}
        >
          <img
            src={path}
            alt='album image'
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
          />
        </div>
        ))}
      </div>

      {selectedPath &&
      <div>

        <button onClick={clearSelected}>
          Clear Selected
        </button>
      </div>
      }

      <div className='album-selected-image'>
        <h4>deletion</h4>
        <div className='album-selected-image-container'
          style={{
            height: '250px',
            maxHeight: '250px',
            marginBottom: '3rem',
          }}
        >
          <p>Currently Selected</p>
          <button
            onClick={pathsToDelete.includes(selectedPath) ? handleUndoDeletion : handleMarkForDeletion}
            disabled={ selectedPath ? false : true}
            style={{
              opacity: (selectedPath ? '1.0' : '.8')
            }}
          >
            {pathsToDelete.includes(selectedPath) ? `Keep Image` : `Mark for deletion`}
          </button>
          {selectedPath &&
          <img
            src={selectedPath}
            alt="selected image"
            style={{
              width: '100%',
              height: '100%',
              margin: 'auto',
              objectFit: 'contain',
            }}
          />}

        </div>
      </div>
      <div
        className='album-container'
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          marginBottom: '2rem',
        }}
      >
        {pathsToDelete.map((path,idx) => (
        <div
        key={idx + path}
        onClick={handleSelectImage}
        style={{
          width: '100px',
          height: '100px',
          padding: '.5rem',
        }}
        >
          To Be Deleted
          <img
            src={path}
            alt='album image to delete'
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
          />
        </div>
        ))}
      </div>
      {pathsToDelete.length > 0 &&
      <>
        <button
          onClick={undoAllDeletions}
        >
          Undo All
        </button>
        <button
          onClick={(readyDeleteAll ? handleDeleteAll :() => setReadyDeleteAll(true))}
        >
          {readyDeleteAll ? `Confirm Delete Action` : `Delete All`}
        </button>
      </>
      }
    </div>
  )
}

export default PhotoAlbum
