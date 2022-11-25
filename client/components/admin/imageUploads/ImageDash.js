import React, { useState, useEffect, useMemo} from 'react'
import { fetchEffect } from '../../axiosHandlers/fetchEffect'
import PhotoAlbum from './PhotoAlbum'
import UploadPane from './UploadPane'

const types = ['none', 'kitten', 'sire', 'dam']
const none = []

const imageDash = () => {

  const [kittens, setKittens] = useState([])
  const [dams, setDams] = useState([])
  const [sires, setSires] = useState([])
  const [error, setError] = useState('')

  const [selectedType, setSelectedType] = useState('none')
  const [selectedKitten, setSelectedKitten] = useState(null)
  const [selectedDam, setSelectedDam] = useState(null)
  const [selectedSire, setSelectedSire] = useState(null)

  const [viewAlbum, setViewAlbum] = useState(false)
  const [viewUploadPane, setViewUploadPain] = useState(false)
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
  // useEffect(() => {
  //   if (prime) {

  //     console.log('prime:: ', prime)
  //   }
  // }, [prime])

  // useEffect(() => {
  //   console.log('selected values')
  //   console.log(selectedDam)
  //   console.log(selectedSire)
  //   console.log(selectedKitten)
  // }, [selectedDam, selectedKitten, selectedSire])

  // useEffect(() => {
  //   console.log('kittens:', kittens)
  //   console.log('dams', dams.length)
  //   console.log(sires.length)

  // }, [kittens, dams, sires])

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
  }, [])

  return (
    <div>
      <h2>IMAGE DASH</h2>
      <select
        name="typeSelector"
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
              <select onChange={(e) => {setSelectedKitten(kittens[e.target.value])}}>
                <option value={null}>{''}</option>
                { kittens.map((pet, idx) =>(
                  <option key={pet.name + idx} value={idx}>{pet.name}</option>
                ) )}
              </select>
            )
          case 'sire':
            return (
              <select onChange={(e) => {setSelectedSire(sires[e.target.value])}}>
                <option value={null}>{''}</option>
                { sires.map((pet, idx) =>(
                  <option key={pet.name + idx} value={idx}>{pet.name}</option>
                ) )}
              </select>
            )
          case 'dam':
            return (
              <select onChange={(e) => {setSelectedDam(dams[e.target.value])}}>
                <option value={null}></option>
                { dams.map((pet, idx) =>(
                  <option key={pet.name + idx} value={idx}>{pet.name}</option>
                ) )}
              </select>
            )
          default:
            return null
        }
      })()}

      <div>
        <h3>Main Image for </h3>
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
      <PhotoAlbum type={selectedType} cat={prime} />
      }
      {viewUploadPane &&
      <UploadPane />
      }
    </div>
  )
}

export default imageDash
