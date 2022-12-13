import React, { useState } from 'react'

function useRerender() {
  const [counter, setCounter] = useState(0)

  const refresh = () => {
    setCounter(counter + 1)
  }

  return refresh

}

export default useRerender
