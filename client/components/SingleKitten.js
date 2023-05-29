import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import MeContext from '../MeContextPro'
import { isPrivileged, globalPriceModifier } from '../../myModelsConfig'


//  props from AvailableKitten || AdminAllView
const SingleKitten = (props) => {

  const {type} = useContext(MeContext)
  const {kitten} = props

  const {
    name,
    breed,
    gender,
    furColor,
    eyeColor,
    mother,
    father,
    mainImageSrcValue,
    id,
    status,
  } = kitten
  const image = mainImageSrcValue ? mainImageSrcValue : "/catPictures/catError3.gif"
  const model = kitten?.isAdultCat ? 'catAsKitten' : 'kittens'

  return (
    <div className={kitten?.status === 'Available' ? 'singleKitten' : 'singleKitten kitten-sold'}>
      <div className='singleKitten__card'>
        <img className='singleKitten__card__img' src={image} alt="kitten picture "
        kitten={kitten}
        />
      </div>
      <div className='singleKittenInfo'>
        <>
          {kitten?.status === "Available" ?
            <>
              <p>Hi I'm {name}</p>
              <p>I am a {breed} {gender}</p>
              <p>My color is </p>
              <p>{furColor}</p>
              <p>I have {eyeColor} eyes</p>
              <p>${(Math.floor(parseInt(kitten.price) * globalPriceModifier ))}</p>
              {isPrivileged(type) &&
                <>
                  <p>Mother: {mother}</p>
                  <p>Father: {father}</p>
                  <p>Status: {status}</p>
                </>
              }
            </>
            :
            <>
              <p>{name}</p>
              <p>{kitten.status}</p>
              <p>${(Math.floor(parseInt(kitten.price) * 1.2 ))}</p>
            </>
          }
        </>
      </div>
      <div className='singleKitten__button'>
        <Link
        to={isPrivileged(type) ? '/editKitten' : `/kittenDetailed/${model}/${id}`}
        state={{kitten: kitten}}
        >
          <button className='btnS1'>{isPrivileged(type) ? 'Edit' : 'Price + Details'}</button>
        </Link>
      </div>
    </div>
  )
}

export default SingleKitten
