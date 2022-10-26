import React, { useState } from 'react'
import AboutUs from './textComponents/AboutUs'
import MessageBox from './MessageBox'
import { Link } from 'react-router-dom'

const homeComponent = () => {

  const [showMessageBox, setShowMessageBox] = useState(false)

  const messageArray = [
    'We have four new kittens that have just joined our wonderfur family!',
    'Breed: British Shorthair',
    'Location: High Point, NC',
    <Link style={{color: 'var(--clr-500)'}} to='/waitinglistForm'>If interested, please apply here</Link>
  ]

  return (
    <>
      <div className='home'>
        {showMessageBox &&
          <MessageBox
            messageArray={messageArray}
            image={{
              src: "/otherPictures/homepagebanner.jpg",
              alt: "home page banner"
            }}
            options={{
              closeOnClick: true,
              onCloseText: 'Show Announcements'
          }} />
        }
        <div className='home__card1'>
          <img className='home__card1__img' src="/catPictures/homepage2.jpg" alt="cute cat image1" style={{maxHeight : '540px', width: 'auto'}}/>
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
