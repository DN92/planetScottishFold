import React from 'react'


const LoadingFill = ({message}) => {
  return (
    <div >
      <p>{message}</p>
      <img src="/catPictures/catLoading.gif" />
    </div>
  )
}

export default LoadingFill
