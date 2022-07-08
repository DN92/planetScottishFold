import React from 'react'

const imgStyle = {
  width: '480px',
  height: 'auto',
}

const ErrorFill = ({msg}) => {
  return (
    <div >
      <p>Something went wrong just meow!</p>
      {msg && <h2>{msg}</h2> }
      <img style={imgStyle} src="/catPictures/catError3.gif"  />
    </div>
  )
}

export default ErrorFill


