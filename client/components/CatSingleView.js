import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import MeContext from '../MeContextPro'
import { isPrivileged } from '../../myModelsConfig'

//  props from AvailableMother || AdminMothersView

const CatSingleView = (props) => {

  if(!props.parent) {
    props.parent = 'mother'
  }

  const {type} = useContext(MeContext)
  const {cat} = props || {}

  const {name, breed, ears, furColor, eyeColor, dob, mainImageSrcValue, id} = cat

  return (
    <div className='singleKitten'>
      <div className='singleKitten__card'>
        <Link
          to={isPrivileged(type) ? `/editCat/${props.parent}/${cat.id}` : `/catDetailedView/${props.parent}/${cat.id}`}
          state={{cat: cat}} >
          <img className='singleKitten__card__img' src={mainImageSrcValue} alt={`${props.parent.name}'s picture `} />
        </Link>
      </div>
      <div className='singleKittenInfo'>
          <p>{name}</p>
          <p>{breed}</p>
        {isPrivileged(type) &&
          <>
            <p>Date of Birth: {dob}</p>
            <p>Ears: {ears}</p>
            <p>Fur Color: {furColor}</p>
            <p>Eye Color: {eyeColor}</p>
          </>
        }
      </div>
      <div className='singleKitten__button'>
        <Link
          to={isPrivileged(type) ? `/editCat/${props.parent}/${id}` : `/catDetailedView/${props.parent}/${id}`}
          state={{cat: cat}}
        >
          <button className='btnS1'>{isPrivileged(type) ? 'Edit Cat' : 'View More'}</button>
        </Link>
      </div>
    </div>
  )
}

export default CatSingleView
