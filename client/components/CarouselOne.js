import React from 'react'
import { Carousel } from '@mantine/carousel';
const { Slide } = Carousel
import ImageWrapper from './ImageWrapper'

const cardWidth = 320

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
