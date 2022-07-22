import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import MeContext from '../MeContextPro'
import { isPrivileged } from '../../secrets'


//  props from AvailableKitten || AdminAllView
const SingleKitten = (props) => {

  const {type} = useContext(MeContext)
  const {kitten} = props

  const {name, gender, ears, mainImageSrcValue, eyeColor,father, mother, isAvailable, breed, furColor, id} = kitten

  const image = mainImageSrcValue ? mainImageSrcValue : "/catPictures/catError3.gif"

  const imgInLine= {
    width: "100%",
    maxWidth: "200px",
    maxHeight: "200px",
    marginLeft: "2%",
  }

  return (
    <div className='singleKitten'>
      <div className='singleKitten__card'>
        <img className='singleKitten__card__img' src={image} alt="kitten picture "
        kitten={kitten}
        style={imgInLine}
        />
      </div>
      <div className='singleKittenInfo'>
        <p>{name}</p>
        {breed && <p>{breed}</p> }
        <p>{gender}</p>
        <p>{ears}</p>
        <p>Fur Color: {furColor}</p>
        <p>Eye Color: {eyeColor}</p>
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
          <button className='btnS1'>View More</button>
        </Link>
      </div>
    </div>
  )
}

export default SingleKitten
