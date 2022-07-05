import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import MeContext from '../MeContextPro'
import { isPrivileged } from '../../secrets'

//  props from AvailableKitten || AdminAllView
const SingleKitten = (props) => {

  const {type} = useContext(MeContext)
  const {kitten} = props

  const {name, gender, ears, mainImageSrcValue, eyeColor,father, mother, isAvailable, serial, furColor, id} = kitten

  const image = mainImageSrcValue ? mainImageSrcValue : "/catPictures/catError3.gif"

  console.log( 'image', image)

  const imgInLine= {
    width: "100%",
    maxWidth: "200px",
    maxHeight: "200px",
    marginLeft: "2%",
  }

  return (
    <div>
      <Link
        to={isPrivileged(type) ? 'editKitten/' : '/kittenDetailed'}
        state={{kitten: kitten}}>
        <img src={image} alt="image failed to load  "   style={imgInLine} />
      </Link>
      <p>Name: {name}</p>
      <p>{gender}</p>
      <p>{ears}</p>
      {isPrivileged(type) &&
        <>
          <p>Mother: {mother}</p>
          <p>Father: {father}</p>
          <p>Status: {isAvailable}</p>
          <p>Fur Color: {furColor}</p>
          <p>Eye Color: {eyeColor}</p>
          {/* <p>{}</p>  */}
        </>
      }
      <hr />
    </div>
  )
}

export default SingleKitten
