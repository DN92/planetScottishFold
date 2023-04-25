import React from 'react'
import { Link } from 'react-router-dom'
import useWindowSize from '../../customHooks/useWindowSize'

const AboutUs = () => {
  const { width } = useWindowSize()

 return (
  <div className='home__about-us'>
    <div className='home__links-wrapper'>
      <div className='home__link'>
        <Link to='/availableKittens' >View Available Kittens</Link>
      </div>
      <div className='home__link'>
        <Link to='/viewCats/mother'>See Our Queens / Dams</Link>
      </div>
      <div className='home__link'>
      <Link to='/viewCats/father'>See Our Kings / Sires</Link>
      </div>
      <div className='home__link'>
        <Link to='/waitingListForm'>Apply to start the adoption process</Link>
    </div>
    <div >
      <img style={{
        height:'auto',
        width: (width < 769 ? '360px' : '600px'),
        margin: '2rem auto 0 auto'}
        }
        src="/tica/ticaReg.jpg" alt="tica certificate" />
    </div>
    </div>
   <h5>About Our Scottish Fold Cattery</h5>
   <article>
    <p >Planet Scottish fold is a small cattery located in High Point, North Carolina USA. We breed Scottish fold and Scottish straight kittens as well as British Shorthair kittens with the intent to improve the breeds.
    </p>
    <p>
      We also have sister catteries that are located in Bergenfield, New Jersey and Pompano Beach, Florida.
    </p>
    <p>
      We mainly specialize in chinchilla colors, such as gold, blue gold, silver and pointed chinchillas. But also have non chinchilla kittens, such as solid white, solid blue, blue tabby, blue and chocolate colorpoints, bicolor and tortoiseshell kittens.
    </p>
    <h5>About the breed</h5>
    <p>
      Scottish folds are known to be suuupperr affectionate and get along with other pets and small children.
      This breed does not fit the standard cat stereotype! They don’t want to be left alone in their lair, instead, they’ll want to sit on your lap, lie under your arm or on your pillow as close to your face as possible.
      If you get them a sibling you’ll enjoy watching them jump around and groom each other, but they wont forget about you! You’ll simply get double affection and love.
    </p>
    <p>
      So if you’re looking for a mellow and loyal best furrend then this breed is for you!
    </p>
    <Link to='/availableKittens'>View Scottish Fold Kittens for Sale</Link>
    <div className='aboutUs__card2'>
      <img className='aboutUs__card2__img' src="/fillerPictures/homepageFiller2cats.jpg" alt="cat picture" style={{maxHeight : '540px', width: 'auto'}} />
    </div>
    <h5>Our Kittens</h5>
    <p>
    Our kittens well-being is very important, thus choosing the right owners for our babies is another priority! If you’re ready for your perfect baby, please fill out the <Link to='/waitingListForm'>Questionnaire.</Link>
    </p>
    <p>
      What’s Included with North Carolina kittens:
    </p>
    <ul>
      <li> most loyal and affectionate pawsonality well socialized kitten raised at home in warm and loving environment with other pets and children </li>
      <li> 2 vaccinations and deworming </li>
      <li> Spay/Neuter and e-collar </li>
      <li> TICA slip </li>
      <li> Nails clipped </li>
      <li> Microchip with free registration </li>
      <li> 1 month Trupanion insurance (NY & FL excluded) </li>
      <li> 3 years health guarantee </li>
      <li> 1 year FIP disease coverage </li>
      <li> litter and scratch board trained kitten </li>
      <li> lifetime breeder support weekly updates with photos and/or videos </li>
      <li> mystery gift kit full of goodies FaceTime is available before or after the reservation </li>
    
    </ul>
    <h5>How will you receive your kitten?</h5>

    <p>You have many options on how to get your new family member.
    If you're close, picking up from our cattery is the best option.</p>

    <p>Delivery. Depending on distance and location, we offer the lowest possible rates on car and plane deliveries.</p>

    <p>You can fly over to one of our local airports and we will come to meet you with your kitten.
    Please be aware that the airline will charge a pet air fare of up to $125 as of this writing.</p>
    <Link to='/waitingListForm'>
      Apply for your kitten here
    </Link>
    <p>
      After your application is reviewed, you'll be notified. After that, you will be able to reserve any currently available kitten or reserve a spot for future litters.
    </p>

   </article>
  </div>
 )
}
export default AboutUs
