import React from 'react'
import { useFitText } from '../../customHooks/useFitText'

const AboutUs = () => {

// const {fontSize, ref} = useFitText();

 return (
  <div className='home__aboutUs'>
   <h3>About Us</h3>
   {/* <p ref={ref} style={{fontSize: fontSize, height: '400px' }}> */}
   <p >
    Planet Scottish Fold is a family breeding cattery with locations in New Jersey, North Carolina and Florida. We have been breeding Scottish Folds since 2016, with a focus on producing healthy and purebred kittens with an amazing personality. All kittens and their parents are raised in our homes in a good, loving environment. We are against captivity, closed cages, declawing and backyard breeding. With us, you'll get your new family member with it's vaccinations, deworming, contract, and life time of breeder support.
    </p>
  </div>
 )
}
export default AboutUs
