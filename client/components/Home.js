import React, {useContext} from 'react'
import AboutUs from './textComponents/AboutUs'
import MeContext from '../MeContextPro'


const homeComponent = () => {

  const meContext = useContext(MeContext)

  return (
    <div>
      <div>
        <h2>Welcome to Planet Scottish Fold!</h2>
        <h2>!!! {meContext.username} !!!</h2>
        <h2>!!! {meContext.type} !!!</h2>
        <h2>!!! {meContext.id} !!!</h2>

        <article>Family breeders of purebred Scottish Fold {'&'} Straight Kittens</article>
        <img src="/catPictures/catHome1.webp" alt="cute cat image1"/>
      </div>
      <AboutUs />
      <img src="/catPictures/catHome2.webp" alt="cute cat image2"/>
    </div>
  )
}

export default homeComponent
