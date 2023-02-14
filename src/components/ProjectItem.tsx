import React, { useRef } from 'react'
import type { project } from '../data/projects'
import useOnScreen from '../hooks/useOnScreen'

const ProjectItem = ({ project, idx }: { project: project; idx: number }) => {
  const titleRef: any = useRef<HTMLElement>()
  const describeRef: any = useRef<HTMLElement>()
  const learnRef: any = useRef<HTMLElement>()
  const buildRef: any = useRef<HTMLElement>()
  const linkRef: any = useRef<HTMLElement>()
  const mediaRef: any = useRef<HTMLElement>()

  const titleOnScreen: boolean = useOnScreen(titleRef)
  const describeOnScreen: boolean = useOnScreen(describeRef)
  const learnOnScreen: boolean = useOnScreen(learnRef)
  const buildOnScreen: boolean = useOnScreen(buildRef)
  const linkOnScreen: boolean = useOnScreen(linkRef)
  const mediaOnScreen: boolean = useOnScreen(mediaRef)

  return (
    <div className={`text-slate-200 flex flex-col gap-2`} id={project.id}>
      <header
        ref={titleRef}
        className={`text-xl sm:text-2xl font-bold flex items-baseline gap-2 text-slate-200 duration-700 ${
          titleOnScreen ? 'opacity-1 translate-x-0' : 'opacity-0 -translate-x-6'
        }`}>
        {idx + 1}. {project.title}{' '}
        {project.tag && (
          <span className="text-base font-normal py-1 px-2 bg-red-600 text-white rounded-2xl w-max font-menlo text-center">
            {project.tag}
          </span>
        )}
      </header>
      <p
        ref={describeRef}
        className={`text-slate-300 tracking-wide duration-300  ${
          describeOnScreen
            ? 'opacity-1 translate-y-0'
            : 'opacity-0 translate-y-12 blur-sm'
        }`}>
        {project.description}
      </p>

      {project.learn && (
        <div
          ref={learnRef}
          className={`duration-500 ${
            learnOnScreen
              ? 'opacity-1 translate-y-0 '
              : 'opacity-0 translate-y-12 blur-sm'
          }`}>
          <span className={`font-semibold text-yellow-500`}>
            What I Learn :
          </span>{' '}
          {project.learn}
        </div>
      )}

      <p
        ref={buildRef}
        className={`duration-700 ${
          buildOnScreen
            ? 'opacity-1 translate-y-0 '
            : 'opacity-0 translate-y-12 blur-sm'
        }`}>
        <span className="font-semibold text-orange-500">Build with : </span>{' '}
        {project.tools}
      </p>

      {project.link && (
        <p
          ref={linkRef}
          className={`flex items-center gap-2 duration-1000 ${
            linkOnScreen
              ? 'opacity-1 translate-y-0'
              : 'opacity-0 translate-y-12 blur-sm'
          }`}>
          <span className="font-semibold text-red-500">Source Code :</span>{' '}
          <a
            href={project.link}
            title={project.linkTitle}
            className="p-1 px-2 bg-slate-800 rounded-lg hover:bg-slate-600 duration-150"
            target={'_blank'}>
            {project.linkTitle}
          </a>
        </p>
      )}

      <div
        ref={mediaRef}
        className={`flex flex-col gap-4 mt-4  duration-500 ${
          mediaOnScreen ? 'opacity-1 scale-100' : 'opacity-0 scale-95'
        }`}>
        {project.images &&
          project.images.map((image, idx) => (
            <div key={`${project.id}_image_${idx}`}>
              <img
                src={image}
                alt={`${project.id}_image_${idx}`}
                className="w-full"></img>
            </div>
          ))}
        {project.videos &&
          project.videos.map((video, idx) => (
            <div key={`${project.id}_video_${idx}`}>
              <video autoPlay loop muted src={video} className="w-full"></video>
            </div>
          ))}
      </div>
    </div>
  )
}

export default ProjectItem
