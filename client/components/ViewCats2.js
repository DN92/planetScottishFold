import React, { useState, useEffect }from 'react'
import CatSingleView from './CatSingleView'
import ErrorFill from './ErrorFill'
import { fetchEffect } from './axiosHandlers/fetchEffect'

const ViewCats = () => {

  const [error, setError] = useState(null)
  const [dams, setDams] = useState([])
  const [sires, setSires] = useState([])


  useEffect(() => {
    fetchEffect(
      [setDams, setError],
      'get',
      `/api/mothers`,
    )

    fetchEffect(
      [setSires, setError],
      'get',
      `/api/fathers`,
    )
  }, [])

  return (
    <>
      <div className='kittens'>
        <h2>Our Dams</h2>
        <div className='kittensWrapper' >
          {error && <ErrorFill />}
          {!error &&
            <>
              {dams.map((cat) => (
                <CatSingleView key={cat.id} cat={cat} parent='mother' />
              ))}
            </>
          }
        </ div>
      </div>
      <div className='kittens'>
        <h2>Our Sires</h2>
        <div className='kittensWrapper' >
          {error && <ErrorFill />}
          {!error &&
            <>
              {sires.map((cat) => (
                <CatSingleView key={cat.id} cat={cat} parent='father' />
              ))}
            </>
          }
        </ div>
      </div>
    </>
  )
}

export default ViewCats
