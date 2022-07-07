import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import MeContext from '../MeContextPro'
import { isPrivileged } from '../../secrets'

//  props from AvailableMother || AdminMothersView

const MotherSingleView = (props) => {

  if(!props.parent) {
    props.parent = 'mother'
  }

  const {type} = useContext(MeContext)
  const {cat} = props || {}

  const {name, serialNumber, ears, furColor, eyeColor, dob, status, mainImageSrcValue} = cat

  return (
    <div>
      <Link
        to={isPrivileged(type) ? `/edit${props.parent}` : `/${props.parent}DetailedView`}
        state={{cat: cat, parent: props.parent}} >
        <img src={mainImageSrcValue} alt={`${props.parent}'s picture `} className="image" />
      </Link> <br />
      <span>{name}</span> <br />
      <span>{ears}</span> <br />
      <span>Eye Color: {eyeColor}</span> <br />
      <span>Fur Color: {furColor}</span> <br />
      {isPrivileged(type) &&
        <>
          <span>Date of Birth: {dob}</span> <br />
        </>
      }
      <hr />
    </div>
  )
}

export default MotherSingleView
