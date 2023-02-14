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
      customStyle="bg-slate-900 pt-12">
      {projects.map((project, idx) => (
        <div key={project.id}>
          <ProjectItem project={project} idx={idx} />
        </div>
      ))}
    </SectionLayout>
  )
}

export default Project
