import React, { useState, useEffect }from 'react'
import CatSingleView from './CatSingleView'
import LoadingFill from './LoadingFill'
import ErrorFill from './ErrorFill'
import { useParams } from 'react-router-dom'

const ViewCats = () => {

  const {MOTHERorFATHER} = useParams()

  const [cats, setCats] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [fetchError, setFetchError] = useState(null)


  useEffect(() => {
    fetchEffect(
      [setCats, setFetchError],
      'get',
      `/api/${MOTHERorFATHER}s`,
    )
  }, [MOTHERorFATHER] )

  return (
    <div >
      {isLoading && <LoadingFill />}
      {fetchError && <ErrorFill />}
      {!isLoading && !fetchError &&
        <>
        <h2>Our {MOTHERorFATHER == 'mother' ? 'Dams' : 'Sires'}</h2>
          {cats.map((cat) => (
            <CatSingleView key={cat.id} cat={cat} parent={MOTHERorFATHER} />
          ))}
        </>
      }
    </ div>
  )
}

export default ViewCats
