import React, {useState, useEffect, useContext} from 'react'
import history from '../history'
import ErrorFill from './ErrorFill'
import { Link, useParams } from 'react-router-dom'
import My404 from './My404'
import MeContext from '../MeContextPro'
import { isPrivileged } from '../../secrets'
import { fetchEffect } from './axiosHandlers/fetchEffect'

//  /kittenDetailed
const KittenDetailedView = () => {
  const {type} =useContext(MeContext)
  const {id} = useParams()

  const fromEdit = history.location.state ? history.location.state.fromEdit : null
  const [kitten, setKitten] = useState(history.location.state
    ? history.location.state.kitten : null)
  const [error, setError] = useState(history.location.state
    ? history.location.state.error : '')

    //  if we don't have a kitten from history, fetch one by id.
    //  no params and no history should result in a local 404
  useEffect(() => {
    !kitten && id && fetchEffect(
      [setKitten, setError],
      'get',
      `/api/kittens?id=${id}`)
  }, [])

  const imgInLine= {
    width: "100%",
    maxWidth: "200px",
    maxHeight: "200px",
    marginLeft: "2%",
  }

  return (
    <div key={id}>
      {error && <ErrorFill msg={error} />}

      {!error && kitten &&
        <div>
          <img src={kitten.mainImageSrcValue} alt="Picture of Kitten" style={imgInLine}/> <br />
          <span> Name: {kitten.name}</span> <br />
          <span> Registration Number: {kitten.regNum}</span> <br />
          <span> Gender: {kitten.gender}</span> <br />
          <span> Ears: {kitten.ears}</span> <br />
          <span> Fur color: {kitten.furColor}</span> <br />
          <span> Eye color: {kitten.eyeColor}</span> <br />
          <span> Dam: {kitten.mother}</span> <br />
          <span> Sire: {kitten.father}</span> <br />
          <span> Status: {kitten.isAvailable}</span> <br />
          <span> Description: {kitten.description}</span> <br />
          <span> Price: ${kitten.price}</span> <br />

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
    </div >
  )
}

export default KittenDetailedView
