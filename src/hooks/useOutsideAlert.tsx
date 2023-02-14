import { MutableRefObject, useEffect } from 'react'

export const useOutsideAlerter = (
  ref: MutableRefObject<Element>,
  handler: () => void,
  mouseBehavior: 'mousedown' | 'mouseup' = 'mousedown'
) => {
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handler()
      }
    }

    document.addEventListener(mouseBehavior ?? 'mousedown', handleClickOutside)
    return () => {
      document.removeEventListener(
        mouseBehavior ?? 'mousedown',
        handleClickOutside
      )
    }
  }, [ref, handler, mouseBehavior])
}
