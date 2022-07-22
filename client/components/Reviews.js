import React from 'react'
import SingleReview from './SingleReview'
import defaultReviews from '../../seedAndDefaults/defaultReviews'


const Reviews = () => {

  return (
    <div className='kittens'>
      <div className=' availableKittens'>
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
