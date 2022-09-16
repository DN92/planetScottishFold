import React, {useState, useEffect}  from 'react'
import ReviewWrapper from './ReviewWrapper'

const Reviews2 = () => {

  const [reviews, setReviews] = useState([])

  console.log(typeof reviews[0])

  useEffect(() => {
    fetch('/api/reviews', {
      method: 'get',
      contentType: 'application/json'
    })
    .then(response => response.json())
    .then(data => setReviews(data))
  }, [])

  return (
    <div className='reviews-wrapper'>
      {reviews.map((review, idx) => (
        <ReviewWrapper key={idx} imgPath={review} />
      ))}
    </div>
  )
}

export default Reviews2
