import React from 'react'
import aboutUs from '../../public/aboutUs'

const homeComponent = () => {

  return (
    <div>
      <div>
        <h1>Welcome to Planet Scottish Fold!</h1>

        <article>Family breeders of purebred Scottish Fold {'&'} Straight Kittens</article>
      </div>

      <div>
        <p> {aboutUs} </p>
      </div>
    </div>
  )
}

export default homeComponent
