import React from 'react'
import SectionLayout from '../layouts/SectionLayout'
import gmail from '/images/gmail.png'
import github from '/images/github.png'
import tel from '/images/tel.jpg'

const Contact = () => {
  return (
    <SectionLayout
      id={'contact'}
      sectionName={'Contact Me'}
      customStyle="bg-black text-white pt-12"
    >
      <div className="flex flex-row flex-wrap gap-12 sm:justify-center items-start sm:items-center mt-4 text-slate-300">
        <div className="flex gap-6 sm:gap-1 flex-row sm:flex-col items-center">
          <img
            src={github}
            alt="thasuohm"
            title="thasuohm"
            className="rounded-full w-16"
          />
          <div className="flex flex-col gap-1 sm:items-center">
            <span className="text-xl font-bold sm:mt-2">GitHub</span>
            <a
              href="https://github.com/thasuohm"
              className="font-semibold underline hover:no-underline"
              target="_blank"
            >
              thasuohm
            </a>
          </div>
        </div>
        <div className="flex gap-6 sm:gap-1 flex-row sm:flex-col items-center">
          <img
            src={gmail}
            alt="thanapat.suwanaaard@gmail.com"
            title="thanapat.suwanaaard@gmail.com"
            className="w-16"
          />
          <div className="flex flex-col gap-1 sm:items-center">
            <span className="text-xl font-bold sm:mt-2">Email</span>
            <a
              href="mailto:thanapat.suwanaaard@gmail.com"
              target="_blank"
              className="underline hover:no-underline"
            >
              thanapat.suwanaaard@gmail.com
            </a>
          </div>
        </div>
        <div className="flex gap-6 sm:gap-1 flex-row sm:flex-col items-center">
          <img
            src={tel}
            alt="my phone"
            title="0618969299"
            className="rounded-full w-16"
          />

          <div className="flex flex-col gap-1 sm:items-center">
            <span className="text-xl font-bold sm:mt-2">Tel</span>
            <span>061-896-9299</span>
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}

export default Contact
