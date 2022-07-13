import React, {useState, useEffect, useContext} from 'react'
import history from '../history'
import ErrorFill from './ErrorFill'
import { Link, useParams } from 'react-router-dom'
import My404 from './My404'
import MeContext from '../MeContextPro'
import { isPrivileged } from '../../secrets'
import { fetchEffect } from './axiosHandlers/fetchEffect'

//  /catDetailed
const CatDetailedView = () => {
  const {type} =useContext(MeContext)

  const {MOTHERorFATHER, id} = useParams()

  const [cat, setCat] = useState(history.location.state ?
    history.location.state.cat :
    null
  )

  console.log('cat', cat)

  const [error, setError] = useState(history.location.state
    ? history.location.state.error
    : ''
  )

  //  if we don't have a Mommy or Daddy from history, fetch one by id.
  //  no params and no history should result in a local 404
  useEffect(() => {
    !cat && id && fetchEffect(
      [setCat, setError],
      'get',
      `/api/${MOTHERorFATHER}s?id=${id}`
    )
  }, [])


  const imgInLine= {
    width: "100%",
    maxWidth: "200px",
    maxHeight: "200px",
    marginLeft: "2%",
  }


  return (
    <div key={id.toString() + MOTHERorFATHER}>
      {error && <ErrorFill msg={error} />}

      {!error && cat &&
        <div>
          <div>
            <img src={cat.mainImageSrcValue} alt={`Picture of ${MOTHERorFATHER}`} style={imgInLine}/> <br />
            <span>{cat.name}</span> <br />
            <span>{cat.breed}</span> <br />
            {cat.regNum &&
              <>
                <span> Registration Number: {cat.regNum}</span>
                <br />
              </>
            }
            <span> Ears: {cat.ears}</span> <br />
            <span> FurColor: {cat.furColor}</span> <br />
            <span> EyeColor: {cat.eyeColor}</span> <br />
            <span> Date Of Birth: {cat.dob}</span> <br />
            <span> Description: {cat.description}</span> <br />

          </div>
          {isPrivileged(type) &&
            <Link to={`/createCat/${MOTHERorFATHER}`} >
              <button>Upload Another {`${MOTHERorFATHER}`}</button>
            </Link>
          }
          {isPrivileged(type) &&
            <Link to={`/viewCats/${MOTHERorFATHER}`} >
              <button>Back to {`${MOTHERorFATHER}s`}</button>
            </Link>
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
