import React from 'react'

const ReviewWrapper = ({imgPath}) => {

  return (
    <div className='review-card'>
      <img src={imgPath} alt="image file of a review" />
    </div>
  )
}

export default ReviewWrapper
