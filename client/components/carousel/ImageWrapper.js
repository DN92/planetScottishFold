import React from 'react'

const ImageWrapper = ({width, src, alternative, value, setSelected, classList=[]}) => {

  const handleClick = () => {
    if(typeof value === 'number') {
      setSelected(value)
    }
  }

  return (
      <img
        onClick={handleClick}
        className={'carousel-img' + ' ' + classList.join(' ')}
        src={src}
        alt={alternative}
        style={{
        boxSizing: 'border-box',
        flexShrink: 0,
        flexGrow: 1,
        height: 'auto',
        objectFit: 'fill',
        border: '3px solid pink',
        alignItems: 'center',
        overflow: 'hidden'
        }}
      />
    )
  }

  export default ImageWrapper
