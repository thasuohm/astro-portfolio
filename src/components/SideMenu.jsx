import {useSpring, a} from '@react-spring/web'
import React, {useState} from 'react'
import {menuList} from '../data/menu'

const SideMenu = () => {
  const [isShowMenu, setIsShowMenu] = useState(false)

  const slideLeftMenu = useSpring({
    x: isShowMenu ? 0 : -500,
    opacity: isShowMenu ? 1 : 0,
  })

  return (
    <>
      <a.div style={slideLeftMenu} className={`flex items-start fixed z-10`}>
        <nav className="bg-slate-100 drop-shadow-md shadow-slate-600 h-screen duration-200 w-52 z-10 md:relative  flex flex-col gap-1 p-4">
          {menuList.map((item) => (
            <a
              key={item.id}
              href={item.id}
              className="font-menlo border-solid border-b-2 py-1"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </a.div>

      <button
        onClick={() => {
          setIsShowMenu((prev) => !prev)
        }}
        className={`fixed ${
          isShowMenu ? 'left-56' : 'left-2'
        } top-2 duration-500 w-12 h-12 bg-slate-600 rounded-full flex flex-col items-center justify-center gap-y-1.5 z-10`}
      >
        <div
          className={`w-2/4 h-0.5 bg-white ${
            isShowMenu ? 'rotate-45 translate-x-1' : ''
          } origin-top-left duration-100`}
        ></div>
        <div
          className={`w-2/4 h-0.5 bg-white duration-100  ${
            isShowMenu ? 'opacity-0 -translate-x-4' : ''
          }`}
        ></div>
        <div
          className={`w-2/4 h-0.5  bg-white ${
            isShowMenu ? '-rotate-45 translate-x-0.5' : ''
          } origin-top-left duration-100`}
        ></div>
      </button>
    </>
  )
}

export default SideMenu
