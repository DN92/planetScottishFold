import React from 'react'

const WrongPath = ({header}) => {
  return (
    <div>
      <h2>{header}</h2>
      <h3>Perhaps you shouldn't be here from where you came from?</h3>
      <img src="/otherPictures/hackmanMeme.jpeg" alt="" style={{marginLeft: '5%'}} />
    </div>
  )
}

export default WrongPath
