import React, {useState, useEffect, useMemo}  from 'react'
import ReviewWrapper from './ReviewWrapper'

const Reviews2 = () => {

  const [reviews, setReviews] = useState([])
  const reviewsLength = useMemo(() => reviews.length, [reviews])
  const reviewsColumn1 = useMemo(() => {
    if(reviewsLength < 0) return []
    return reviews.slice(0, Math.ceil(reviewsLength/3))
  }, [reviewsLength])
  const reviewsColumn2 = useMemo(() => {
    if(reviewsLength < 1) return []
    return reviews.slice(Math.ceil(reviewsLength/3), Math.ceil(reviewsLength/3*2))
  }, [reviewsLength])
  const reviewsColumn3 = useMemo(() => {
    if(reviewsLength < 2) return []
    return reviews.slice(Math.ceil(reviewsLength/3*2), Math.ceil(reviewsLength))
  }, [reviewsLength])

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
      <div className='reviews-column'>
        {reviewsColumn1.map((review, idx) => (
          <ReviewWrapper key={idx + '-.-' + review} imgPath={review} />
        ))}
      </div>
      <div className='reviews-column'>
        {reviewsColumn2.map((review, idx) => (
          <ReviewWrapper key={idx + '-.-' + review} imgPath={review} />
        ))}
      </div>
      <div className='reviews-column'>
        {reviewsColumn3.map((review, idx) => (
          <ReviewWrapper key={idx + '-.-' + review} imgPath={review} />
        ))}
      </div>
    </div>
  )
}

export default Reviews2
