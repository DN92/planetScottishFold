import React, { useState, useMemo, useEffect, useLayoutEffect } from 'react'
import ImageSlideBar from './ImageSlideBar'
import MainImageDisplay from './MainImageDisplay'
import Overlay from './Overlay'
import useRerender from '../../customHooks/useRerender'
import emRemToPix from '../../util/emRemPix'
import useWindowSize from '../../customHooks/useWindowSize'

const Carousel = ({
  data = [],
  width = 64,
  height = 64,
  containerWidth=600,
  containerHeight=600,
  initMaxLength = 5,
  ratio = [88, 12],
  placeHolderImagePath = ''
}) => {
  const windowSize = useWindowSize()
  const [ratioMain, ratioBar] = ratio
  const dimensions = useMemo(() => {
    width = (emRemToPix(width > -1 ? emRemToPix(width): 'auto' ))
    height= (emRemToPix(height > -1 ? emRemToPix(height): 'auto' ))
    containerWidth = emRemToPix(containerWidth > -1 ? containerWidth : 'auto' )
    containerHeight = emRemToPix(containerHeight > -1 ? containerHeight : 'auto' )
    const denominator = ratioMain + ratioBar;
    return {
      MainImageDisplay: {
        width: Math.min(containerWidth, windowSize.width),
        height: containerHeight * ratioMain / denominator,
      },
      imageSlideBar: {
        width: containerWidth,
        height: containerHeight * ratioBar / denominator,
      },
    }
  },[width, height, containerWidth, containerHeight, windowSize, ratioMain, ratioBar])

  const [selected, setSelected] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false)
  const [viewLength, setViewLength] = useState( Math.max( 1, windowSize.width < 540 ? 3 : Math.max(initMaxLength, 0)))
  const imagesToEachSide = useMemo(() => {
    return Math.max(Math.floor((viewLength - 1) / 2), 0)
  }, [viewLength])
  const [metas, setMetas] = useState([])
  const [leftPointer, setLeftPointer] = useState(Math.max(selected - imagesToEachSide, 0))
  const [rightPointer, setRightPointer] = useState(Math.min(selected + imagesToEachSide, Math.max(0, metas.length - 1))  );
  const [fixPointers, setFixPointers] = useState(true);
  const refresh = useRerender()

  function moveLeft () {
    if (selected > 0) {
      setSelected(prev => prev - 1)
      setFixPointers(true)
    }
  };

  function moveRight () {
    if (selected < metas.length - 1) {
      setSelected(prev => prev + 1)
      setFixPointers(true)
    }
  };

  function handleKeyDown(event) {
    const keyCode = event.keyCode
    if ([37, 39].includes(keyCode)) {
      const keyboardLeftArrow = keyCode === 37
      const keyboardRightArrow = keyCode === 39
      event.preventDefault()
      if(keyboardLeftArrow) moveLeft()
      if(keyboardRightArrow) moveRight()
    }
  }

  useEffect(() => {
    setViewLength(Math.max( 1, windowSize.width < 540 ? 3 : Math.max(initMaxLength, 0)))
  }, [windowSize.width])

  useEffect(() => {
    setMetas(data.map((path, idx) => ({
      path,
      selected: false,
      index: idx,
      classList: [],
    })))
  }, [data])

  useEffect(() => {
    if(fixPointers) {
      let left = leftPointer
      let right = rightPointer
      while(right - left + 1 < viewLength && (left > 0 || right < metas.length - 1 )) {
        if(left > 0) {
          left--
        }
        if(right < metas.length -1) {
          right++
        }
      }
      setLeftPointer(left)
      setRightPointer(right)
    }
    setFixPointers(false)
  }, [fixPointers])

  useLayoutEffect(() => {
    const CAROUSEL_SELECTED_IMAGE = 'carousel-selected-image'
    metas.forEach(meta => {
      if (meta.index === selected && !meta.classList.includes(CAROUSEL_SELECTED_IMAGE)) {
        meta.classList.push(CAROUSEL_SELECTED_IMAGE)
      } else if (meta.index !== selected) {
        meta.classList = meta.classList.filter(ele => ele !== CAROUSEL_SELECTED_IMAGE)
      }
    })
    // refresh()
  }, [selected])

  useLayoutEffect(() => {
    const DISPLAYNONE = 'display-none'
    let leftPointer = Math.max(selected - imagesToEachSide, 0)
    let rightPointer = Math.min(selected + imagesToEachSide, metas.length - 1)
    while(rightPointer - leftPointer + 1 < viewLength && (leftPointer > 0 || rightPointer < metas.length - 1 )) {
      if(leftPointer > 0) {
        leftPointer--
      }
      if(rightPointer < metas.length -1) {
        rightPointer++
      }
    }
    metas.forEach(meta => {
      if(meta.index >= leftPointer && meta.index <= rightPointer) {
        meta.classList = meta.classList.filter(ele => ele !== DISPLAYNONE)
      } else {
        if(!meta.classList.includes(DISPLAYNONE)) {
          meta.classList.push(DISPLAYNONE)
        }
      }
    })
    refresh()
  }, [selected, viewLength])

  return (
    <div
      className='carousel-container'
      style={{
        width: dimensions.MainImageDisplay.width,
        maxWidth: containerWidth,
        height: containerHeight,
        maxHeight: containerHeight,
        display: 'flex',
        flexDirection: 'column',
        caretColor: 'transparent',
        paddingBottom: '4rem'
      }}
      tabIndex={0}
      onKeyDown={(e) => handleKeyDown(e)}
    >
      <MainImageDisplay
        path={data.length > 0 ? data[selected] : placeHolderImagePath}
        setShowOverlay={setShowOverlay}
        containerHeight={dimensions.MainImageDisplay.height}
      />

      {metas.length > 1 &&
      <ImageSlideBar
        metas={metas}
        setSelected={setSelected}
        width={width}
        maxHeight={dimensions.imageSlideBar.height}
        moveLeft={moveLeft}
        moveRight={moveRight}
      />
      }

    {showOverlay &&
      <Overlay
        path={data.length > 0 ? data[selected] : ''}
        setShowOverlay={setShowOverlay}
        selected={selected}
        moveLeft={moveLeft}
        moveRight={moveRight}
      />
    }
    </div>
  )
}

export default Carousel
