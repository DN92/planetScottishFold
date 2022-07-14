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
    <div>
      <Link
        to={isPrivileged(type) ? '/editKitten' : `/kittenDetailed/${id}`}
        state={{kitten: kitten}}
      >
        <img src={image} alt="kitten picture "
        kitten={kitten}
        style={imgInLine}
        />
      </Link> <br />
      <span>{name}</span> <br />
      <span>{breed}</span> <br />
      <span>{gender}</span> <br />
      <span>{ears}</span> <br />
      <span>Fur Color: {furColor}</span> <br />
      <span>Eye Color: {eyeColor}</span> <br />
      {isPrivileged(type) &&
        <>
          <span>Mother: {mother}</span> <br />
          <span>Father: {father}</span> <br />
          <span>Status: {isAvailable}</span> <br />
          <span>Availability: {isAvailable ? 'Available' : 'Reserved'}</span> <br />
        </>
      }
      <Link
        to={isPrivileged(type) ? '/editKitten' : `/kittenDetailed/${id}`}
        state={{kitten: kitten}}
        >
        <button>View More</button>
      </Link> <br />
      <hr />
    </div>
  )
}

export default SingleKitten
