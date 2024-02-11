'use client'

import React from 'react'
import AboutUs2 from './textComponents/AboutUs2'
import MessageBox from './MessageBox'
import { Link } from 'react-router-dom'

const showMessageBox = true

const homeComponent = () => {

  const messageArray2 = [
    'Jet-Set Your Kittens Home!',
    'Enjoy Our Affordable Air Delivery to PA, NY, NJ, MA, FL, GA, TX, and more!',
  ]

  const messageArray1 = [
    'New kittens will be announced soon!',
    <>
      <>
        <Link to='/catDetailedView/mother/11'> Vasilisa </Link> + <Link to='/catDetailedView/father/2'>Cupid </Link> = Born on 1/23/24 &#128512;
      </>,
        <Link  to='/catDetailedView/mother/12'> Nova </Link> + <Link to='/catDetailedView/father/2'> Cupid </Link> = Expected Birthday: 2/25/24
    </>,
    <>
      <Link Link to='/catDetailedView/mother/7'> Ladybug </Link> + <Link to='/catDetailedView/father/2'> Cupid </Link> = Expected Birthday: 3/01/24
    </>,
      <Link to='/waitingListForm'>
        Apply here for SMS notifications
      </Link>,
  ]

  return (
    <>
      <MessageBox
        messageArray={messageArray1}
        options={{
          closeOnCLick: true,
        }}
      />
      <MessageBox
        messageArray={messageArray2}
        options={{
          closeOnCLick: true,
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
