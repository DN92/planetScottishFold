import React, { useState } from 'react'
import AboutUs from './textComponents/AboutUs'
import MessageBox from './MessageBox'

const homeComponent = () => {

  const [showMessageBox, setShowMessageBox] = useState(false)

  const messageArray = [
    '$200 off when you buy 2 kittens. Get $100 per referral.',
  ]

  return (
    <>
      <div className='home'>
        {showMessageBox &&
          <MessageBox messageArray={messageArray} options={{
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
