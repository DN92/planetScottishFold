import React from 'react'
import { Link } from 'react-router-dom'
import useWindowSize from '../../customHooks/useWindowSize'
import WhatsIncluded from './WhatsIncluded'

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
  <h5>Welcome to Planet Scottish Fold</h5>
  <p>
    Welcome to Planet Scottish Fold, your destination for adorable and friendly Scottish Fold and British Shorthair kittens. 
    We take pride in breeding healthy and affectionate kittens that will bring joy and love to your home. With our carefully 
    selected parents and dedicated care, we ensure that our kittens inherit the best qualities of the breed. Explore our website to
    meet our furry companions and discover your new best furrend. Reserve your kitten today and experience the pure delight of owning
    a Scottish Fold. MEOW
  </p>
  <h5>My Passion</h5>
   <article>
    <p>
      Hello, I'm Nataliya, the proud owner of Planet Scottish Fold Cattery. Let me share how my love for nature and animals guided me on this
      wonderful journey of breeding. Since I was a child, I've been captivated by the beauty of the natural world. Cats, in particular, hold a
      special place in my heart, even from a young age. Growing up, pets were always a cherished part of my family. We had a variety of 
      companions, from our beloved childhood cat to parrots, turtles, fish, hamsters, and dogs. Life without a pet feels incomplete.
    </p>
    <div className='aboutUs__card2'>
      <img className='aboutUs__card2__img' src="/homepage2/Cert001.jpg" alt="cert1 pic" style={{maxHeight : '540px', width: 'auto'}} />
    </div>
    <p> 
      In 2016, my cattery journey began with Athena, a purebred Scottish Straight cat gifted to me by my sister. Athena captured my 
      heart with her incredible loyalty and affectionate nature. She became the foundation of my breeding program, producing adorable
      kittens and eventually retiring in 2021. Her legacy continues through Ladybug, one of her kittens, who carries her mother's loving
      personality. Throughout the years, my dedication has been focused on understanding and improving this remarkable breed. My utmost
      priority is breeding healthy kittens that embody the best qualities of the breed: friendly, affectionate, loyal, and non-aggressive.
      Based on my personal experiences as a child, where I encountered attacks by a cat and three dogs, I am deeply committed to breeding
      kittens with exceptional friendliness and zero aggression. 
    </p>
    <div className='aboutUs__card2'>
      <img className='aboutUs__card2__img' src="/homepage2/Cert002.jpg" alt="cert2 pic" style={{maxHeight : '740px', width: 'auto'}} />
    </div>
    <p> 
      Choosing the right parents plays a crucial role in ensuring our kittens grow up to be well-behaved and friendly. By carefully
      selecting parents with non-aggressive and friendly personalities, I establish a strong foundation for creating kittens who 
      naturally inherit these desirable traits. Breeding cats must exhibit no signs of aggression, as it is through their lineage that
      our kittens inherit their gentle and friendly nature. At Planet Scottish Fold Cattery, honesty is our foundation. We value the
      power of natural products and trust our clients to be responsible cat owners. Our focus is on nurturing the perfect personalities
      of our kittens, with health being our primary concern. 
    </p>
    <div className='aboutUs__card2'>
      <img className='aboutUs__card2__img' src="/homepage2/fiveStarFrontPage.jpg" alt="cert1 pic" style={{maxHeight : '540px', width: 'auto'}} />
    </div>
    <p>
      As a proud TICA registered breeder, I have completed a breeding course, expanding my knowledge and expertise in the field. I take
      pride in upholding TICA's code of ethics, which ensures the highest standards of care and professionalism in our cattery. Client
      satisfaction is paramount to us. We treasure the positive feedback we receive from our clients and maintain long-term connections, 
      providing lifetime breeder support. Your happiness and the well-being of our kittens are always our top priorities. I genuinely 
      care about the well-being of our clients and their furry companions. As a knowledgeable and approachable breeder, I take pride in
      offering guidance and support whenever needed. Building lasting relationships with our clients brings us immense joy, as we witness
      the growth and happiness of the kittens we have raised. Thank you for visiting Planet Scottish Fold Cattery and taking the time 
      to read our story! We invite you to explore our website and discover the joy that our cats and kittens bring. Feel free to reach out
      to us through any social media platform or schedule a FaceTime call to find your perfect soulmate. We look forward to embarking on this
      exciting journey with you!
    </p>
    <h5>The Breed</h5>
    <p>
      Scottish folds are known to be suuupperr affectionate and get along with other pets and small children.
      This breed does not fit the standard cat stereotype! They don’t want to be left alone in their lair, instead, they’ll want to sit on your lap, lie under your arm or on your pillow as close to your face
      If you get them a sibling you’ll enjoy watching them jump around and groom each other, but they wont forget about you! You’ll simply get double affection and love.
    </p>
    <div className='aboutUs__card2'>
      <img className='aboutUs__card2__img' src="/homepage2/breedCharacteristics.jpg" alt="characteristics" style={{maxHeight : '540px', width: 'auto'}} />
    </div>
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
    <WhatsIncluded />
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
