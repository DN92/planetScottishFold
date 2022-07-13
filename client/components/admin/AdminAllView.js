import React, { useState, useEffect }from 'react'
import SingleKitten from '../SingleKitten'

//  /adminAllView
const AdminAllView = () => {

  const [kittens, setKittens] = useState([])
  const [fetchError, setFetchError] = useState('')

  useEffect(() => {
    fetchEffect(
      [setKittens, setFetchError],
      'get',
      `/api/kittens`,
      )
  }, [])

  return (
    <>
      {fetchError && <ErrorFill msg={fetchError} />}
      {!fetchError && kittens.map((kitten, index)=>(
         <SingleKitten key={index} kitten={kitten} forAdmin={true} />
      ))}
    </>
  )
}

export default AdminAllView
