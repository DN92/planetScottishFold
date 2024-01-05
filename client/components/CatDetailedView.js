import React, {useState, useEffect, useContext} from 'react'
import ErrorFill from './ErrorFill'
import { Link, useParams, useLocation } from 'react-router-dom'
import My404 from './My404'
import MeContext from '../MeContextPro'
import { isPrivileged } from '../../myModelsConfig'
import { fetchEffect } from './axiosHandlers/fetchEffect'
import MyCarousel from './carousel/MyCarousel.js'

//  /catDetailed
const CatDetailedView = () => {
  const location = useLocation()
  const {type} =useContext(MeContext)
  const {MOTHERorFATHER, id} = useParams()
  const [cat, setCat] = useState(location.state?.cat ?? null)
  const [albumPaths, setAlbumPaths] = useState([])
  const [kittensImages, setKittensImages] = useState([])
  const [error, setError] = useState(location.state?.error ?? null)

  useEffect(() => {
    id && fetchEffect(
      [setCat, setError],
      'get',
      `/api/${MOTHERorFATHER}s?id=${id}`
    )
  }, [id, MOTHERorFATHER])

  useEffect(() => {
    MOTHERorFATHER === 'MOTHER' && cat.name && fetchEffect(
      [kittensImages, setKittensImages],
      'get',
      `/api/fromMother?mother=${cat.name}`
    )
  }, [cat])

  useEffect(() => {
    async function getPaths(id) {
      const response = await fetch(`/api/supabase/urlsByBucket?bucket=${MOTHERorFATHER.toLowerCase()}${id}&withToken=true`)
      const result =  await response.json()
      result && setAlbumPaths(result)
    }

    if(id) {
      getPaths(id)
    }

  }, [])

  return (
    <div key={id.toString() + MOTHERorFATHER}>
      {error && <ErrorFill msg={error} />}
      {!error && cat &&
        <div className='detailed-view-wrapper'>
          <MyCarousel
            data={[cat.mainImageSrcValue, ... albumPaths]}
            placeHolderImagePath = '/otherPictures/photoComingSoon.png'
          />
          <div>
            testing
            {kittensImages.map(kittenImageFile => (
              <img className='kitten-in-gallery' src={kittenImageFile} alt='previous litter' />
            ))}
          </div>
          <div className='detailedView-text-wrapper'>
            <div className='detailedView-text'>
              <p>{cat.name}</p> <br />
              <p>{cat.breed}</p> <br />
              <p> Ears: {cat.ears}</p> <br />
              <p> FurColor: {cat.furColor}</p> <br />
              <p> EyeColor: {cat.eyeColor}</p> <br />
              <p> Date Of Birth: {cat.dob}</p> <br />
              <p>{cat.description ? ("Description: " + cat.description) : ""}</p><br />
            </div>
          </div>
            {isPrivileged(type) &&
              <div className='buttonsWrapper'>
                <Link to={`/createCat/${MOTHERorFATHER}`} >
                  <button className='buttonStyle2'>Upload Another {`${MOTHERorFATHER}`}</button>
                </Link>
                <Link to={`/viewCats/${MOTHERorFATHER}`} >
                <button className='buttonStyle2'>Back to {`${MOTHERorFATHER}s`}</button>
                </Link>
              </div>
            }
        </div>
      }
      {!error && !cat && !id &&
        <>
          <My404 />
        </>
      }
    </ div>
  )
}

export default CatDetailedView
