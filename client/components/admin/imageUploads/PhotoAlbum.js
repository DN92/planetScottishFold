import React, { useState, useEffect } from 'react'
import { fetchEffect } from '../../axiosHandlers/fetchEffect'

const PhotoAlbum = ({cat, type}) => {
  const [imagePaths, setImagePaths] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    cat && console.log(cat.id)
  }, [cat])

  useEffect(() => {
    if (cat && type && imagePaths.length < 1) {
      fetchEffect(
        [setImagePaths, setError],
        'get',
        `/api/albums?type=${type}&id=${cat.id}`
      )
    }
  }, [cat, type])

  useEffect(() => {
    console.log('paths:: ', imagePaths)
  }, [imagePaths])

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
            style={{
              width: '100px',
              height: '100px',
            }}
          >
            <img src={path} alt='album image' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default PhotoAlbum
