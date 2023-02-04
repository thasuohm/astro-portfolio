import {useSpring} from '@react-spring/web'

const useSlide = ({
  fromX,
  fromY,
  toX,
  toY,
  customFrom,
  customTo,
  customProps,
}: {
  fromX?: number
  fromY?: number
  toX?: number
  toY?: number
  customFrom?: any
  customTo?: any
  customProps?: any
}) => {
  const slide = useSpring({
    from: {x: fromX ?? 0, y: fromY ?? 0, opacity: 0, ...customFrom},
    to: {x: toX ?? 0, y: toY ?? 0, opacity: 1, ...customFrom},
    ...customProps,
  })

  return slide
}

export default useSlide
