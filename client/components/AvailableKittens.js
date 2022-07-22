import React, { useState, useEffect, useContext }from 'react'
import SingleKitten from './SingleKitten'
import ErrorFill from './ErrorFill'
import { fetchEffect } from './axiosHandlers/fetchEffect'
import KittenFilter from './KittensFilter'
import {getObjMatches} from '../../myUtilFuncs'

//  /available Kittens
const AvailableKittens = () => {

  const [kittens, setKittens] = useState([])
  const [fetchError, setFetchError] = useState(null)

  const [showSearch, setShowSearch] = useState(false)

  const [filterState, setFilterState] = useState({
    gender: 'No Pref',
    ears: 'No Pref',
    eyeColor: 'No Pref',
    furColor: 'No Pref',
    isAvailable: true, // not visible to user, but will help to show available at top of results
  })

  const handleShowSearch = () => {
    setShowSearch(prev => !prev)
  }

  //  the filter will reorganize the available kittens array by weighted value,
  //    it will not lessen the number of viable kittens.
  const handleFilterBySearch = () => {
      const keysToDestroy = Object.entries(filterState)
        .filter(entry => (entry[1] === 'No Pref'))
        .map(entry => (entry[0]))
      const filterer = {...filterState}
      keysToDestroy.forEach(key => {
        delete filterer[key]
      })
      console.log(filterer)
      const weightedArr = kittens.map(kitten => {
        return [kitten, getObjMatches(kitten, filterer)]
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
    <div className='kittens'>
      {fetchError && <ErrorFill msg={fetchError} />}
      {!fetchError &&
      <>
        <input id='advSearchKittens' className='advSearch'
          type="checkbox"
          name='showSearch'
          onChange={handleShowSearch}
          checked={showSearch} />
        <label htmlFor="Advanced Search">Advanced Search</label>
        <div className='availableKittens'>
          {showSearch && <KittenFilter searcher={handleFilterBySearch} filterState={filterState} setter={setFilterState} />}
          {kittens.map((kitten) => (
            <SingleKitten key={kitten.id} kitten={kitten} />
          ))}
        </div>
      </>
      }
    </div>
    )
}


export default AvailableKittens
