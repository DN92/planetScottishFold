import React from 'react'
import history from '../history'

const KittenDetailedView = () => {
  console.log(history.location.state.kitten)

  const kitten = history.location.state.kitten ?? {name: 'no data'}



  return (
    <div>
      kitty: {kitten.name}
    </div>
  )
}

export default KittenDetailedView
