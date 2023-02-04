import React from 'react'
import SectionLayout from '../layouts/SectionLayout'
import kmutt from '/images/kmutt.png'

const Education = () => {
  return (
    <SectionLayout id={'education'} sectionName={'Education Background'} customStyle="pt-12">
      <div className="flex flex-col md:flex-row gap-8">
        <a
          href="https://www.kmutt.ac.th/"
          target={'_blank'}
          className="w-36 self-center md:self-start"
        >
          <img
            src={kmutt}
            alt="Kmutt logo"
            title="King Mongkut's University of Technology Thonburi - KMUTT"
          />
        </a>
        <section className="flex flex-col gap-2">
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
        </section>
      </div>
    </SectionLayout>
  )
}

export default Education
