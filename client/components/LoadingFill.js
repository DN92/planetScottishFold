import React from 'react'

const imgStyle = {
  maxWidth: '80%',
  height: 'auto',
  width: 'auto',
  top: '50%',
  left: '50%',
  marginLeft: '10%',
}

const LoadingFill = () => {
  return (
    <div >
      <p>Loading</p>
      <img style={imgStyle} src="/catPictures/catLoading.gif" />
    </div>
  )
}

export default LoadingFill
