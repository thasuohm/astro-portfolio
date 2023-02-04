import React from 'react'

const SectionLayout = ({
  id,
  bgColor,
  sectionName,
  sectionNameColor,
  customStyle,
  children,
}) => {
  return (
    <section
      id={id}
      className={`flex ${bgColor ?? 'bg-slate-100'} px-4 pb-12 ${customStyle}`}
    >
      <div className="max-w-4xl w-full flex flex-col gap-8 mx-auto">
        <h2
          id={sectionName}
          className={`text-3xl font-bold ${sectionNameColor}`}
        >
          {sectionName}
        </h2>
        {children}
      </div>
    </section>
  )
}

export default SectionLayout
