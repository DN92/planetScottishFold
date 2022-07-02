import React from 'react'

const imgStyle = {
  width: '480px',
  height: 'auto',
}

const ErrorFill = (props) => {
  return (
    <div >
      <p>Something went wrong just meow!</p>
      {props.msg && <p>{props.msg}</p> }
      <img style={imgStyle} src="/catPictures/catError3.gif"  />
    </div>
  )
}

export default ErrorFill


