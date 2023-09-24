'use client'

import React from 'react'
import AboutUs2 from './textComponents/AboutUs2'
import MessageBox from './MessageBox'

const showMessageBox = true

const homeComponent = () => {

  const messageArray = [
    "Delivery to VA, MD, PA, NJ on 9/27/2023",
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
