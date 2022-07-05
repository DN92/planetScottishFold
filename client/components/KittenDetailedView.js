import React, {useState, useEffect} from 'react'
import history from '../history'
import ErrorFill from './ErrorFill'
import { Link } from 'react-router-dom'
import My404 from './My404'

//  /kittenDetailed
const KittenDetailedView = () => {
  let kitten = null
  let error = null
  let fromCreate = false

  if(history.location.state) {
    kitten = history.location.state.kitten
    error = history.location.state.error
    fromCreate = history.location.state.fromCreate
  }
  // const kitten = history.location.state ?? {name: 'no data'}
  // const [error, setError] = useState(history.location.state.error || null)

  console.log(kitten)

  console.log('this one', history.location)

  return (
    <>
      {error && <ErrorFill msg={error} />}

      {!error && kitten &&
        <div>
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
      {fromCreate &&
        <Link to='/createKitten'>
          <button>Upload Another Kitten</button>
        </Link>
      }
      {!error && !fromCreate && !kitten &&
        <My404 />
      }
    </>
  )
}

export default KittenDetailedView
