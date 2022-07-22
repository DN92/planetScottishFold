import React from 'react'
import OurStory from './textComponents/OurStory'

const About = () => {


  return (

    <div className='home__aboutUs'>
      <div className='aboutUs__card1'>
        <img className='aboutUs__card1__img' src="catPictures/ourStory1.webp" alt="" />
      </div>
      <div className='home__aboutUs__text'>
        <h2>Our Story</h2>
        <OurStory />
      </div>
    </div>
  )
}

export default About
