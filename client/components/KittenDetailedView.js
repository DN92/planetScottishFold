import React, {useState, useEffect, useContext} from 'react'
import history from '../history'
import ErrorFill from './ErrorFill'
import { Link } from 'react-router-dom'
import My404 from './My404'
import MeContext from '../MeContextPro'
import { isPrivileged } from '../../secrets'

//  /kittenDetailed
const KittenDetailedView = () => {
  const {type} =useContext(MeContext)

  let kitten = null
  let error = null

  if(history.location.state) {
    kitten = history.location.state.kitten
    error = history.location.state.error
  }

  const imgInLine= {
    width: "100%",
    maxWidth: "200px",
    maxHeight: "200px",
    marginLeft: "2%",
  }

  return (
    <>
      {error && <ErrorFill msg={error} />}

      {!error && kitten &&
        <div>
          <img src={kitten.mainImageSrcValue} alt="Picture of Kitten" style={imgInLine}/>
          <p> kitty: {kitten.name}</p>
          <p> kitty: {kitten.serialNumber}</p>
          <p> kitty: {kitten.gender}</p>
          <p> kitty: {kitten.ears}</p>
          <p> kitty: {kitten.furColor}</p>
          <p> kitty: {kitten.eyeColor}</p>
          <p> kitty: {kitten.mother}</p>
          <p> kitty: {kitten.father}</p>
        </div>
      }
      {isPrivileged(type) &&
        <Link to='/createKitten'>
          <button>Upload Another Kitten</button>
        </Link>
      }
      {!error && !kitten &&
        <My404 />
      }
    </>
  )
}

export default KittenDetailedView
