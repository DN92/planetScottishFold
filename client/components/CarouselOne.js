import React from 'react'
import { Carousel } from '@mantine/carousel';
const { Slide } = Carousel

const cardWidth = 320

function ImageWrapper({src: src, width, alternative = 'placeholder'}) {
  return (
    <div className='carousel-img-wrapper' style={{width: width, height: 'auto'}}>
      <img style={{height: 'auto', width: '100%', objectFit: 'cover'}} className='carousel-img' src={src} alt={alternative} />
    </div>
  )
}

export default function CarouselOne({paths = []}) {
  return (
    <Carousel
      sx={{ maxWidth: cardWidth, maxHeight: cardWidth }}
      mx='auto'
      loop
      withIndicators
      controlSize={40}
      controlsOffset='xs'
      includeGapInSize={false}
      height={cardWidth}
      speed={5}
      align='center'
      nextControlLabel="Navigational Arrow for Image Carousel"
      styles={{
        root: {
          // backgroundColor: 'red'
        },
        viewport : {
          // backgroundColor: 'red'
        },
        container: {
          // backgroundColor: 'red',
        }
      }}
    >
      {paths.length > 0 ?
        paths.map((path, idx) => (
          <Slide key={idx}>
            <ImageWrapper src={path} width={cardWidth}  />
          </Slide>
        ))
      :
      <Slide>
        PlaceHolder
      </Slide>
      }
    </Carousel>
  )
}
