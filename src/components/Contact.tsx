import React, { useRef } from 'react'
import SectionLayout from '../layouts/SectionLayout'
import useOnScreen from '../hooks/useOnScreen'
import { useTransition, a } from '@react-spring/web'
import { contacts } from '../data/contact'

const Contact = () => {
  const contactRef: any = useRef<HTMLElement>()
  const contactOnScreen = useOnScreen(contactRef)

  const contactTransition = useTransition(contactOnScreen ? contacts : [], {
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
    trail: 100,
  })

  return (
    <SectionLayout
      id={'contact-list'}
      sectionName={'Contact Me'}
      customStyle="bg-black text-white pt-12">
      <div
        id="contact"
        ref={contactRef}
        className="flex flex-row flex-wrap gap-12 sm:justify-center items-start sm:items-center mt-4 text-slate-300">
        {contactTransition((props, item) => (
          <a.div
            style={props}
            className="flex gap-6 sm:gap-1 flex-row sm:flex-col items-center">
            <img
              src={item.img}
              alt={item.label}
              title={item.label}
              className="rounded-full w-16"
            />
            <div className="flex flex-col gap-1 sm:items-center">
              <span className="text-xl font-bold sm:mt-2">
                {item.contactType}
              </span>
              <a
                href={item.link}
                className="font-semibold"
                target="_blank"
                rel="noopener">
                {item.label}
              </a>
            </div>
          </a.div>
        ))}
      </div>
    </SectionLayout>
  )
}

export default Contact
