import React, { useState, useEffect} from 'react'
import useScrollPosition from './customHooks/useScrollPosition'
import { useLocation } from 'react-router'

const ScrollMemo = ({children}) => {

  const { pathname } = useLocation()
  const [scrollMemory, setScrollMemory] = useState({})
  const scrollPosition = useScrollPosition()

  useEffect(() => {

    return () => {
      setScrollMemory(prev => ({
        ...prev,
        [pathname]: scrollPosition
      }))
    }
  }, [pathname])

  return (
    <div className='scroll-memo'>
      {children}
    </div>
  )
}

export default ScrollMemo
