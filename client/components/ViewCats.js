import React, { useState, useEffect }from 'react'
import CatSingleView from './CatSingleView'
import ErrorFill from './ErrorFill'
import { fetchEffect } from './axiosHandlers/fetchEffect'
import { useParams } from 'react-router-dom'

const ViewCats = () => {

  const {MOTHERorFATHER} = useParams()

  const [cats, setCats] = useState([])
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
      {fetchError && <ErrorFill />}
      {!fetchError &&
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
