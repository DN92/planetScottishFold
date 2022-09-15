import React, { useState, useEffect, useMemo, useReducer }from 'react'
import SingleKitten from './SingleKitten'
import ErrorFill from './ErrorFill'
import { fetchEffect } from './axiosHandlers/fetchEffect'
import KittenFilter from './KittensFilter'

//  /available Kittens
const AvailableKittens = () => {

  const getWeight = (obj, filterer) => {
    let score = 0;
    for( const key in filterer) {
      if (filterer[key] === 'No Preference' || filterer[key] === '') continue;
      if(filterer[key]?.selection === obj[key]) score += filterer[key].weight
    }
    return score || 0
  }

  const [error, setError] = useState(null)
  const [kittens, setKittens] = useState([]);
  const [availableAdults, setAvailableAdults] = useState([])
  const [initAvailKittens, setInitAvailKittens] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [filterState, dispatchFilterState] = useReducer((state, action) => {
    switch (action.type) {
      case 'set':
        return {...state, [action.field]: {
          ...state[action.field],
          selection: action.value
        }
      };
      default:
        return {...state}
      }},
      {
        gender: {
          selection: 'No Preference',
          weight: 0.8,
        },
      ears: {
        selection: 'No Preference',
        weight: 1.1
      },
      eyeColor: {
        selection: 'No Preference',
        weight: 1.2
      },
    }
    )

  const shownAdults = useMemo(() => {
    return availableAdults.filter(adult => adult.isHidden === false)
  }, [availableAdults])
  const unavailableKittens = useMemo(() => {
    return kittens.filter(kitten => kitten.status !== "Available" )
      .sort((a, b) => Number(b.price) - Number(a.price) )
  },[kittens]);

  const [availableKittens, dispatchAvailableKittens] = useReducer((state, action) => {
    switch(action.type) {
      case 'init':
        return  kittens.filter(kitten => kitten.status === "Available")
          .sort((a, b) => {
            if(b.mother < a.mother) {
              return 1
            } else {
              return -1
            }
        })
      case 'applyFilter': {
        const weightedArr = [...state].map(kitten => ([kitten, getWeight(kitten, filterState)]))
        weightedArr.sort((a, b) => (b[1] - a[1]))
        return weightedArr.map(kitten => kitten[0]);
      }
      default:
        return [...state]
    }
  }, [])

  const handleShowSearch = () => {
    setShowSearch(prev => !prev)
  }

  const handleFilterBySearch = () => {
    dispatchAvailableKittens({type: 'applyFilter'})
  }

  useEffect(() => {
    fetchEffect(
      [setKittens, setError],
      'get',
      `/api/kittens`,
    );
    fetchEffect(
      [setAvailableAdults, setError],
      `get`,
      `/api/catAsKitten`
    );
    setInitAvailKittens(true)
  }, [])

  useEffect(() => {
    if(initAvailKittens && kittens.length) {
      setInitAvailKittens(false)
      dispatchAvailableKittens({type: 'init'})
    }
  }, [initAvailKittens, kittens])

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
            >{showSearch ? 'Hide' : 'Sort By'}</button>
          </div>
          {showSearch && <KittenFilter searcher={handleFilterBySearch} filterState={filterState} dispatch={dispatchFilterState} />}
          <div className='kittensWrapper'>
            {availableKittens.map((kitten) => (
              <SingleKitten key={kitten.id} kitten={kitten} />
            ))}
          </div>
          <hr /><br />
          <h4>Available Adults</h4>
          <div className='kittensWrapper'>
            {shownAdults.map((cat) => (
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
