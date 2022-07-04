import React from 'react'

const imgStyle = {
  maxWidth: '38%',
  height: 'auto',
  width: 'auto',
  top: '50%',
  left: '50%',
  marginLeft: '10%',
}

const LoadingFill = ({message}) => {
  return (
    <div >
      <p>{message}</p>
      <img style={imgStyle} src="/catPictures/catLoading.gif" />
    </div>
  )
}

export default LoadingFill
