'use client'

import React from 'react'
import AboutUs2 from './textComponents/AboutUs2'
import MessageBox from './MessageBox'

const showMessageBox = true

const homeComponent = () => {

  const messageArray1 = [
    'We will be delivering to Philadelphia airport on October 21st.',
    'We will be delivering to Seattle airport in November. Exact date, to be determined.',
    'Reservation to these location will come at discounted transportation fees.',
    'Spots are limited, first come, first serve.',
  ]

  return (
    <>
      <MessageBox
        messageArray={messageArray1}
        options={{
          closeOnCLick: false,
        }}
      />
      <div className='home'>
        <div className='home__card1'>
          <img className='home__card1__img' src="/catPictures/homepage2.jpg" alt="cute cat image1" style={{maxHeight : '540px', width: 'auto'}}/>
        </div>
        <AboutUs2 />
        <div className='home__card2'>
          <img className='home__card2__img' src="/catPictures/catHome2.webp" alt="cute cat image2"/>
        </div>
      </div>
    </>
  )
}

export default homeComponent
