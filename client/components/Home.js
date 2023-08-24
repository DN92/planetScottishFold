'use client'

import React from 'react'
import AboutUs2 from './textComponents/AboutUs2'
import MessageBox from './MessageBox'
import { Link } from 'react-router-dom'

const showMessageBox = true

const homeComponent = () => {

  const messageArray = [
    "Free Delivery within Continental United States on all kittens over $2000."
  ]

  return (
    <>
      <div className='home'>
        {showMessageBox &&
          <MessageBox
            messageArray={messageArray}
            options={{
              closeOnClick: true,
              onCloseText: 'Show Announcements'
            }}
          />
        }
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
