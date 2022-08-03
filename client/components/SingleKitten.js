import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import MeContext from '../MeContextPro'
import { isPrivileged } from '../../myModelsConfig'


//  props from AvailableKitten || AdminAllView
const SingleKitten = (props) => {

  const {type} = useContext(MeContext)
  const {kitten} = props

  const {
    name,
    breed,
    gender,
    ears,
    furColor,
    eyeColor,
    mother,
    father,
    price,
    location,
    description,
    status,
    mainImageSrcValue,
    id,
    isAvailable,
  } = kitten

  const image = mainImageSrcValue ? mainImageSrcValue : "/catPictures/catError3.gif"

  return (
    <div className='singleKitten'>
      <div className='singleKitten__card'>
        <img className='singleKitten__card__img' src={image} alt="kitten picture "
        kitten={kitten}
        />
      </div>
      <div className='singleKittenInfo'>
        <p>Hi I'm {name}</p>
        <p>I am a {breed} {gender}</p>
        <p>My color is </p>
        <p>{furColor}</p>
        <p>I have {eyeColor} eyes</p>
        {isPrivileged(type) &&
          <>
            <p>Mother: {mother}</p>
            <p>Father: {father}</p>
            <p>Status: {isAvailable}</p>
            <p>Availability: {isAvailable ? 'Available' : 'Reserved'}</p>
          </>
        }
      </div>
      <div className='singleKitten__button'>
        <Link
        to={isPrivileged(type) ? '/editKitten' : `/kittenDetailed/${id}`}
        state={{kitten: kitten}}
        >
          <button className='btnS1'>{isPrivileged(type) ? 'Edit' : 'View More'}</button>
        </Link>
      </div>
    </div>
  )
}

export default SingleKitten
