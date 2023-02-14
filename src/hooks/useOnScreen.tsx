import React, { MutableRefObject, useEffect, useState } from 'react'

const useOnScreen = (ref: MutableRefObject<Element>) => {
  const [isIntersecting, setIntersecting] = useState<boolean>(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting)
    })
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => {
      observer.unobserve(ref.current)
    }
  }, [])
  return isIntersecting
}

export default useOnScreen
