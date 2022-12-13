import React from 'react'


const MainImageDisplay = ({path, setShowOverlay, containerHeight}) => {

  return (
    <div
      className="main-image-display"
      style={{
        maxHeight:(containerHeight === 'auto' ? 'auto' :  containerHeight),
        minHeight: (containerHeight === 'auto' ? 'auto' :  containerHeight),
        padding: '2rem',
        display: 'flex',
        flex: '1 0 0',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <img
        src={path}
        alt="currently selected image"
        style={{
          objectFit: 'contain',
          width: '100%',
          height: '100%',
          justifySelf: 'center',
          alignSelf: 'center',
          maxWidth: '100%',
          maxHeight: '100%',
        }}
        onClick={(() => {
          setShowOverlay(true)
        })}
      />
    </div>
  )
}

export default MainImageDisplay
