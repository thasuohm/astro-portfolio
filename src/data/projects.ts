import webcopy1 from '/images/projects/dropboxcopy/top.png'
import webcopy2 from '/images/projects/dropboxcopy/mid.png'
import webcopy3 from '/images/projects/dropboxcopy/bottom.png'

import calculatorApp1 from '/images/projects/calculator/calculatorApp.mp4'

import phoenixnext1 from '/images/projects/phoenixnext/homepage.mp4'
import phoenixnext2 from '/images/projects/phoenixnext/cart.mp4'

import tcascal1 from '/images/projects/tcascalculator65/cal-1.png'
import tcascal2 from '/images/projects/tcascalculator65/cal-3.png'
import tcascal3 from '/images/projects/tcascalculator65/cal-4.png'

import examonline1 from '/images/projects/dekdexamonline/instruction.png'
import examonline2 from '/images/projects/dekdexamonline/exam.png'

import examtopic1 from '/images/projects/examtopic/distibute-1.webm'

import opdc from '/images/projects/opdc/homepage.png'

import sharemybook1 from '/images/projects/sharemybook/search.webm'
import sharemybook2 from '/images/projects/sharemybook/profile.webm'

import retro1 from '/images/projects/retro-creator/switchmode.webm'
import retro2 from '/images/projects/retro-creator/createform.webm'
import retro3 from '/images/projects/retro-creator/sendboard.webm'
import retro4 from '/images/projects/retro-creator/commentitem.webm'

export type project = {
  id: string
  title: string
  description: string
  images?: string[]
  tools: string
  linkTitle?: string
  link?: string
  videos?: string[]
  learn?: string
  tag?: string
}

export const projects: project[] = [
  {
    id: 'dropbox-copy',
    title: 'Dropbox Home page Copy',
    description: 'Dropbox Home page Copy, reference from Dropbox',
    learn: 'Practice my skill to create web UI from design.',
    tools: 'HTML, Tailwind',
    images: [webcopy1, webcopy2, webcopy3],
    linkTitle: 'GitHub Link',
    link: 'https://github.com/thasuohm/INT203_62130500037/tree/master/62130500037_groupwork_1',
  },
  {
    id: 'calculator',
    title: 'Calculator Application',
    description: 'Calculator Application, This project was simple calculator',
    learn: 'Practice my javascript and react skills.',
    tools: 'React.js',
    videos: [calculatorApp1],
    linkTitle: 'GitHub Link',
    link: 'https://github.com/thasuohm/calculator',
  },
  {
    id: 'squidnext',
    title: 'Squid Next',
    description:
      'Squid Next, is the online shopping application that user can sell or buy something and review on it.',
    videos: [phoenixnext1, phoenixnext2],
    learn:
      'This project make me learn about authentication (JWT), role handling, Concept to make Infinite-scroll, Redux state management and try to use Material-UI for faster development time',
    tools: 'React.js, Redux, Material-UI',
    linkTitle: 'GitHub Link',
    link: 'https://github.com/int222-36-37-58/FrontEnd',
  },
  {
    id: 'tcas-cal-65',
    title: 'Dek-D TCAS calculator 65',
    description:
      'Dek-D TCAS calculator 65, the application to help people to calculate the percentage to get into a university and show the requirement score and score ratio for each university.  This project still available in DekD TCAS Application on Mobile',
    learn:
      "This project have use React Query and Style-components that I have never use so I make me learn about React Query at server-side fetching, caching of it so I don't have to make context to share those data but share with React Query, And the one thing I learn is the other way to style with Style-components It's help to easier to find where I style it and handle with JS",
    images: [tcascal1, tcascal2, tcascal3],
    tools: 'Next.js, React Query, Style-components',
  },
  {
    id: 'dekd-examonline',
    title: 'Dek-D Exam Online',
    description:
      'Dek-D Exam Online, the application for students to buy a course to do an exam for preparing for the university.',
    learn:
      'This project make me learn about make timer most reliable to server, aware user go out of page and there answer lost, offline state, play audio, many choice formats, many UI views for each device, and the version and OS that the user use',
    images: [examonline1, examonline2],
    tools: 'HTML, CSS, JavaScript, PHP',
  },
  {
    id: 'exam-topic',
    title: 'TGAT TPAT A-Level Exam topic distribution Program',
    description:
      'TGAT TPAT A-Level Exam topic distribution Program, the application to give the user about the topic for each subject and tell how many questions to get the goal score, user can print into the paper',
    learn: 'This project help me learn about make page for printing in a paper',
    videos: [examtopic1],
    tools: 'React.js, Style-components',
  },
  {
    id: 'opdc',
    title: 'OPDC Data retriever',
    tag: 'Government Project',
    description:
      'OPDC Data retriever, the project to handle data, monitor data, generate links, and export data as a .xlsx file and handle permission for user.',
    learn:
      'In this project I do as fullstack so I learned about the way to create website with Flask and PostgresSQL',
    images: [opdc],
    tools: 'HTML, CSS, Flask',
  },
  {
    id: 'share-my-book',
    title: 'Share my Book',
    tag: 'Senior Project',
    description:
      'Share my Book, is a project to help people to borrow books and donate the book.',
    learn:
      'I learn about authentication by the user and login via a google account, role handling with next.js middleware, verifying email and forgot password, socket.io for making the in-app notification, Nodemailer to send an email, Optimize page build with server-side and integrated static generation. In this project i learn a lot of feature that i never use and i make my project even better is UX and Development time and this project is the first time that i make website with Socket.io to make my Website is Realtime Application',
    videos: [sharemybook1, sharemybook2],
    tools: 'Next.js, Style-components, Socket.io',
    linkTitle: 'GitHub Link',
    link: 'https://github.com/3rdyearproj-mark-ohm-banjo/client',
  },
  {
    id: 'retro-creator',
    title: 'Retrospective Creator',
    description: `Retrospective Creator, is a completely realtime app with socket.io it use for make retrospective main of this app is create retrospective board, send retrospective comment, and add comment to each other comment and user have to login before use those feature with google account. 
    `,
    learn:
      'Since I try to find what stack does Developer use for Next.js Full Stack I have try Typescript with prisma that make life of Typescript a lot easier, Making next/api with socket.io on both cli and server, After I done this project I know more about how to make Next.js Typescript fullstack and use the pattern to make my code my easier to maintain',
    tools:
      'Next.js - Fullstack, React Query, Typescript, Tailwind, Socket.io, Prisma, MongoDB',
    linkTitle: 'GitHub Link',
    videos: [retro1, retro2, retro3, retro4],
    link: 'https://github.com/thasuohm/retrospective-app',
  },
]
