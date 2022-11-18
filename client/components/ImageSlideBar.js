
import React, { useState, useRef, createRef, forwardRef } from 'react'

import ImageWrapper from "./ImageWrapper";

export default function ImageSlideBar ({pathsArray = []}) {
  const myRefs = useRef([])
  myRefs.current = pathsArray.map((element, idx) => myRefs.current[idx] ?? createRef())

  console.log('MY REFS:: ', myRefs.current)

  return (
    <div className="image-slide-bar">
      {pathsArray.map((path, idx) => (
        <ImageWrapper key={idx} ref={myRefs[idx]} src={path} width='3rem'/>
      ))}
    </div>
    )
}
