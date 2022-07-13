import React, { useState, useEffect, useContext }from 'react'
import SingleKitten from './SingleKitten'
import LoadingFill from './LoadingFill'
import { fetchEffect } from './axiosHandlers/fetchEffect'
import KittenFilter from './KittensFilter'
import {getObjMatches} from '../../myUtilFuncs'

//  /available Kittens
const AvailableKittens = () => {

  const [kittens, setKittens] = useState([])
  const [fetchError, setFetchError] = useState(null)

  const [showSearch, setShowSearch] = useState(false)

  const [filterState, setFilterState] = useState({
    gender: 'any',
    ears: 'any',
    eyeColor: 'any',
    furColor: 'any',
    isAvailable: false,
  })

  const handleShowSearch = () => {
    setShowSearch(prev => !prev)
  }

  //  the filter will reorganize the available kittens array by weighted value,
  //    it will not lessen the number of viable kittens.
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
    fetchEffect(
    [setKittens, setFetchError],
    'get',
    `/api/kittens`,
    )
  }, [])

  return (
    <>
      {
        <div>
          <input type="checkbox"
            name='showSearch'
            onChange={handleShowSearch}
            checked={showSearch} />
          <label htmlFor="Advanced Search">Advanced Search</label>

          {showSearch && <KittenFilter searcher={handleFilterBySearch} filterState={filterState} setter={setFilterState} />}

          {kittens.map((kitten) => (
            <SingleKitten key={kitten.id} kitten={kitten} />
          ))}
        </div>
      }
    </>
    )
}


export default AvailableKittens
