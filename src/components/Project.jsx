import React from 'react'
import SectionLayout from '../layouts/SectionLayout'
import {projects} from '../data/projects'

const Project = () => {
  return (
    <SectionLayout
      id={'projects'}
      sectionName={'My Projects'}
      bgColor="bg-slate-900"
      sectionNameColor="text-slate-200"
      customStyle="pt-12"
    >
      {projects.map((project, idx) => (
        <div
          key={project.id}
          className="text-slate-200 flex flex-col gap-2"
          id={project.id}
        >
          <header className="text-xl font-semibold flex items-baseline gap-2">
            {idx + 1}. {project.title}{' '}
            {project.tag && (
              <span className="text-base font-normal py-1 px-2 bg-red-600 text-white rounded-2xl w-max font-menlo text-center">
                {project.tag}
              </span>
            )}
          </header>
          <p className="text-slate-300 tracking-wide">{project.description}</p>

          {project.learn && (
            <div className="">
              <span className="font-semibold text-yellow-500">
                What I Learn :
              </span>{' '}
              {project.learn}
            </div>
          )}

          <p>
            <span className="font-semibold text-orange-500">Build with : </span>{' '}
            {project.tools}
          </p>

          {project.link && (
            <p className="flex items-center gap-2">
              <span className="font-semibold text-red-500">Source Code :</span>{' '}
              <a
                href={project.link}
                title={project.linkTitle}
                className="p-1 px-2 bg-slate-800 rounded-lg hover:bg-slate-600 duration-150"
                target={'_blank'}
              >
                {project.linkTitle}
              </a>
            </p>
          )}

          <div className="flex flex-col gap-4 mt-4">
            {project.images &&
              project.images.map((image, idx) => (
                <div key={`${project.id}_image_${idx}`}>
                  <img src={image} className="w-full"></img>
                </div>
              ))}
            {project.videos &&
              project.videos.map((video, idx) => (
                <div key={`${project.id}_video_${idx}`}>
                  <video
                    autoPlay
                    loop
                    muted
                    type="video/mp4"
                    src={video}
                    className="w-full"
                  ></video>
                </div>
              ))}
          </div>
        </div>
      ))}
    </SectionLayout>
  )
}

export default Project
