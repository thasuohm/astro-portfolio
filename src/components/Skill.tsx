import React, { useRef } from 'react'
import SectionLayout from '../layouts/SectionLayout'
import {
  webDevTools,
  styleTools,
  databaseTools,
  otherTools,
  testingTools,
} from '../data/skills'
import { a, useTransition } from '@react-spring/web'
import useOnScreen from '../hooks/useOnScreen'

const Skill = () => {
  const skillRef: any = useRef<HTMLElement>()
  const skillOnScreen: boolean = useOnScreen(skillRef)

  const webDevTransition = useTransition(skillOnScreen ? webDevTools : [], {
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
    trail: 100,
  })

  const testingToolsTransition = useTransition(
    skillOnScreen ? testingTools : [],
    {
      from: { opacity: 0, scale: 0 },
      enter: { opacity: 1, scale: 1 },
      leave: { opacity: 0, scale: 0 },
      trail: 100,
    }
  )
  const styleToolsTransition = useTransition(skillOnScreen ? styleTools : [], {
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
    trail: 100,
  })
  const databaseToolsTransition = useTransition(
    skillOnScreen ? databaseTools : [],
    {
      from: { opacity: 0, scale: 0 },
      enter: { opacity: 1, scale: 1 },
      leave: { opacity: 0, scale: 0 },
      trail: 100,
    }
  )
  const otherToolsTransition = useTransition(skillOnScreen ? otherTools : [], {
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
    trail: 100,
  })

  return (
    <SectionLayout id={'stack'} sectionName={'My Stack'}>
      <div ref={skillRef} className="flex flex-wrap gap-8">
        <div id="dev-list" className="flex flex-col gap-2">
          <header className="font-semibold text-xl pb-4">Development</header>
          <div className="flex flex-wrap gap-8">
            {webDevTransition((props, item) => (
              <a.div style={props} key={item.name}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 grayscale hover:grayscale-0 duration-100 cursor-pointer object-contain"
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
                  className="w-20 h-20 grayscale hover:grayscale-0 duration-100 cursor-pointer object-contain"
                  title={item.name}
                />
              </a.div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-8">
        <div id="style-list" className="flex flex-col gap-2">
          <header className="font-semibold text-xl pb-4">Style</header>
          <div className="flex flex-wrap gap-8">
            {styleToolsTransition((props, item) => (
              <a.div style={props} key={item.name}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 grayscale hover:grayscale-0 duration-100 cursor-pointer object-contain"
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
                  className="w-20 h-20 grayscale hover:grayscale-0 duration-100 cursor-pointer object-contain"
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
                  className="w-20 h-20 grayscale hover:grayscale-0 duration-100 cursor-pointer object-contain"
                  title={item.name}
                />
              </a.div>
            ))}
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}

export default Skill
