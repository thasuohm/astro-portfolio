import React from 'react'
import gmail from '/images/gmail.png'
import github from '/images/github.png'
import profileImage from '/images/profile.jpg'


const AboutMe = () => {
  return (
    <header
      id="aboutme"
      className="flex from-orange-300 bg-gradient-to-r px-2 pb-8 pt-24"
    >
      <div
        id="introduce"
        className="max-w-4xl w-full flex flex-col gap-4 sm:flex-row justify-between mx-auto"
      >
        <div className="flex flex-col gap-2 text-2xl md:text-4xl font-extrabold md:w-1/2">
          <div className="flex flex-col xs:flex-row items-start xs:items-end gap-3">
            Hi, I Am
            <div className="text-base font-normal py-1 px-2 bg-slate-800 text-white rounded-2xl w-max font-menlo">
              Software Developer
            </div>
          </div>
          <h1>Thanapat Suwannaard</h1>

          <p className="text-lg font-semibold">
            I'am in love with Coding and find the way to make my code even
            Better!
          </p>
          <div className="flex gap-6 items-baseline mt-4">
            <a
              href="https://github.com/thasuohm"
              target="_blank"
              className="w-10"
            >
              <img src={github} alt="thasuohm" title="thasuohm" />
            </a>
            <a
              href="mailto:thanapat.suwanaaard@gmail.com"
              target="_blank"
              className="w-10"
            >
              <img
                src={gmail}
                alt="thanapat.suwanaaard@gmail.com"
                title="thanapat.suwanaaard@gmail.com"
              />
            </a>
          </div>
        </div>
        <div
          id="my-image-container"
          className="w-full sm:w-1/2 flex justify-center"
        >
          <img
            src={profileImage}
            alt="my image"
            className="w-72 h-52 rounded-lg object-cover"
          />
        </div>
      </div>
    </header>
  )
}

export default AboutMe
