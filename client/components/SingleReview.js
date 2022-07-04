import React from 'react'
import { Link } from 'react-router-dom'
import My404 from './My404'

//  Each review has a image, text, and reviewer property

const SingleReview = ({review}) => {
  return (
    <div>
      <img src={review.image}/>
      <article>{review.text}</article>
      <article>{review.reviewer}</article>
      <a target="_blank" href={review.srcPage}>
        <button>Visit Review Page</button>
      </a>
    </div>
  )
}

export default SingleReview
