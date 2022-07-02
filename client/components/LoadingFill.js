import React from 'react'

const imgStyle = {
  maxWidth: '100%',
  height: 'auto',
  width: 'auto', /* ie8 */
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
