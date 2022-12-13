import React from 'react'
import ImageWrapper from "./ImageWrapper";
import { Button } from '@mantine/core';
export default function ImageSlideBar ({
  metas = [],
  setSelected,
  width,
  maxHeight,
  moveLeft,
  moveRight,
}) {

  const buttonStyles = {
    alignSelf: 'center',
    transform: 'scale(1, 1.25)'
  }

  return (
    <div
      className='image-slide-bar-container'
      style={{
        display: 'flex',
        gap: '.625rem',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
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
      className="image-slide-bar"
      style={{
        display: 'flex',
        gap: '1rem',
        height: maxHeight,
          overflow: 'hidden',
        }}
        >
      {metas.map((meta, idx) => (
        <ImageWrapper
          key={idx}
          src={meta.path}
          classList={meta.classList || []}
          width={width}
          setSelected={setSelected}
          value={meta.index}
        />
        ))}
      </div>
      <Button
        className='image-slide-bar-button'
        variant="light"
        color="cyan"
        radius="xl"
        size="xs"
        onClick={(e)=>{moveRight(e)}}
        style={buttonStyles}
      >
        {'>'}
      </Button>
    </div>
    )
  }
