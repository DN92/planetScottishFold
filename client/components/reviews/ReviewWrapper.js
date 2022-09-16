import React from 'react'

const ReviewWrapper = ({imgPath}) => {

  console.log(imgPath)

  return (
    <div className='review-card'>
      <img src={'/reviews/' + imgPath} alt="image file of a review" />
    </div>
  )
}

export default ReviewWrapper
