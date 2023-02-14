import React from 'react'
import SectionLayout from '../layouts/SectionLayout'
import {
  webDevTools,
  styleTools,
  databaseTools,
  otherTools,
  testingTools,
} from '../data/skills'
import {a} from '@react-spring/web'
import useFadeTransition from '../hooks/useFadeTransition'

const Skill = () => {
  const webDevTransition = useFadeTransition({arr: webDevTools})
  const testingToolsTransition = useFadeTransition({arr: testingTools})
  const styleToolsTransition = useFadeTransition({arr: styleTools})
  const databaseToolsTransition = useFadeTransition({arr: databaseTools})
  const otherToolsTransition = useFadeTransition({arr: otherTools})

  return (
    <SectionLayout id={'stack'} sectionName={'My Stack'}>
      <div className="flex flex-wrap gap-8">
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
