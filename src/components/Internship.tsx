import React, { useRef } from 'react'
import SectionLayout from '../layouts/SectionLayout'
import dekd from '/images/dekd.png'
import { a, useSpring } from '@react-spring/web'
import useOnScreen from '../hooks/useOnScreen'

const Internship = () => {
  const contentRef: any = useRef<HTMLElement>()
  const contentOnScreen: boolean = useOnScreen(contentRef)
  const imgRef: any = useRef<HTMLElement>()
  const imgOnScreen: boolean = useOnScreen(imgRef)

  const slideUp = useSpring({
    y: contentOnScreen ? 0 : 50,
    opacity: contentOnScreen ? 1 : 0,
    delay: 200,
  })

  const fade = useSpring({
    opacity: imgOnScreen ? 1 : 0,
    scale: contentOnScreen ? 1 : 0,
    delay: 200,
  })

  return (
    <SectionLayout id={'internship'} sectionName={'Internship'}>
      <div ref={contentRef} className="flex flex-col md:flex-row gap-8">
        <a.a
          ref={imgRef}
          style={fade}
          href="https://www.dek-d.com/"
          target={'_blank'}
          className="w-36 self-center">
          <img src={dekd} alt="Dek-D logo" title="Dek-D Interactive Co.,Ltd." />
        </a.a>
        <a.section style={slideUp} className="flex flex-col gap-2">
          <header className="text-xl font-semibold">
            Dek-D Interactive Co.,Ltd.
          </header>
          <span className="font-semibold">Front-End Developer</span>
          <span className="font-semibold">
            Responsibility : Develop website from Design and make it the best
            for user~
          </span>
          <span className="flex flex-col sm:flex-row sm:gap-8">
            <p>
              <span className="font-semibold">Between</span> 2022 Jan - 2022 May
            </p>
            <p>
              <span className="font-semibold">Part time </span> 2022 May -
              Present
            </p>
          </span>
        </a.section>
      </div>
    </SectionLayout>
  )
}

export default Internship
