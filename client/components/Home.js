import React from 'react'
import AboutUs from './textComponents/AboutUs'
import OurProcess from './textComponents/Our Process'



const homeComponent = () => {

  return (
    <div className='home'>
      <div className='home__card1'>
        <img className='home__card1__img' src="/catPictures/catHome1.webp" alt="cute cat image1"/>
      </div>
      <AboutUs />
      <div className='home__card2'>
        <img className='home__card2__img' src="/catPictures/catHome2.webp" alt="cute cat image2"/>
      </div>
      <OurProcess />
    </div>
  )
}

export default homeComponent
