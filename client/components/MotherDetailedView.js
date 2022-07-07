import React, {useContext} from 'react'
import history from '../history'
import ErrorFill from './ErrorFill'
import { Link } from 'react-router-dom'
import My404 from './My404'
import MeContext from '../MeContextPro'
import { isPrivileged } from '../../secrets'

//  /motherDetailed
  const MotherDetailedView = () => {
  const {type} =useContext(MeContext)

  const MOTHERorFATHER = history.location.state
  ? history.location.state.parent
  : 'mother'

  const cat = history.location.state? history.location.state.cat : null
  const error = history.location.state? history.location.state.error : null
  const fromEdit = history.location.state? history.location.state.fromEdit : null

  const imgInLine= {
    width: "100%",
    maxWidth: "200px",
    maxHeight: "200px",
    marginLeft: "2%",
  }

  return (
    <>
      {error && <ErrorFill msg={error} />}

      {!error && cat &&
        <div>
          <div>
            <img src={cat.mainImageSrcValue} alt={`Picture of ${MOTHERorFATHER}`} style={imgInLine}/> <br />
            <span> name: {cat.name}</span> <br />
            <span> serial number: {cat.serialNumber}</span> <br />
            <span> ears: {cat.ears}</span> <br />
            <span> furColor: {cat.furColor}</span> <br />
            <span> eyeColor: {cat.eyeColor}</span> <br />
            <span> Date Of Birth: {cat.dob}</span> <br />

          </div>
          {isPrivileged(type) && !fromEdit &&
            <Link to={`/create${MOTHERorFATHER}`} state={{parent: MOTHERorFATHER}}>
            <button>Upload Another {`${MOTHERorFATHER}`}</button>
            </Link>
          }
          {isPrivileged(type) && fromEdit &&
            <Link to={`/view${MOTHERorFATHER}s`} state={{parent: MOTHERorFATHER}}>
            <button>Back to {`${MOTHERorFATHER}`}</button>
            </Link>
          }
        </div>
      }

      {!error && !cat &&
        <My404 />
      }
    </>
  )
}

export default MotherDetailedView
