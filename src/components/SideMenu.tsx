import { useSpring, a } from '@react-spring/web'
import React, { useRef, useState } from 'react'
import { menuList } from '../data/menu'
import { projects } from '../data/projects'
import { useOutsideAlerter } from '../hooks/useOutsideAlert'

const SideMenu = () => {
  const [isShowMenu, setIsShowMenu] = useState(false)
  const menuRef: any = useRef<HTMLDivElement>()

  const slideLeftMenu = useSpring({
    x: isShowMenu ? 0 : -600,
    opacity: isShowMenu ? 1 : 0,
  })

  const outsideMenuClicked = () => {
    if (isShowMenu) {
      setIsShowMenu(false)
    }
  }

  useOutsideAlerter(menuRef, outsideMenuClicked, 'mousedown')

  return (
    <>
      <a.div
        ref={menuRef}
        style={slideLeftMenu}
        className={`flex items-start fixed z-10`}>
        <nav className="bg-slate-100 drop-shadow-md shadow-slate-600 h-screen duration-200 w-60 z-10 md:relative  flex flex-col  p-4 overflow-y-auto">
          {menuList.map((item) => (
            <a
              key={item.id}
              href={item.id}
              className={`font-menlo border-solid border-b-2 p-1 py-1.5 hover:bg-slate-400 hover:text-white duration-100 ${
                item.highlight ? 'bg-red-500 text-white border-0' : ''
              }`}>
              {item.label}
            </a>
          ))}
          {projects.map((project) => (
            <a
              key={project.id}
              href={'#' + project.id}
              className={`font-menlo border-solid border-b-2 p-1 py-1.5 hover:bg-slate-400 hover:text-white duration-100`}>
              # {project.id}
            </a>
          ))}

          <a
            href="#contact"
            className={`font-menlo border-solid border-b-2 p-1 py-1.5 bg-slate-800 text-white`}>
            # Contact Me
          </a>
        </nav>
      </a.div>

      <button
        title="side-menu"
        onClick={() => {
          setIsShowMenu((prev) => !prev)
        }}
        className={`fixed ${
          isShowMenu ? 'left-64' : 'left-2'
        } top-2 duration-500 w-12 h-12 bg-slate-600 rounded-full flex flex-col items-center justify-center gap-y-1.5 z-10`}>
        <div
          className={`w-2/4 h-0.5 bg-white ${
            isShowMenu ? 'rotate-45 translate-x-1' : ''
          } origin-top-left duration-100`}></div>
        <div
          className={`w-2/4 h-0.5 bg-white duration-100  ${
            isShowMenu ? 'opacity-0 -translate-x-4' : ''
          }`}></div>
        <div
          className={`w-2/4 h-0.5  bg-white ${
            isShowMenu ? '-rotate-45 translate-x-0.5' : ''
          } origin-top-left duration-100`}></div>
      </button>
    </>
  )
}

export default SideMenu
