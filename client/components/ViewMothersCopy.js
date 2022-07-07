import React, { useState, useEffect, useContext }from 'react'
import MotherSingleView from './MotherSingleView'
import LoadingFill from './LoadingFill'
import axios from 'axios'
import history from '../history'

const ViewMothersCopy = () => {

  console.log(history.location.state)
  const momOrDad = history.location.state

  const [cats, setCats] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [fetchError, setFetchError] = useState(null)

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const {data} = await axios.get(`/api/${momOrDad}`)
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
      {!isLoading &&
        <>
          {cats.map((cat) => (
            <MotherSingleView key={cat.id} mother={cat} />
          ))}
        </>
      }
    </>
  )
}

export default ViewMothersCopy
