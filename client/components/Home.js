import React, {useContext} from 'react'
import AboutUs from './textComponents/AboutUs'
import MeContext from '../MeContextPro'


const homeComponent = () => {

  const meContext = useContext(MeContext)

  return (
    <div>
      <div>
        <h1>Welcome to Planet Scottish Fold!</h1>
        <h2>!!! {meContext.username} !!!</h2>
        <h2>!!! {meContext.type} !!!</h2>
        <h2>!!! {meContext.id} !!!</h2>

        <article>Family breeders of purebred Scottish Fold {'&'} Straight Kittens</article>
      </div>
      <AboutUs />
    </div>
  )
}

export default homeComponent
