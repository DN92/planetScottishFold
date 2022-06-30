import React, { useState, useEffect }from 'react'
import SingleKitten from './SingleKitten'
import axios from 'axios'

const AvailableKittens = () => {

  const [kittens, setKittens] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [fetchError, setFetchError] = useState(null)

  useEffect(() => {
    const fetchKittens = async () => {
      try {
        const {data} = await axios.get('/api/kittens')
        if(!data) {
          throw Error('Did not receive expected data from fetchKittens')
        }
        setKittens(data)
        setFetchError(null)
      } catch (err) {
        setFetchError(err.message)
        console.log(fetchError)
      } finally {
        setIsLoading(false)
      }
    }

    // fetchKittens()

      setTimeout(async() => {
        console.log('waiting')
        await fetchKittens()
      }, (2000));

  }, [])

  return (
    <>
      {isLoading && <h2>LOADING</h2>}
      {!isLoading && kittens.map((kitten, index)=>(
         <SingleKitten key={index} kitten={kitten} />
      ))}
    </>

  )
}

export default AvailableKittens
