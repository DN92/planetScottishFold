import React, { useState, useEffect, useMemo }from 'react'
import SingleKitten from './SingleKitten'
import ErrorFill from './ErrorFill'
import { fetchEffect } from './axiosHandlers/fetchEffect'
import KittenFilter from './KittensFilter'
import {getObjMatches } from '../../myUtilFuncs'

//  /available Kittens
const AvailableKittens = () => {

  const [kittens, setKittens] = useState([])
  const availableKittens = useMemo(()=>{
    return kittens.filter(kitten => kitten.status === "Available")
  },[kittens])
  const unavailableKittens = useMemo(() => {
    return kittens.filter(kitten => kitten.status !== "Available" )
  },[kittens])
  const [availableAdults, setAvailableAdults] = useState([])
  const [error, setError] = useState(null)
  const [showSearch, setShowSearch] = useState(false)
  /* filterState is the culmination of user search preferences and the setter is passed
    down to KittensFilter.js */
  const [filterState, setFilterState] = useState({
    gender: 'No Pref',
    ears: 'No Pref',
    eyeColor: 'No Pref',
    furColor: 'No Pref',
  })

  const handleShowSearch = () => {
    setShowSearch(prev => !prev)
  }

  //  the filter(SORTER) will reorganize the items(kittens) array by weighted value,
  //    it will not lessen the number of visible kittens. This is a sorter.
  const handleFilterBySearch = () => {
    //  delete keys with values of 'No Preference' or empty strings
    const keysToDestroy = Object.entries(filterState)
      .filter(entry => (entry[1] === 'No Preference' || entry[1] === ''))
      .map(entry => (entry[0]))
    // Avoid mutating filterState by making a copy.
    const filterer = {...filterState}
    keysToDestroy.forEach(key => {
      delete filterer[key]
    })
    // set state to resulting sorting array
    const weightedArr = kittens.map(kitten => ([kitten, getObjMatches(kitten, filterer)]))
      .sort((a, b) => ( b[1] - a[1]))
    setKittens(weightedArr.map(kitten => kitten[0]))
    // items should now be sorted by user preferences. All user options are currently weighted equally. (1x)
  }

  useEffect(() => {
    fetchEffect(
      [setKittens, setError],
      'get',
      `/api/kittens`,
    )
  }, [])

  useEffect(() => {
    fetchEffect(
      [setAvailableAdults, setError],
      `get`,
      `/api/catAsKitten`
    )
  }, [])

  return (
    <div className='kittens'>
      <h2>Our Available Kittens</h2>

      {error && <ErrorFill msg={error} />}
      {!error &&
        <>
          <div className='adv-search-wrapper'>
            <button id='adv-search-checkbox' className='adv-search-button buttonStyle2'
              type="button"
              onClick={handleShowSearch}
            >{showSearch ? 'Hide' : 'Show'} Advanced Search</button>
          </div>
          {showSearch && <KittenFilter searcher={handleFilterBySearch} filterState={filterState} setter={setFilterState} />}
          <div className='kittensWrapper'>
            {availableKittens.map((kitten) => (
              <SingleKitten key={kitten.id} kitten={kitten} />
            ))}
          </div>
          <hr /><br />
          <h4>Available Adults</h4>
          <div className='kittensWrapper'>
            {availableAdults.map((cat) => (
              <SingleKitten key={cat.id} kitten={cat} />
            ))}
          </div>
          <hr /><br />
          <h4>Reserved and Sold</h4>
          <div className='kittensWrapper kittens-sold'>
            {unavailableKittens.map((kitten) => (
                <SingleKitten key={kitten.id} kitten={kitten} />
              ))}
          </div>
        </>
      }
    </div>
  )
}


export default AvailableKittens
