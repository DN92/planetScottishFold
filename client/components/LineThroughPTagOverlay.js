import React from 'react'

const LineThroughPTagOverlay = ({message = '', classes = []}) => {

  const whitespace = Array(25).fill('\u00A0').join('');

  return (
    <p className={`line-through-ptag-overlay ${classes.join(' ')}`}>
        {message}
      <p className='line-through-overlay'>{whitespace}</p>
    </p>
  )
}

export default LineThroughPTagOverlay