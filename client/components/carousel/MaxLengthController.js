import React, { useState } from 'react'

const MaxLengthController = ({maxLength, setMaxLength}) => {
  const [showController, setShowController] = useState(true)

  return (
    <div
      style={{
        margin: '2rem',
        display: (showController ? 'flex' : 'none'),
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <div>
        {maxLength}
      </div>
      <div>
        <button type="button" onClick={() => {
          setMaxLength(maxLength => Math.max(maxLength - 1, 0))
        }} >
          -1
        </button>
        <button type="button" onClick={() => {
          setMaxLength(maxLength => Math.max(maxLength + 1, 0))
        }}>
          +1
        </button>
      </div>
    </div>
  )
}

export default MaxLengthController
