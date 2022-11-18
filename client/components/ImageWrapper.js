import React from 'react'

const ImageWrapper = React.forwardRef((
  {src: src, width, alternative = 'placeholder'}, ref) => {
    return (
    <div
        className='carousel-img-wrapper'
        style={{width: width, height: 'auto'}}
        >
        <img style={{height: 'auto', width: '100%', objectFit: 'cover'}} className='carousel-img' src={src} alt={alternative} />
    </div>
    )
  })

export default ImageWrapper
