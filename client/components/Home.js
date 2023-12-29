'use client'

import React from 'react'
import AboutUs2 from './textComponents/AboutUs2'
import MessageBox from './MessageBox'
import { Link } from 'react-router-dom'

const showMessageBox = true

const homeComponent = () => {

  const messageArray2 = [
    'Discounted Deliveries Are Available For:',
    '1/20/24 to BOS aiport (MA)',
  ]

  const messageArray1 = [
    'New upcoming Kittens!',
    <>
      <Link Link to='/catDetailedView/mother/6'> Frosty </Link> + <Link to='/catDetailedView/father/2'>Cupid </Link> = expected birthday 1/15/23
    </>,
    <>
      <Link Link to='/catDetailedView/mother/11'> Vasilisa </Link> + <Link to='/catDetailedView/father/2'>Cupid </Link> = expected born on 1/25/23
    </>,
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
