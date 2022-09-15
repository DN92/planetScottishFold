import React, { useState, useEffect } from 'react'
import AboutUs from './textComponents/AboutUs'
import MessageBox from './MessageBox'

const homeComponent = () => {

  const messageArray = [
    '$200 off when you buy 2 kittens. Get $100 per referral. All available kittens are currently on discount until 9/16/22.',
    'FREE DELIVERY to NJ/NYC on all kittens from NC on 9/17/2022.',
  ]

  return (
    <>
      <div className='home'>
        <MessageBox messageArray={messageArray} options={{
          closeOnClick: true,
          onCloseText: 'Show Announcements'
        }} />
        <div className='home__card1'>
          <img className='home__card1__img' src="/catPictures/homepage2.jpg" alt="cute cat image1" style={{width: '60%', margin: 'auto'}}/>
        </div>
        <AboutUs />
        <div className='home__card2'>
          <img className='home__card2__img' src="/catPictures/catHome2.webp" alt="cute cat image2"/>
        </div>
      </div>
    </>
  )
}

export default homeComponent
