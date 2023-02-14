import gmail from '/images/gmail.png'
import github from '/images/github.png'
import tel from '/images/tel.jpg'

type contact = {
  img: string
  contactType: string
  link?: string
  label: string
}

export const contacts: contact[] = [
  {
    img: github,
    contactType: 'GitHub',
    link: 'https://github.com/thasuohm',
    label: 'thasuohm',
  },
  {
    img: gmail,
    contactType: 'Gmail',
    link: 'thanapat.suwanaaard@gmail.com',
    label: 'thanapat.suwanaaard@gmail.com',
  },
  {
    img: tel,
    contactType: 'Tel',
    label: '061-896-9299',
  },
]
