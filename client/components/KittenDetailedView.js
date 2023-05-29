import React, {useState, useEffect, useContext} from 'react'
import ErrorFill from './ErrorFill'
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom'
import My404 from './My404'
import MeContext from '../MeContextPro'
import { isPrivileged, globalPriceModifier } from '../../myModelsConfig'
import { fetchEffect } from './axiosHandlers/fetchEffect'
import MyCarousel from './carousel/MyCarousel.js'
import Iframe1 from './Iframe1'

//  /kittenDetailed
const KittenDetailedView = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const {type} =useContext(MeContext)
  const {id} = useParams()

  const fromEdit = location.state?.fromEdit
  const [kitten, setKitten] = useState(location.state?.kitten ?? null)
  const [albumPaths, setAlbumPaths] = useState([])
  const [showVideo, setShowVideo] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    async function getPaths(id) {
      const response = await fetch(`/api/supabase/urlsByBucket?bucket=kitten${id}&withToken=true`)
      const result =  await response.json()
      setAlbumPaths(result)
    }

    if(!kitten && id) {
      fetchEffect(
        [setKitten, setError],
        'get',
        `/api/kittens?id=${id}`
      )
    }

    if(id) {
      getPaths(id)
    }

  }, [])

  return (
    <div >
      {error && <ErrorFill msg={error} />}

      {!error && kitten &&
      <>

        <div className='detailed-view-wrapper'>

        {
          showVideo &&

          <Iframe1 />
        }
          <div className='detailed-view-carousel-and-text-wrapper'>
            <MyCarousel
              data={[kitten.mainImageSrcValue, ...albumPaths]}
              placeHolderImagePath = '/otherPictures/photoComingSoon.png'
            />
            <div className='detailedView-text-wrapper'>
              <div className='detailedView-text'>
                <p>{kitten.name}</p>
                <p>Status: {kitten.status}</p>
                <p>Location: {kitten.location}</p>
                <p>Price: ${(Math.round((parseInt(kitten.price, 10) * globalPriceModifier / 100) * 100 ))}</p>
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
              <nav className='detailed-view-nav'>
                <ul>
                  <li><button className='buttonStyle6' onClick={() => navigate(-1)}>Back</button></li>
                  <li><button className='buttonStyle6' onClick={() => navigate('/waitingListForm')}>Adopt</button></li>
                  <li><button className='buttonStyle6' onClick={() => navigate('/contact')}>Contact Us</button></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </>
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
