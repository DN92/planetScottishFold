import React from 'react'
import SingleReview from './SingleReview'
import defaultReviews from '../../seedAndDefaults/defaultReviews'


const Reviews = () => {

  return (
    <div className='kittens'>
      <h2>Reviews</h2>
      <div className=' reviews'>
        {
          defaultReviews.map((review, index) => (
            <SingleReview review={review} key={index} />
          ))
        }
      </div>
    </div>
  )
}

export default Reviews
