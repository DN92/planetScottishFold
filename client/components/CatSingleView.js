import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import MeContext from '../MeContextPro'
import { isPrivileged } from '../../secrets'

//  props from AvailableMother || AdminMothersView

const CatSingleView = (props) => {

  if(!props.parent) {
    props.parent = 'mother'
  }

  const {type} = useContext(MeContext)
  const {cat} = props || {}

  const {name, ears, furColor, eyeColor, dob, mainImageSrcValue} = cat

  return (
    <div>
      <Link
        to={isPrivileged(type) ? `/editCat/${props.parent}/${cat.id}` : `/catDetailedView/${props.parent}/${cat.id}`}
        state={{cat: cat}} >
        <img src={mainImageSrcValue} alt={`${props.parent.name}'s picture `} className="image" />
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
      <Link
        to={isPrivileged(type) ? `/editCat/${props.parent}/${cat.id}` : `/catDetailedView/${props.parent}/${cat.id}`}
        state={{cat: cat}}
        >
        <button>View More</button>
      </Link> <br />
      <hr />
    </div>
  )
}

export default CatSingleView
