import React, { useRef } from 'react'
import SectionLayout from '../layouts/SectionLayout'
import kmutt from '/images/kmutt.png'
import { a, useSpring } from '@react-spring/web'
import useOnScreen from '../hooks/useOnScreen'

const Education = () => {
  const contentRef: any = useRef<HTMLElement>()
  const contentOnScreen: boolean = useOnScreen(contentRef)
  const imgRef: any = useRef<HTMLElement>()
  const imgOnScreen: boolean = useOnScreen(imgRef)

  const slideUp = useSpring({
    y: contentOnScreen ? 0 : 50,
    opacity: contentOnScreen ? 1 : 0,
    delay: 100,
  })
  const fade = useSpring({
    opacity: imgOnScreen ? 1 : 0,
    scale: contentOnScreen ? 1 : 0,
    delay: 200,
  })
  return (
    <SectionLayout
      id={'education'}
      sectionName={'Education'}
      customStyle="pt-12">
      <div className="flex flex-col md:flex-row gap-8" ref={contentRef}>
        <a.a
          style={fade}
          href="https://www.kmutt.ac.th/"
          target={'_blank'}
          className="w-36 self-center md:self-start"
          ref={imgRef}>
          <img
            src={kmutt}
            alt="Kmutt logo"
            title="King Mongkut's University of Technology Thonburi - KMUTT"
          />
        </a.a>
        <a.section style={slideUp} className="flex flex-col gap-2">
          <header className="text-xl font-semibold">
            King Mongkut's University of Technology Thonburi - KMUTT
          </header>
          <span className="font-semibold">
            Bachelor of Science Programme in Information Technology
          </span>
          <span className="font-semibold">
            School of Information Technology
          </span>
          <span className="flex flex-col sm:flex-row sm:gap-8">
            <p>
              <span className="font-semibold">2019 - Present</span> (4th Year,
              Graduate around June 2023)
            </p>
            <p>
              <span className="font-semibold">Current GPAX</span> 3.26
            </p>
          </span>
        </a.section>
      </div>
    </SectionLayout>
  )
}

export default Education
