import React from 'react'

//  Each review has a image, text, and reviewer property

const SingleReview = ({review}) => {
  return (
    <div>
      <img src={review.image}/>
      <article>{review.text}</article>
      <article>{review.reviewer}</article>
      <button>Visit Review Page</button>
    </div>
  )
}

export default SingleReview
