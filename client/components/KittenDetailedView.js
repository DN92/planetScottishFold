import React, {useState, useEffect, useContext} from 'react'
import history from '../history'
import ErrorFill from './ErrorFill'
import { Link, useParams } from 'react-router-dom'
import My404 from './My404'
import MeContext from '../MeContextPro'
import { isPrivileged } from '../../myModelsConfig'
import { fetchEffect } from './axiosHandlers/fetchEffect'

//  /kittenDetailed
const KittenDetailedView = () => {
  const {type} =useContext(MeContext)
  const {id} = useParams()

  const fromEdit = history.location.state?.fromEdit
  const [kitten, setKitten] = useState(history.location.state ?
    history.location.state.kitten :
    null
  )
  const [error, setError] = useState('')

    //  if we don't have a KITTEN from history, fetch one by id.
    //  no params and no history should result in a local 404
  useEffect(() => {
    !kitten && id && fetchEffect(
      [setKitten, setError],
      'get',
      `/api/kittens?id=${id}`)
  }, [])

  console.log("kitten: ",kitten)

  return (
    <div key={id}>
      {error && <ErrorFill msg={error} />}

      {!error && kitten &&
        <div className='detailedView'>
          <div className='detailedView__imgWrapper'>
            <img src={kitten.mainImageSrcValue} alt="Picture of Kitten" />
          </div>
          <p> Status: {kitten.status}</p>
          <p> Location: {kitten.location}</p>
          <p> Price: ${kitten.price}</p>
          <br />
          <p> {kitten.name}</p>
          <p> {kitten.breed}</p>
          <p> Gender: {kitten.gender}</p>
          <p> Ears: {kitten.ears}</p>
          <p> Fur color: {kitten.furColor}</p>
          <p> Eye color: {kitten.eyeColor}</p>
          <p> Dam: {kitten.mother}</p>
          <p> Sire: {kitten.father}</p>
          <p>{kitten.regNum ? ('Registration Number: ' + kitten.regNum) : ''}</p>
          <p>{kitten.description ?  ('Description: ' + kitten.description) : ''}</p>
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
