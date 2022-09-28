import React, {useState} from 'react'

const MessageBox = ({messageArray, image, options={}, style={
  width: '40%',
  height: 'auto',
  margin: 'auto',
  border: '4px solid var(--clr-500)'
}}) => {

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
          {image &&  <img src={image.src || ""} alt={image.alt || ""} style={style} />}

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
