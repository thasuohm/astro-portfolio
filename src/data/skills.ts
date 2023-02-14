import html from '/images/tools/html.png'
import js from '/images/tools/js.png'
import ts from '/images/tools/ts.png'
import css from '/images/tools/css.png'
import sass from '/images/tools/sass.png'
import tailwind from '/images/tools/tailwind.jpg'
import stylecomponent from '/images/tools/stylecomponent.png'
import react from '/images/tools/react.png'
import nextjs from '/images/tools/nextjs.png'
import nodejs from '/images/tools/nodejs.png'
import sql from '/images/tools/sql.png'
import mongodb from '/images/tools/mongodb.png'
import git from '/images/tools/git.png'
import linux from '/images/tools/linux.png'
import jest from '/images/tools/jest.jpg'
import cypress from '/images/tools/cypress.png'

type skill = {
  name: string
  image: string
}

export const webDevTools: skill[] = [
  { name: 'HTML', image: html },
  { name: 'JavaScript', image: js },
  { name: 'TypeScript', image: ts },
  { name: 'React.js', image: react },
  { name: 'Next.js (Fullstack + My Love)', image: nextjs },
  { name: 'Node.js', image: nodejs },
]

export const dummyWebTools: skill[] = webDevTools.map((item) => {
  return { name: item.name, image: html }
})

export const testingTools: skill[] = [
  { name: 'Jest', image: jest },
  { name: 'Cypress', image: cypress },
]

export const dummyTestTools: skill[] = testingTools.map((item) => {
  return { name: item.name, image: html }
})

export const styleTools: skill[] = [
  { name: 'CSS', image: css },
  { name: 'SCSS', image: sass },
  { name: 'Tailwind (My Love)', image: tailwind },
  { name: 'Style Component (React.js)', image: stylecomponent },
]

export const dummyStyleTools: skill[] = styleTools.map((item) => {
  return { name: item.name, image: html }
})

export const databaseTools: skill[] = [
  { name: 'Any SQL Database', image: sql },
  { name: 'MongoDB', image: mongodb },
]

export const dummyDBTools: skill[] = databaseTools.map((item) => {
  return { name: item.name, image: html }
})

export const otherTools: skill[] = [
  { name: 'Git', image: git },
  { name: 'Linux', image: linux },
]

export const dummyOtherTools: skill[] = otherTools.map((item) => {
  return { name: item.name, image: html }
})
