import React, {useContext} from 'react'
import AboutUs from './textComponents/AboutUs'
import MeContext from '../MeContextPro'


const homeComponent = () => {

  const meContext = useContext(MeContext)

  return (
    <div>
      <div>

        <img src="/catPictures/catHome1.webp" alt="cute cat image1"/>
      </div>
      <AboutUs />
      <img src="/catPictures/catHome2.webp" alt="cute cat image2"/>
    </div>
  )
}

export default homeComponent
