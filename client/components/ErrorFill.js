import React from 'react'

const ErrorFill = ({msg}) => {
  return (
    <div >
      <p>Something went wrong just meow!</p>
      {msg && <h2>{msg}</h2> }
      <img src="/catPictures/catError3.gif" alt='cat error image'  />
    </div>
  )
}

export default ErrorFill


