import React from 'react'
import SectionLayout from '../layouts/SectionLayout'
import dekd from '/images/dekd.png'

const Internship = () => {
  return (
    <SectionLayout id={'internship'} sectionName={'Internship'}>
      <div className="flex flex-col md:flex-row gap-8">
        <a
          href="https://www.dek-d.com/"
          target={'_blank'}
          className="w-36 self-center"
        >
          <img src={dekd} alt="Dek-D logo" title="Dek-D Interactive Co.,Ltd." />
        </a>
        <section className="flex flex-col gap-2">
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
        </section>
      </div>
    </SectionLayout>
  )
}

export default Internship
