import React, { useState, useEffect } from 'react'
import AboutUs from './textComponents/AboutUs'

const homeComponent = ({setModalOpen}) => {

  const [showBanner, setShowBanner] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(()=>{
      setShowBanner(false)
    }, 10000)
    return clearTimeout(timeout)
  }, [showBanner])

  return (
    <>
      {showBanner &&
        <div className='home__banner'>
          <div className='home__banner-text'>
            <p>$200 off when you buy 2 kittens. Get $100 per referral. All available kittens are currently on discount until 9/15/22. </p>
            <p>FREE DELIVERY to NJ on all kittens from NC from 9/1/22 to 9/15/22.</p>
            <p>FREE DELIVERY to SC / GA on all kittens on 9/10/22.</p>
          </div>
          <div className='home__banner-close'>
            <button className='home__banner-close-button buttonStyle5' onClick={() => setShowBanner(false)}>X</button>
          </div>
        </div>
      }
      <div className='home__modalButton__wrapper'>
        <button className='home__modalButton buttonStyle2' onClick={() => {
          setShowBanner(prev => !prev)
          }}
        >{showBanner ? 'Hide' : 'Special Offers'}</button>
      </div>
      <div className='home'>
        <div className='home__card1'>
          <img className='home__card1__img' src="/catPictures/catHome1.webp" alt="cute cat image1"/>
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
