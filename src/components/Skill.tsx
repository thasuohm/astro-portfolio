import React, { useRef } from 'react'
import SectionLayout from '../layouts/SectionLayout'
import {
  webDevTools,
  styleTools,
  databaseTools,
  otherTools,
  testingTools,
  dummyWebTools,
  dummyTestTools,
  dummyStyleTools,
  dummyDBTools,
  dummyOtherTools,
} from '../data/skills'
import { a, useTransition } from '@react-spring/web'
import useOnScreen from '../hooks/useOnScreen'

const Skill = () => {
  const skillRef: any = useRef<HTMLElement>()
  const skillOnScreen: boolean = useOnScreen(skillRef)

  const webDevTransition = useTransition(
    skillOnScreen ? webDevTools : dummyWebTools,
    {
      from: { opacity: 0.1, scale: 0.1 },
      enter: { opacity: 1, scale: 1 },
      trail: 100,
    }
  )

  const testingToolsTransition = useTransition(
    skillOnScreen ? testingTools : dummyTestTools,
    {
      from: { opacity: 0.1, scale: 0.1 },
      enter: { opacity: 1, scale: 1 },
      trail: 100,
    }
  )
  const styleToolsTransition = useTransition(
    skillOnScreen ? styleTools : dummyStyleTools,
    {
      from: { opacity: 0.1, scale: 0.1 },
      enter: { opacity: 1, scale: 1 },
      trail: 100,
    }
  )
  const databaseToolsTransition = useTransition(
    skillOnScreen ? databaseTools : dummyDBTools,
    {
      from: { opacity: 0.1, scale: 0.1 },
      enter: { opacity: 1, scale: 1 },
      trail: 100,
    }
  )
  const otherToolsTransition = useTransition(
    skillOnScreen ? otherTools : dummyOtherTools,
    {
      from: { opacity: 0.1, scale: 0.1 },
      enter: { opacity: 1, scale: 1 },

      trail: 100,
    }
  )

  return (
    <SectionLayout id={'stack'} sectionName={'My Stack'}>
      <div ref={skillRef} className="flex flex-wrap">
        <div className="flex flex-wrap gap-8">
          <div id="dev-list" className="flex flex-col gap-2">
            <header className="font-semibold text-xl pb-4">Development</header>
            <div className="flex flex-wrap gap-8">
              {webDevTransition((props, item) => (
                <a.div style={props} key={item.name}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20  duration-100 cursor-pointer object-contain"
                    title={item.name}
                  />
                </a.div>
              ))}
            </div>
          </div>
          <div id="testing-list" className="flex flex-col gap-2">
            <header className="font-semibold text-xl pb-4">Test</header>
            <div className="flex flex-wrap gap-8">
              {testingToolsTransition((props, item) => (
                <a.div style={props} key={item.name}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20  duration-100 cursor-pointer object-contain"
                    title={item.name}
                  />
                </a.div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-8 mt-8">
          <div id="style-list" className="flex flex-col gap-2">
            <header className="font-semibold text-xl pb-4">Style</header>
            <div className="flex flex-wrap gap-8">
              {styleToolsTransition((props, item) => (
                <a.div style={props} key={item.name}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20  duration-100 cursor-pointer object-contain"
                    title={item.name}
                  />
                </a.div>
              ))}
            </div>
          </div>
          <div id="database-list" className="flex flex-col gap-2">
            <header className="font-semibold text-xl pb-4">Database</header>
            <div className="flex flex-wrap gap-8">
              {databaseToolsTransition((props, item) => (
                <a.div style={props} key={item.name}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 duration-100 cursor-pointer object-contain"
                    title={item.name}
                  />
                </a.div>
              ))}
            </div>
          </div>

          <div id="other-list" className="flex flex-col gap-2">
            <header className="font-semibold text-xl pb-4">Other</header>
            <div className="flex flex-wrap gap-8">
              {otherToolsTransition((props, item) => (
                <a.div style={props} key={item.name}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20  duration-100 cursor-pointer object-contain"
                    title={item.name}
                  />
                </a.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}

export default Skill
