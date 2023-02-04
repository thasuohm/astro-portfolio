import webcopy1 from '/images/projects/dropboxcopy/top.png'
import webcopy2 from '/images/projects/dropboxcopy/mid.png'
import webcopy3 from '/images/projects/dropboxcopy/bottom.png'

import calculatorApp1 from '/images/projects/calculatorApp.mp4'

import phoenixnext1 from '/images/projects/phoenixnext/homepage.mp4'
import phoenixnext2 from '/images/projects/phoenixnext/cart.mp4'

import tcascal1 from '/images/projects/tcascalculator65/cal-1.png'
import tcascal2 from '/images/projects/tcascalculator65/cal-3.png'
import tcascal3 from '/images/projects/tcascalculator65/cal-4.png'

import examonline1 from '/images/projects/dekdexamonline/instruction.png'
import examonline2 from '/images/projects/dekdexamonline/exam.png'
import examonline3 from '/images/projects/dekdexamonline/exam-mobile.png'

import examtopic1 from '/images/projects/examtopic/distibute-1.mp4'

import opdc from '/images/projects/opdc/homepage.png'

import sharemybook1 from '/images/projects/sharemybook/search.mp4'
import sharemybook2 from '/images/projects/sharemybook/profile.mp4'

import retro1 from '/images/projects/retro-creator/createform.mp4'
import retro2 from '/images/projects/retro-creator/sendboard.mp4'
import retro3 from '/images/projects/retro-creator/closeboard.mp4'
import retro4 from '/images/projects/retro-creator/commentitem.mp4'

type project = {
  title: string
  description: string
  images?: string[]
  tools: string
  linkTitle?: string
  link?: string
  videos?: string[]
}

export const projects: project[] = [
  {
    title: 'Home page Web Copy Project',
    description:
      ', reference from Dropbox, intended to practice HTML CSS But this web copy create with Tailwind.',
    tools: 'HTML, Tailwind',
    images: [webcopy1, webcopy2, webcopy3],
    linkTitle: 'GitHub Link',
    link: 'https://github.com/thasuohm/INT203_62130500037/tree/master/62130500037_groupwork_1',
  },
  {
    title: 'Calculator Application',
    description:
      ', This project was created to practice javascript and react skills.',
    tools: 'React.js',
    videos: [calculatorApp1],
    linkTitle: 'GitHub Link',
    link: 'https://github.com/thasuohm/calculator',
  },
  {
    title: 'Online Shopping Application',
    description:
      ', This project is a Online shopping. this project help me to practice about authentication, managing users in various roles and state management with Redux',
    videos: [phoenixnext1, phoenixnext2],
    tools: 'React.js, Redux, Material-UI',
  },
  {
    title: 'Dek-D TCAS calculator 65',
    description:
      ', the application to help people to calculate the percentage to get into a university and show the requirement score and score ratio for each university.  This project still available in DekD TCAS Application on Mobile',
    images: [tcascal1, tcascal2, tcascal3],
    tools: 'Next.js, React Query, Style-components',
  },
  {
    title: 'Dek-D Exam Online',
    description:
      ', the application for students to buy a course to do an exam for preparing for the university. This project has to be concerned with exam time, syncing answer data, offline state, play audio, many choice formats, many UI views for each device, and the version and OS that the user use.',
    images: [examonline1, examonline2, examonline3],
    tools: 'HTML, CSS, JavaScript, PHP',
  },
  {
    title: 'TGAT TPAT A-Level Exam topic distribution Program',
    description:
      ', the application to give the user about the topic for each subject and tell how many questions to get the goal score, user can print into the paper, that make me learn about make page for printing in a paper',
    videos: [examtopic1],
    tools: 'React.js, Style-components',
  },
  {
    title: 'OPDC Data retriever',
    description:
      ', [Government Project]  the project to handle data, monitor data, generate links, and export data as a .xlsx file and handle permission for user. In this project i do as fullstack so i learned about the way to create website with Flask and PostgresSQL',
    images: [opdc],
    tools: 'HTML, CSS, Flask',
  },
  {
    title: 'Share my Book',
    description:
      ', [Senior Project] a project to help people to borrow books and donate the book. this project includes authentication by the user and login via a google account, role handling with next.js middleware, verifying email and forgot password, socket.io for making the in-app notification, Nodemailer to send an email, Optimize page build with server-side and integrated static generation. In this project i learn a lot of feature that i never use and i make my project even better is UX and Development time and this project is the first time that i make website with Socket.io to make my Website is Realtime Application',
    videos: [sharemybook1, sharemybook2],
    tools: 'Next.js, Style-components, Socket.io',
  },
  {
    title: 'Retrospective Creator',
    description:
      ',is a completely realtime app with socket.io it use for make retrospective that my team when i am going to internship always do it every 2 weeks and now they do it in Google Form so i want to try to make some website about this thing so the main of this app is create retrospective board, send retrospective comment, and add comment to each other comment and user have to login before use those feature with google account. This app is end with only Next.js as Front-end and Back-end with React Query for server fetch, Tailwind, Typescript and prisma that make life a lot easier. and this app completely realtime with socket.io. There is many thing that i have never such as next/api prisma after i create this web i thing next.js pretty good and with Typescript my code is easier (or harder haha) to make it work as it should be',
    tools:
      'Next.js - Fullstack, React Query, Typescript, Tailwind, Socket.io, Prisma, MongoDB',
    linkTitle: 'GitHub Link',
    videos: [retro1, retro2, retro3, retro4],
    link: 'https://github.com/thasuohm/retrospective-app',
  },
]
