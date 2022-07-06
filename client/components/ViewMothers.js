import React, { useState, useEffect, useContext }from 'react'
import SingleKitten from './SingleKitten'
import LoadingFill from './LoadingFill'
import axios from 'axios'

const ViewMothers = () => {

  const [mothers, setMothers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [fetchError, setFetchError] = useState(null)

  useEffect(() => {
    const fetchKittens = async () => {
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

    fetchKittens()
    // setTimeout(async() => {
    // }, (2000));

  }, [])


  return (
    <>
      {isLoading && <LoadingFill />}
      {!isLoading &&
        <>
          {mothers.map((mother) => (
            <SingleKitten key={mother.id} mother={mother} />
          ))}
        </>
      }
    </>
  )
}

export default ViewMothers
