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
  let fromEdit =false

  console.log('from Kitten Detailed history ',history.location.state)

  if(history.location.state) {
    kitten = history.location.state.kitten
    error = history.location.state.error
    fromEdit = history.location.state.fromEdit
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
          <img src={kitten.mainImageSrcValue} alt="Picture of Kitten" style={imgInLine}/> <br />
          <span> kitty: {kitten.name}</span> <br />
          <span> kitty: {kitten.serialNumber}</span> <br />
          <span> kitty: {kitten.gender}</span> <br />
          <span> kitty: {kitten.ears}</span> <br />
          <span> kitty: {kitten.furColor}</span> <br />
          <span> kitty: {kitten.eyeColor}</span> <br />
          <span> kitty: {kitten.mother}</span> <br />
          <span> kitty: {kitten.father}</span> <br />
          <span> kitty: {kitten.isAvailable}</span> <br />

        </div>
      }
      {isPrivileged(type) && !fromEdit &&
        <Link to='/createKitten'>
          <button>Upload Another Kitten</button>
        </Link>
      }
      {isPrivileged(type) && fromEdit &&
        <Link to='/availableKittens'>
        <button>Back to All Kittens</button>
      </Link>
      }

      {!error && !kitten &&
        <My404 />
      }
    </>
  )
}

export default KittenDetailedView
