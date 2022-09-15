import React, {useState} from 'react'

const MessageBox = ({messageArray, options={}}) => {

  const [showBox, setShowBox] = useState(true)

  const handleClick = () => {
    if (options.closeOnClick) {
      setShowBox(prev => !prev)
    }
  }

  return (
    <>
      {showBox &&
        <div className='messagebox-wrapper'>
          <div className='messagebox-buttons'>
            <button onClick={handleClick} className='messagebox-button-close buttonStyle5'>
              X
            </button>
          </div>
          <div className='messagebox-message'>
            {messageArray.map((msg, idx) => (
              <p key={msg+idx}>{msg}</p>
            ))}
          </div>
        </div>
      }
      {!showBox &&
        <div onClick={handleClick} className='messagebox-closed'>
          {options.onCloseText}
        </div>
      }
    </>
  )
}

export default MessageBox
