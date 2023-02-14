import React from 'react'
import SectionLayout from '../layouts/SectionLayout'
import { projects } from '../data/projects'
import ProjectItem from './ProjectItem'

const Project = () => {
  return (
    <SectionLayout
      id={'projects'}
      sectionName={'My Projects'}
      sectionNameColor="text-slate-200"
      customStyle="from-gray-900 via-slate-900 to-slate-700 bg-gradient-to-b pt-12">
      {projects.map((project, idx) => (
        <div key={project.id}>
          <ProjectItem project={project} idx={idx} />
        </div>
      ))}
    </SectionLayout>
  )
}

export default Project
