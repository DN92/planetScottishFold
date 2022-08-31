import React from 'react'

const AttentionModal = ({setModalOpen}) => {

  return  (
    <div className='overlay' onClick= {() => setModalOpen(false)} >
      <div className='modal'>
        <h1>
          TESTING THE MODAL
        </h1>
      </div>
    </div>
  )
}

export default AttentionModal
