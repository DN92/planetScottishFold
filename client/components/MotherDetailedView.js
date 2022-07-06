import React, {useContext} from 'react'
import history from '../history'
import ErrorFill from './ErrorFill'
import { Link } from 'react-router-dom'
import My404 from './My404'
import MeContext from '../MeContextPro'
import { isPrivileged } from '../../secrets'

//  /kittenDetailed
const MotherDetailedView = () => {
  const {type} =useContext(MeContext)

  let mother = null
  let error = null
  let fromEdit =false

  console.log('from Mother Detailed history ',history.location.state)

  if(history.location.state) {
    mother = history.location.state.kitten
    error = history.location.state.error
    fromEdit = history.location.state.fromEdit
  }

  const imgInLine= {
    width: "100%",
    maxWidth: "200px",
    maxHeight: "200px",
    marginLeft: "2%",
  }

  return (
    <>
      {error && <ErrorFill msg={error} />}

      {!error && mother &&
        <div>
          <div>
            <img src={mother.mainImageSrcValue} alt="Picture of Dam" style={imgInLine}/> <br />
            <span> name: {mother.name}</span> <br />
            <span> serial number: {mother.serialNumber}</span> <br />
            <span> ears: {mother.ears}</span> <br />
            <span> furColor: {mother.furColor}</span> <br />
            <span> eyeColor: {mother.eyeColor}</span> <br />
            <span> Date Of Birth: {mother.dob}</span> <br />

          </div>
          {isPrivileged(type) && !fromEdit &&
            <Link to='/createMother'>
            <button>Upload Another Kitten</button>
            </Link>
          }
          {isPrivileged(type) && fromEdit &&
            <Link to='/viewMothers'>
            <button>Back to Dams</button>
            </Link>
          }
        </div>
      }

      {!error && !kitten &&
        <My404 />
      }
    </>
  )
}

export default MotherDetailedView
