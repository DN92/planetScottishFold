import React, {useContext} from 'react'
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
          <span> Name: {kitten.name}</span> <br />
          <span> Gender: {kitten.gender}</span> <br />
          <span> Ears: {kitten.ears}</span> <br />
          <span> Fur color: {kitten.furColor}</span> <br />
          <span> Eye color: {kitten.eyeColor}</span> <br />
          <span> Dam: {kitten.mother}</span> <br />
          <span> Sire: {kitten.father}</span> <br />
          <span> Status: {kitten.isAvailable}</span> <br />

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
