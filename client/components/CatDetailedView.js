import React, {useState, useEffect, useContext} from 'react'
import ErrorFill from './ErrorFill'
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom'
import My404 from './My404'
import MeContext from '../MeContextPro'
import { isPrivileged } from '../../myModelsConfig'
import { fetchEffect } from './axiosHandlers/fetchEffect'

//  /catDetailed
const CatDetailedView = () => {
  const location = useLocation()
  console.log(location)
  const {type} =useContext(MeContext)
  const {MOTHERorFATHER, id} = useParams()
  const [cat, setCat] = useState(location.state?.cat ?? null)
  const [error, setError] = useState(location.state?.error ?? null)

  useEffect(() => {
    !cat && id && fetchEffect(
      [setCat, setError],
      'get',
      `/api/${MOTHERorFATHER}s?id=${id}`
    )
  }, [])

  return (
    <div key={id.toString() + MOTHERorFATHER}>
      {error && <ErrorFill msg={error} />}
      {!error && cat &&
        <div>
          <div>
            <div className='detailedView-imgWrapper'>
              <img src={cat.mainImageSrcValue} alt="Picture of Selected Cat"/> <br />
            </div>
            <span>{cat.name}</span> <br />
            <span>{cat.breed}</span> <br />
            <span>{cat.regNum ? ("Registration Number: " + cat.regNum) : ""}</span><br />
            <span> Ears: {cat.ears}</span> <br />
            <span> FurColor: {cat.furColor}</span> <br />
            <span> EyeColor: {cat.eyeColor}</span> <br />
            <span> Date Of Birth: {cat.dob}</span> <br />
            <span> Description: {cat.description}</span> <br />
            <span>{cat.description ? ("Description: " + cat.description) : ""}</span><br />
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
