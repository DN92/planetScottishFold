import React from 'react'
import { Link } from 'react-router-dom'
import My404 from './My404'

//  Each review has a image, text, and reviewer property

const SingleReview = ({review}) => {
  return (
    <div className='singleKitten'>
      <div className='singleKitten__card'>
        <img className='singleKitten__card__img' src={review.image}/>
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
