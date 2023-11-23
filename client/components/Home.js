'use client'

import React from 'react'
import AboutUs2 from './textComponents/AboutUs2'
import MessageBox from './MessageBox'
import { Link } from 'react-router-dom'

const showMessageBox = true

const homeComponent = () => {

  const messageArray1 = [
    'DISCOUNTED DELIVERY TO LAGUARDIA/NEWARK AIRPORT, NYC ON 12/09/23.'
  ]

  const messageArray2 = [
    'New Kittens will be announced this week!',
    <>
    <Link to='/catDetailedView/mother/10'>Lesya</Link> + <Link to='/catDetailedView/father/2'>Cupid</Link> = kittens born on 10/18/23</>,
    <Link to='/waitingListForm'>
      Apply here for text notifications
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
