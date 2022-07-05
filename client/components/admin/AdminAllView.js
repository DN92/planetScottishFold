import React, { useState, useEffect }from 'react'
import SingleKitten from '../SingleKitten'
import LoadingFill from '../LoadingFill'
import axios from 'axios'

//  /adminAllView
const AdminAllView = () => {

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

    setTimeout(async() => {
      await fetchKittens()
    }, (2000));

  }, [])



  return (
    <>
      {isLoading && <LoadingFill />}
      {!isLoading && kittens.map((kitten, index)=>(
         <SingleKitten key={index} kitten={kitten} forAdmin={true} />
      ))}
    </>
  )
}

export default AdminAllView
