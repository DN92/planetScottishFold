import React, { useState, useEffect, useMemo, useReducer }from 'react'
import SingleKitten from './SingleKitten'
import ErrorFill from './ErrorFill'
import { fetchEffect } from './axiosHandlers/fetchEffect'
import KittenFilter from './KittensFilter'
import WhatsIncluded from './textComponents/WhatsIncluded'
import { Link } from 'react-router-dom'
import MessageBox from './MessageBox'


//  /available Kittens7/29/24 to Tennessee & Kentucky
const AvailableKittens = () => {

  const messageArray3 = [
      <>
        Upcoming FREE DELIVERIES:
      </>,
      <>
        -dates are approximate!-
      </>,
      <>
        8/28/24 To Newark, NJ
      </>,
      <>
         9/5/24 To Charlotte, NC
      </>,
      <>
       9/6/24 To Salt Lake City, UT
      </>,
      <>
        9/9/24 To Phoenix, AZ
      </>,
      <>
        9/10/24 To Denver, CO
      </>,
      <>
        9/11/24 To Atlanta, GA
      </>,
      <>
        9/12/24 To Orlando, FL
      </>,
      <>
        9/13/24 To New Orleans, LA
      </>,
      <>
        9/14/24 To Last Vegas, NV
      </>,
      <>
      9/17/24 To Boston, MA
      </>,
      <>
      9/18/24 To Dallas, TX
      </>,
      <>
      9/20/24 To Fort Lauderdale, FL
      </>,
      <>
      9/24/24 To Chicago, IL
      </>,
      <>
      9/25/24 To Los Angeles, CA
      </>,
      <>
      9/27/24 To Houston, TX
      </>,
      <>
      9/28/24 To San Francisco, CA
      </>,
      <>
      <Link to='/waitingListForm'> Apply here to reserve your kitten! </Link>
      </>,
  ]

  const messageArray2 = [
    <>
      We are moving! Need to find homes for all our babies.
    </>,
    <>
      Get up to 40% OFF!! <Link to='/waitingListForm'> APPLY </Link>
    </>
  ]

  const messageArray1 = [
    'New kittens will be announced soon!',
    <>
      <Link  to='/catDetailedView/mother/12'> Nova </Link> + <Link to='/catDetailedView/father/2'> Cupid </Link> = Born on 2/25/24
    </>,
    <>
      <Link Link to='/catDetailedView/mother/7'> Ladybug </Link> + <Link to='/catDetailedView/father/2'> Cupid </Link> = Born on 2/26/24
    </>,
    <>
      <Link to='/waitingListForm'>
        Apply here for SMS notifications.
      </Link>
    </>,
  ]

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
  const [showIncluded, setShowWhatsIncluded] = useState(false)
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
    return availableAdults.filter(adult => adult.isHidden === false || adult.isHidden === 'false')
  }, [availableAdults])

  const unavailableKittens = useMemo(() => {
    return kittens.filter(kitten => kitten.status !== "Available" )
      .sort((a, b) => Number(b.price) - Number(a.price))
      .filter(kitten => kitten.price > 1999)
  },[kittens]);

  const [availableKittens, dispatchAvailableKittens] = useReducer((state, action) => {
    switch(action.type) {
      case 'init':
        return  kittens.filter(kitten => kitten.status === "Available")
          .sort((a, b) => {
            if(Number(a.price) < Number(b.price)) {
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

  const handleViewIncluded = () => {
    setShowWhatsIncluded(prev => !prev)
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
      <MessageBox
        messageArray={messageArray2}
        options={{
          closeOnCLick: true,
        }}
      />
      {/* <MessageBox
        messageArray={messageArray3}
        options={{
          closeOnCLick: true,
        }}
      /> */}
      <h2 style={{margin: 'auto'}}>Available Kittens</h2>
      {error && <ErrorFill msg={error} />}
      {!error &&
        <>

        <div className='buttonsWrapper2'>
          <button className='buttonStyle4' onClick={handleViewIncluded}>Whats Included</button>
        </div>
        {showIncluded &&
         <div className='waitingList-info'>
            <WhatsIncluded />
        </div>
        }
          <div>
            <p>For Serious Inquiries, Apply <Link to='/waitingListForm '>HERE</Link></p>
          </div>
          <br />
          <div className='adv-search-wrapper'>
            <button
              id='adv-search-checkbox'
              className='adv-search-button buttonStyle2'
              style={{transform: 'translateX(32px)', borderRadius: '90px'}}
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
          {shownAdults.length > 0 &&
          <>
            <h4>Available Adults</h4>
            <div className='kittensWrapper'>
              {shownAdults.map((cat) => (
                <SingleKitten key={cat.id} kitten={cat} />
              ))}
            </div>
            <hr /><br />
          </>
          }
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
