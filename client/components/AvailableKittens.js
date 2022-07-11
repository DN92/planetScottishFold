import React, { useState, useEffect, useContext }from 'react'
import SingleKitten from './SingleKitten'
import LoadingFill from './LoadingFill'
import axios from 'axios'
import KittenFilter from './KittensFilter'
import {getObjMatches} from '../../myUtilFuncs'

//  /available Kittens
const AvailableKittens = () => {

  const [kittens, setKittens] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [fetchError, setFetchError] = useState(null)

  const [showSearch, setShowSearch] = useState(false)

  const [filterState, setFilterState] = useState({
    gender: 'any',
    ears: 'any',
    eyeColor: 'any',
    furColor: 'any',
    availableOnly: false,
  })
  // const filterOptions = ['eyeColor', 'furColor', 'ears', 'gender', 'isAvailable']

  const handleShowSearch = () => {
    setShowSearch(prev => {
      return !prev
    })
  }

  const handleFilterBySearch = () => {
      const weightedArr = kittens.map(kitten => {
        return [kitten, getObjMatches(kitten, filterState)]
      })
      weightedArr.sort((a, b) => {
        return b[1] - a[1]
      })
      weightedArr.map(kitten => kitten[0])
      setKittens(weightedArr.map(kitten => kitten[0]))
  }

  useEffect(() => {
    const fetchKittens = async () => {
      try {
        const {data} = await axios.get('/api/kittens')
        if(!data) {
          throw Error('Did not receive expected data from fetchKittens')
        }
        setKittens(data)
        setFetchError('')
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
          <input type="checkbox" name='showSearch' onChange={handleShowSearch} checked={showSearch} />
          <label htmlFor="Advanced Search">Advanced Search</label>

          {showSearch && <KittenFilter searcher={handleFilterBySearch} filterState={filterState} setter={setFilterState} />}

          {kittens.map((kitten) => (
            <SingleKitten key={kitten.id} kitten={kitten} />
          ))}
        </>
      }
    </>
    )
}


export default AvailableKittens
