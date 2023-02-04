import {useTransition} from '@react-spring/web'
import React from 'react'

const useFadeTransition = ({trail, arr}: {arr: any[]; trail: number}) => {
  const transition = useTransition(arr, {
    from: {opacity: 0},
    enter: {opacity: 1},
    trail: trail ? trail : 100,
  })

  return transition
}

export default useFadeTransition
