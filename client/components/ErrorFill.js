import React from 'react'

const imgStyle = {
  width: '480px',
  height: 'auto',
}

const ErrorFill = ({msg}) => {
  return (
    <div >
      <p>Something went wrong just meow!</p>
      {msg && <p>{msg}</p> }
      <img style={imgStyle} src="/catPictures/catError3.gif"  />
    </div>
  )
}

export default ErrorFill


