import React, {useState, useEffect} from 'react'
import history from '../history'
import ErrorFill from './ErrorFill'
import { Link } from 'react-router-dom'

//  /kittenDetailed
const KittenDetailedView = () => {
  console.log(history.location.state.kitten)

  const kitten = history.location.state.kitten ?? {name: 'no data'}
  const [error, setError] = useState(history.location.state.error || null)


  console.log(history.location.state)

  useEffect(() => {
    return () => {
      setError(null)
    }
  },[])

  return (
    <>
      {error && <ErrorFill msg={error} />}

      {!error &&
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
      {history.location.state.fromCreate &&
      <Link to='/createKitten'>
        <button>Upload Another Kitten</button>
      </Link>
      }
    </>
  )
}

export default KittenDetailedView
