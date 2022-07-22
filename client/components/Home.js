import React, {useContext} from 'react'
import AboutUs from './textComponents/AboutUs'
import OurProcess from './textComponents/Our Process'
import MeContext from '../MeContextPro'


const homeComponent = () => {

  const meContext = useContext(MeContext)

  return (
    <div className='home'>
      <div className='home__card1'>
        <img className='home__card1__img' src="/catPictures/catHome1.webp" alt="cute cat image1"/>
        <AboutUs />
      </div>
      <div className='home__card2'>
        <OurProcess />
        <img className='home__card2__img' src="/catPictures/catHome2.webp" alt="cute cat image2"/>
      </div>
    </div>
  )
}

export default homeComponent
