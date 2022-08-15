import React from 'react'

//  Each review has a image, text, and reviewer property

const SingleReview = ({review}) => {
  return (
    <div className='singleReview'>
      <div className='singleKitten__card'>
        <img className='review__card__img' src={review.image} alt='Cat Picture'/>
      </div>
      <div className='singleKittenInfo'>
        <p>{review.text}</p>
        <p>{review.reviewer}</p>
      </div>
      <div className='singleKitten__button'>
      </div>
    </div>
  )
}

export default SingleReview
