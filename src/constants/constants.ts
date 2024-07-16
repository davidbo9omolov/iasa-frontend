import { languageCheck } from '@/i18n.ts'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'

import { IMG_IASA_1, IMG_IASA_2, IMG_IASA_3, IMG_IASA_4, IMG_IASA_5 } from '@/assets'
import { TeamCard1, TeamCard2, TeamCard3 } from '@/assets'
import { Banner1, Banner2, Banner3, Banner4, Banner5, Banner6, Banner7, Banner8, Banner9 } from '@/assets'

export enum GlobalRoutes {
  AnalystShop = 'AnalystShop',
  Applicant = 'Applicant',
  ForStudent = 'ForStudent',
  Articles = 'Articles',
  Contacts = 'Contacts',
  AboutUs = 'AboutUs',
}

export const ReactRoutes = {
  Home: `/${languageCheck}/home`,
  AnalystShop: `/${languageCheck}/analyst-shop`,
  Applicant: `/${languageCheck}/applicant`,
  ForStudent: `/${languageCheck}/for-student`,
  Articles: 'https://iasastudentcouncil.github.io/iasa-sc-blog/',
  Contacts: `/${languageCheck}/contacts`,
  AboutUs: `/${languageCheck}/about-us`,
  Entry: `/${languageCheck}/applicant/entry`,
  Activities: `/${languageCheck}/applicant/activities`,
  Resources: `/${languageCheck}/applicant/resources`,
}

export enum LinkRoutes {
  Home = '/home',
  AnalystShop = '/analyst-shop',
  Applicant = '/applicant',
  ForStudent = '/for-student',
  Articles = 'https://iasastudentcouncil.github.io/iasa-sc-blog/',
  Contacts = '/contacts',
  AboutUs = '/about-us',
}

export const routes = [
  {
    name: GlobalRoutes.Applicant,
    path: LinkRoutes.Applicant,
    withArrow: false,
    dropdown: [
      {
        name: 'Entry',
        path: '/entry',
      },
      {
        name: 'Activities',
        path: '/activities',
      },
      {
        name: 'Resources',
        path: '/resources',
      },
    ],
  },
  {
    name: GlobalRoutes.ForStudent,
    path: LinkRoutes.ForStudent,
    withArrow: true,
  },
  {
    name: GlobalRoutes.Articles,
    blankLink: LinkRoutes.Articles,
    withArrow: true,
  },
  {
    name: GlobalRoutes.AnalystShop,
    path: LinkRoutes.AnalystShop,
    withArrow: true,
  },
  {
    name: GlobalRoutes.AboutUs,
    path: LinkRoutes.AboutUs,
    withArrow: false,
  },
  {
    name: GlobalRoutes.Contacts,
    path: LinkRoutes.Contacts,
    withArrow: false,
  },
]
export const translations = {
  dropdown: [
    {
      name: 'UA',
      path: '/ua',
    },
    {
      name: 'EN',
      path: '/en',
    },
  ],
}

export const socialNetworks = [
  {
    name: 'Instagram',
    icon: FaInstagram,
    path: 'https://www.instagram.com/studrada_iasa',
  },
  {
    name: 'Linkedin',
    icon: FaLinkedinIn,
    path: 'https://www.linkedin.com/company/iasa-sc',
  },
  {
    name: 'Facebook',
    icon: FaFacebookF,
    path: 'https://www.facebook.com/studrada.iasa',
  },
  {
    name: 'TikTok',
    icon: FaTiktok,
    path: 'https://www.tiktok.com/@iasa.sc',
  },
  {
    name: 'Youtube',
    icon: FaYoutube,
    path: 'https://www.youtube.com/@IASAChannel',
  },
]

export const sliderCardsInformation = [
  {
    type: 'project',
    image: Banner3,
    path: '/#',
  },
  {
    type: 'inform',
    image: Banner4,
    path: '/#',
  },
  {
    type: 'abit',
    image: Banner5,
    path: '/#',
  },
  {
    type: 'it',
    image: Banner9,
    path: '/#',
  },
  {
    type: 'media',
    image: Banner7,
    path: '/#',
  },
  {
    type: 'educational',
    image: Banner6,
    path: '/#',
  },
  {
    type: 'design',
    image: Banner1,
    path: '/#',
  },
  {
    type: 'merch',
    image: Banner2,
    path: '/#',
  },
  {
    type: 'tiktok',
    image: Banner8,
    path: '/#',
  },
]

export const whatDoWeDoInformation = [
  {
    title: 'Interests',
    description: 'InterestsDescription',
    dropdown: [
      {
        description: 'InterestsDescription',
      },
    ],
  },
  {
    title: 'Abiturients',
    description: 'AbiturientsDescription',
    dropdown: [
      {
        description: 'AbiturientsDescription',
      },
    ],
  },
  {
    title: 'Events',
    description: 'EventsDescription',
    dropdown: [
      {
        description: 'EventsDescription',
      },
    ],
  },
  {
    title: 'Inform',
    description: 'InformDescription',
    dropdown: [
      {
        description: 'InformDescription',
      },
    ],
  },
]

export const teamCardsInformation = [
  {
    name: 'Андрій',
    surname: 'Кулєшов',
    position: 'Голова Студради (President)',
    image: TeamCard1,
    email: 'an.kulieshov@gmail.com',
    socialNetworks: [
      {
        name: 'Linkedin',
        link: 'https://www.linkedin.com/in/andead422/',
      },
    ],
  },
  {
    name: 'Валерія',
    surname: 'Василенко',
    position: 'Cекретар (Secretary)',
    image: TeamCard2,
    email: 'vasylenko.valeria@lll.kpi.ua',
    socialNetworks: [
      {
        name: 'Instagram',
        link: 'https://www.instagram.com/l_vasilenko_?igsh=MW8xbmN0MmQxM2p5cg%3D%3D&utm_source=qr',
      },
      {
        name: 'Telegram',
        link: 'https://t.me/ayavriik',
      },
    ],
  },
  {
    name: 'Олександра',
    surname: 'Коваленко',
    position: 'Перша Заступниця (First VP)',
    socialNetworks: [
      {
        name: 'Instagram',
        link: 'https://www.instagram.com/polinikira?igsh=c2tyZGVwbTdwMTli&utm_source=qr',
      },
    ],
  },
  {
    name: 'Ірина',
    surname: 'Поліник',
    position: 'Заступниця (VP)',
    image: TeamCard3,
    socialNetworks: [
      {
        name: 'Linkedin',
        link: 'https://www.linkedin.com/in/%D1%81%D0%B0%D1%88%D0%B0-%D0%BA%D0%BE%D0%B2%D0%B0%D0%BB%D0%B5%D0%BD%D0%BA%D0%BE-06136a23a/',
      },
      {
        name: 'Instagram',
        link: 'https://www.instagram.com/polinikira?',
      },
    ],
  },
]

export const activityImages = [
  {
    image: IMG_IASA_1,
  },
  {
    image: IMG_IASA_2,
  },
  {
    image: IMG_IASA_3,
  },
  {
    image: IMG_IASA_4,
  },
  {
    image: IMG_IASA_5,
  },
]

export const telegramChannels = [
  {
    title: 'IASA SC',
    link: 'https://t.me/IASA_Student_Council',
    subText: 'sc',
  },
  {
    title: 'IASA ABIT ',
    link: 'https://t.me/abitiasa',
    subText: 'abit',
  },
  {
    title: 'IASAevent ',
    link: 'https://t.me/iasa_event',
    subText: 'event',
  },
  {
    title: 'IASAedu ',
    link: 'https://t.me/iasa_edu',
    subText: 'edu',
  },
  {
    title: 'IASA Analytics ',
    link: 'https://t.me/iasa_analytics',
    subText: 'anal',
  },
]

export const telegramBots = [
  {
    title: 'IASA Bot',
    link: 'https://t.me/iasa_mate_bot',
  },
  {
    title: 'IASA Suggestions',
    link: 'https://t.me/IASAsuggestionBot',
  },
  {
    title: 'IASA Student Support ',
    link: 'https://t.me/iasa_stud_support_bot',
  },
]
