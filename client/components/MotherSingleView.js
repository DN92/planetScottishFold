import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import MeContext from '../MeContextPro'
import { isPrivileged } from '../../secrets'

//  props from AvailableMother || AdminMothersView

const MotherSingleView = (props) => {

  const {type} = useContext(MeContext)
  const {mother} = props

  const {name, serialNumber, ears, furColor, eyeColor, dob, status, mainImageSrcValue} = mother

  return (
    <div>
      <Link
        to={isPrivileged(type) ? '/editMother' : '/MotherDetailedView'}
        state={{mother: mother}} >
        <img src={mainImageSrcValue} alt="mother picture " className="image" />
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
