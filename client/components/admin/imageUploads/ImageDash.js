import React, { useState, useEffect, useMemo} from 'react'
import { fetchEffect } from '../../axiosHandlers/fetchEffect'
import PhotoAlbum from './PhotoAlbum'
import UploadPane from './UploadPane'
import { useLocation } from 'react-router-dom'

const types = ['none', 'kitten', 'sire', 'dam']

const imageDash = () => {

  const location = useLocation()
  const importedState = location?.state ?? null
  const [kittens, setKittens] = useState([])
  const [dams, setDams] = useState([])
  const [sires, setSires] = useState([])
  const [error, setError] = useState('')
  const [selectedType, setSelectedType] = useState(importedState?.class ?? 'none')
  const [selectedKitten, setSelectedKitten] = useState(null)
  const [selectedDam, setSelectedDam] = useState(null)
  const [selectedSire, setSelectedSire] = useState(null)
  const [fileChangeOccurred, setFileChangeOccurred] = useState(false)
  const [viewAlbum, setViewAlbum] = useState(true)
  const [viewUploadPane, setViewUploadPain] = useState(true)
  const prime = useMemo(() => {
    return (()=>{
      switch(selectedType) {
        case 'none':
          return null
        case 'kitten':
          return selectedKitten;
        case 'dam':
          return selectedDam;
        case 'sire':
          return selectedSire;
        default:
          return null
      }
    })()
  }, [selectedDam, selectedKitten, selectedSire, selectedType])

  function validateSetType (event) {
    const selection = event.target.value
    if (types.includes(selection.toLowerCase())) {
      setSelectedType(selection)
    } else {
      console.warn('invalid selection:: ', selection)
    }
  }

  useEffect(() => {
    fetchEffect(
      [setDams, setError],
      'get',
      `/api/mothers`,
    )

    fetchEffect(
      [setSires, setError],
      'get',
      `/api/fathers`,
    )

    fetchEffect(
      [setKittens, setError],
      'get',
      `/api/kittens`,
    )

    if(importedState) {
      switch(importedState.class) {
        case 'kitten': {
          setSelectedKitten(importedState.kittenToEdit)
          return
        }
        case 'dam': {
          setSelectedDam(importedState.catToEdit)
          return
        }case 'sire': {
          setSelectedSire(importedState.catToEdit)
          return
        }
        default: return
      }
    }
  }, [])

  return (
    <div>
      <h2>IMAGE DASHBOARD</h2>

      <label htmlFor="image-dash-type-selector">Select Cat Category</label>
      <select
        id='image-dash-type-selector'
        name="typeSelector"
        value={selectedType}
        onChange={e => {validateSetType(e)}}
      >
        {types.map((type, idx) => (
          <option key={idx+'typeSelector'} value={type}>{type}</option>
        ))}
      </select>

      {(() => {
        switch (selectedType) {
          case 'none':
            return null
          case 'kitten':
            return (
              <select
                value={selectedKitten?.name ?? ''}
                onChange={(e) => {setSelectedKitten(kittens[e.target.selectedOptions[0].getAttribute('number')] || null)}}
              >
                <option
                  value={''}
                  number={null}
                  >
                    {''}
                </option>
                { kittens.map((pet, idx) =>(
                  <option
                    key={pet.name + idx}
                    value={pet.name}
                    number={idx}
                    >
                      {pet.name}
                    </option>
                ) )}
              </select>
            )
          case 'sire':
            return (
              <select
                onChange={(e) => {setSelectedSire(sires[e.target.selectedOptions[0].getAttribute('number')] || null)}}
              >
                <option
                  value={''}
                  number={null}
                >
                  {''}
                </option>
                { sires.map((pet, idx) =>(
                  <option
                    key={pet.name + idx}
                    value={pet.name}
                    number={index}
                    >
                      {pet.name}
                    </option>
                ) )}
              </select>
            )
          case 'dam':
            return (
              <select
                onChange={(e) => {setSelectedDam(dams[e.target.selectedOptions[0].getAttribute('number')] || null)}}
              >
                <option
                  value={''}
                  number={null}
                >
                  {''}
                </option>
                { dams.map((pet, idx) =>(
                  <option
                    key={pet.name + idx}
                    value={pet.name}
                    number={index}
                  >
                    {pet.name}
                  </option>
                ) )}
              </select>
            )
          default:
            return null
        }
      })()}

      {viewUploadPane &&
      <UploadPane
        prime={prime}
        category={selectedType}
        setFileChangeOccurred={setFileChangeOccurred}/
      >
      }

      <div>
        <h3>Main Image for {prime?.name} </h3>
        {prime &&
        <img
          src={prime.mainImageSrcValue}
          alt="main image for selected cat"
          style={{
            width: '400px',
            height: '400px',
          }}
        />
        }
      </div>
      <hr />
      <nav className='imageDashOptions'>
        <button onClick={() => setViewAlbum(prev => !prev)}>{viewAlbum ? 'hide' : 'view'} album</button>
        <button onClick={() => setViewUploadPain(prev => !prev)}>{viewUploadPane ? 'Hide' : 'View'} Upload Panel</button>
      </nav>

      {viewAlbum &&
      <PhotoAlbum
        type={selectedType}
        cat={prime}
        fileChangeOccurred={fileChangeOccurred}
        setFileChangeOccurred={setFileChangeOccurred}
      />
      }

    </div>
  )
}

export default imageDash
