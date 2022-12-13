import React, {useState, useEffect, useContext} from 'react'
import ErrorFill from './ErrorFill'
import { Link, useParams, useLocation } from 'react-router-dom'
import My404 from './My404'
import MeContext from '../MeContextPro'
import { isPrivileged } from '../../myModelsConfig'
import { fetchEffect } from './axiosHandlers/fetchEffect'
import MyCarousel from './carousel/MyCarousel.js'

//  /kittenDetailed
const KittenDetailedView = () => {
  const location = useLocation()
  const {type} =useContext(MeContext)
  const {id} = useParams()

  const fromEdit = location.state?.fromEdit
  const [kitten, setKitten] = useState(location.state?.kitten ?? null)
  const [albumPaths, setAlbumPaths] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    if(!kitten && id) {
      fetchEffect(
        [setKitten, setError],
        'get',
        `/api/kittens?id=${id}`)
    }
    if(id) {
      fetchEffect(
        [setAlbumPaths, setError],
        'get',
        `/api/albums?id=${id}&type=${`kitten`}`
      )
    }
  }, [])

  // useEffect(() => {
  //   if(albumPaths) console.log(`paths for ${kitten?.name}:: `, albumPaths)
  //   console.log('main image src:: ', kitten?.mainImageSrcValue)
  // },[albumPaths])

  return (
    <div key={id}>
      {error && <ErrorFill msg={error} />}

      {!error && kitten &&
         <div className='detailed-view-wrapper'>

          {/* <img src={kitten.mainImageSrcValue} /> */}

          {
            <>
              <MyCarousel
                data={albumPaths}
                placeHolderImagePath = '/otherPictures/photoComingSoon.png'
              />
            </>
          }
          <div className='detailedView-text-wrapper'>
            <div className='detailedView-text'>
              <p>{kitten.name}</p>
              <p>Status: {kitten.status}</p>
              <p>Location: {kitten.location}</p>
              <p>Price: ${kitten.price}</p>
              <br />
              <p>{kitten.breed}</p>
              <p>Gender: {kitten.gender}</p>
              <p>Ears: {kitten.ears}</p>
              <p>Fur color: {kitten.furColor}</p>
              <p>Eye color: {kitten.eyeColor}</p>
              <p>{kitten.dob ? ('Date of Birth: ' + kitten.dob) : ''}</p>
              <p>{kitten.mother ? ('Dam: ' + kitten.mother) : ''}</p>
              <p>{kitten.father ? ('Sire: ' + kitten.father) : ''}</p>
              <p>{kitten.regNum ? ('Registration Number: ' + kitten.regNum) : ''}</p>
              <p>{kitten.description ?  ('Description: ' + kitten.description) : ''}</p>
            </div>
          </div>
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
