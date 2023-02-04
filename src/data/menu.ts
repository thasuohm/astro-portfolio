type menu = {
  id: string
  label: string
  highlight?: boolean
}

export const menuList: menu[] = [
  {
    id: '#aboutme',
    label: '# About me',
  },
  {
    id: '#education',
    label: '# Education',
  },
  {
    id: '#internship',
    label: '# Internship',
  },
  {
    id: '#stack',
    label: '# My Stack',
  },
  {
    id: '#projects',
    label: '# My Projects',
    highlight: true,
  },
]
