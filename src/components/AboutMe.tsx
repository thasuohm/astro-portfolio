import React, { useRef } from 'react'
import gmail from '/images/gmail.png'
import github from '/images/github.png'
import profileImage from '/images/profile-img.jpg'
import { a, useSpring } from '@react-spring/web'
import useOnScreen from '../hooks/useOnScreen'

const AboutMe = () => {
  const aboutMeRef: any = useRef<HTMLElement>()
  const aboutMeOnScreen: boolean = useOnScreen(aboutMeRef)
  const slideLeft = useSpring({
    x: aboutMeOnScreen ? 0 : -50,
    opacity: aboutMeOnScreen ? 1 : 0,
  })

  const fade = useSpring({
    opacity: aboutMeOnScreen ? 1 : 0,
  })

  return (
    <header
      id="aboutme"
      className="flex from-orange-500 to-orange-100 bg-gradient-to-r px-2 pb-8 pt-24">
      <div
        id="introduce"
        className="max-w-4xl w-full flex flex-col gap-4 sm:flex-row justify-between mx-auto">
        <a.div
          ref={aboutMeRef}
          style={slideLeft}
          className="flex flex-col gap-2 text-2xl md:text-4xl font-extrabold md:w-1/2">
          <div className="flex flex-col xs:flex-row items-start xs:items-end gap-3">
            Hi, I Am
            <div className="text-base font-normal py-1 px-2 bg-slate-800 text-white rounded-2xl w-max font-menlo">
              Software Developer
            </div>
          </div>
          <h1>Thanapat Suwannaard</h1>

          <p className="text-lg font-semibold">
            I am in love with Coding and find the way to make my code even
            Better!
          </p>
          <div className="flex gap-6 justify-center sm:justify-start items-center mt-4">
            <a
              href="https://github.com/thasuohm"
              target="_blank"
              className="w-10"
              rel="noopener">
              <img
                src={github}
                alt="thasuohm"
                title="thasuohm"
                className="rounded-full"
              />
            </a>
            <a
              href="mailto:thanapat.suwanaaard@gmail.com"
              target="_blank"
              className="w-10">
              <img
                src={gmail}
                alt="thanapat.suwanaaard@gmail.com"
                title="thanapat.suwanaaard@gmail.com"
              />
            </a>
          </div>
        </a.div>
        <a.div
          style={fade}
          id="my-image-container"
          className="w-full sm:w-1/2 flex justify-center">
          <img
            src={profileImage}
            alt="my image"
            className="w-72 h-52 rounded-lg object-cover"
          />
        </a.div>
      </div>
    </header>
  )
}

export default AboutMe
