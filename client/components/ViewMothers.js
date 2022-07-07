import React, { useState, useEffect, useContext }from 'react'
import MotherSingleView from './MotherSingleView'
import LoadingFill from './LoadingFill'
import ErrorFill from './ErrorFill'
import axios from 'axios'
import history from '../history'

const ViewMothers = () => {
  const MOTHERorFATHER = history.location.state
    ? history.location.state.parent
    : 'mother'

  const [cats, setCats] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [fetchError, setFetchError] = useState(null)

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const {data} = await axios.get(`/api/${MOTHERorFATHER}s`)
        if(!data) {
          throw Error('Did not receive expected data from fetch')
        }
        setCats(data)
        setFetchError(null)
      } catch (err) {
        setFetchError(err.message)
        console.log(fetchError)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCats()
    // setTimeout(async() => {
    // }, (2000));

  }, [])


  return (
    <>
      {isLoading && <LoadingFill />}
      {fetchError && <ErrorFill />}
      {!isLoading && !fetchError &&
        <>
        <h2>Our {MOTHERorFATHER == 'mother' ? 'Dams' : 'Sires'}</h2>
          {cats.map((cat) => (
            <MotherSingleView key={cat.id} cat={cat} parent={MOTHERorFATHER} />
          ))}
        </>
      }
    </>
  )
}

export default ViewMothers
