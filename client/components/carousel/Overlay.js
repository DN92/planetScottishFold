import React from 'react'
import { Button } from '@mantine/core';

const Overlay = ({path, setShowOverlay, moveLeft, moveRight}) => {

  return (
    <div
      className="overlay-container"
      onClick={(event) => {
        if(event.target.nodeName === 'DIV') {
          setShowOverlay(false)
        }
      }}
      style={{
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,.8)',
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className='overlay-inner'
        onClick={(event) => {
          if(event.target.nodeName === 'IMG') {
            setShowOverlay(false)
          }
        }}
        style={{
          position: 'fixed',
          width: '90%',
          height: '90%',
          margin: 'auto',
          display: 'flex',
          backgroundColor: 'rgba(255,255,255,.3)',
          objectFit: 'contain',
          overflow: 'hidden',
        }}
      >

      {path &&
      <>
        <Button
          className='image-slide-bar-button'
          variant="light"
          color="cyan"
          radius="xl"
          size="xs"
          onClick={(e)=>{moveLeft(e)}}
        >
          {'<'}
        </Button>
        <div
          style={{margin: 'auto'}}
        >
          <img
            src={path}
            alt='main image in overlay'
            style={{
              maxWidth: '800px',
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              margin: 'auto',
            }}
          />
        </div>
        <Button
          className='image-slide-bar-button'
          variant="light"
          color="cyan"
          radius="xl"
          size="xs"
          onClick={(e)=>{moveRight(e)}}
        >
          {'>'}
        </Button>
      </>
      }
      </div>

    </div>
  )
}

export default Overlay
