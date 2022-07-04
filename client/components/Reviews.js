import React from 'react'
import SingleReview from './SingleReview'
import defaultReviews from '../../seedAndDefaults/defaultReviews'


const Reviews = () => {

//  defaultReviews is an array of Objects. Each object has a image, text, and reviewer property
  return (
    <div>
      {
        defaultReviews.map((review, index) => (
          <SingleReview review={review} key={index} />
        ))
      }
    </div>
  )
}

export default Reviews
