import React, { useState, useEffect, useContext }from 'react'
import MotherSingleView from './MotherSingleView'
import LoadingFill from './LoadingFill'
import axios from 'axios'

const ViewMothers = () => {

  const [mothers, setMothers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [fetchError, setFetchError] = useState(null)

  useEffect(() => {
    const fetchMothers = async () => {
      try {
        const {data} = await axios.get('/api/mothers')
        if(!data) {
          throw Error('Did not receive expected data from fetchKittens')
        }
        setMothers(data)
        setFetchError(null)
      } catch (err) {
        setFetchError(err.message)
        console.log(fetchError)
      } finally {
        setIsLoading(false)
      }
    }

    fetchMothers()
    // setTimeout(async() => {
    // }, (2000));

  }, [])


  return (
    <>
      {isLoading && <LoadingFill />}
      {!isLoading &&
        <>
          {mothers.map((mother) => (
            <MotherSingleView key={mother.id} mother={mother} />
          ))}
        </>
      }
    </>
  )
}

export default ViewMothers
