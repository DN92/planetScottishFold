import React from 'react'
import { Link } from 'react-router-dom'

const AboutUs = () => {

// const {fontSize, ref} = useFitText();

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
    </div>
   <h5>About Our Scottish Fold Cattery</h5>
   <article>
    <p >Planet Scottish fold is a small cattery located in High Point, North Carolina USA. We breed Scottish fold and Scottish straight kittens with the intent to improve the breed.
    </p>
    <p>
      We also have sister catteries that are located in Bergenfield, New Jersey and Pompano Beach, Florida.
    </p>
    <p>
      We mainly specialize in chinchilla colors, such as gold, blue gold, silver and pointed chinchillas. But also have non chinchilla kittens, such as solid white, blue tabby, blue and chocolate colorpoints, bicolor and tortoiseshell kittens.
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
      What you’re getting from Planet Scottish fold:
    </p>
    <ul>
      <li>1 year health guarantee (covers hereditary defects and offers a replacement kitten)</li>
      <li>age appropriate vaccinations and deworming </li>
      <li>spay/neuter once kitten is at least 12 weeks old (only NC kittens)</li>
      <li>microchip</li>
      <li>well socialized kitten raised at home in warm and loving environment with other pets and children</li>
      <li>weaned off and litter box trained kitten</li>
      <li>weekly updates with photos and/or videos</li>
      <li>lifetime breeder support</li>
      <li>30 days FREE pet insurance (NY and FL excluded) </li>
      <li>FaceTime is available before or after the reservation. </li>
    </ul>
    <h5>Delivery options:</h5>
    <p>
      <span className='underlined'>Air delivery:</span> Delivery within USA is available. Delivery price depends on the destination and airlines schedule. We will deliver to your closest international airport where you’d pick up your kitten from our trusted flight nanny.
    </p>
    <p>
      Please note, we do not and will not deliver via cargo. If choosing air delivery, only in cabin delivery will be provided. Your kitten will be accompanied with a flight nanny throughout the whole trip and will receive the best care possible! You will be notified throughout the day about your kittens travel.
    </p>
    <p>
      <span className='underlined'>Car delivery:</span> Car delivery is also available. Cost to deliver by car is 90 cents per mile (charged for one way). Destination limit is 600 mi from our location in High Point, North Carolina 27265.
    </p>
    <p>
      Please note, kitten well being is very important, thus we put a limit of miles to deliver by car. Time to deliver might vary a lot depending on traffic changes and number of stops needed to make to eat, rest and provide care for the kitten, such as changing pee pads, cleaning the kennel and/or kitten, making sure it’s hydrated and socialized with to avoid having stress during the drive.
    </p>
    <p>
      If you’d like us to meet you half way, same fee of 90 cents per mile will be applied and charged for one way.
    </p>
    <h5>Pick up options:</h5>
    <p>
      <span className='underlined'>Flying Over:</span> you can fly over to one of our airports (GSO, RDU, or CLT) and we will meet you there with your kitten. Expect to pay $80-$125 to the airline for the kitten’s one way ticket. Each airline has its own policy, please review it before confirming.
      We will assist you the best we can, but no booking/purchasing tickets will be provided from our end.
    </p>
    <p>
      <span className='underlined'>Amtrack:</span> you can travel by AMTRACK to our station in High Point, NC, and we will meet you at the station with your kitten.
     IMPORTANT Amtrack policy: cats up to 20 pounds (combined weight of pet and carrier) are welcome on trips up to seven hours on most routes (some restrictions apply).
     </p>
    <p>
      We will help you the best we can, but no booking/purchasing tickets will be provided from our end.
    </p>
    <p>
      <span className='underlined'>Meeting half way:</span>  if you’d like us to meet you half way, same fee of 90 cents per mile will be applied and charged for one way.
    </p>
    <p>
      <span className='underlined'>Driving Over:</span> most of our kitten owners come to pickup from our home locations. Our address is shared to reserved applicants only.
    </p>
    <p>
      If driving far, please plan accordingly and consider having multiple stops to rest and take care of the kitten. It’s good to have 2 people so that the passenger can take the kitten out of the kennel during the drive if it starts being stressed out.
    </p>
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
