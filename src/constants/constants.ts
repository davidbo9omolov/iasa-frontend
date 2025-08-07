import { languageCheck } from '@/i18n.ts'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'

import { IMG_IASA_1, IMG_IASA_2, IMG_IASA_3, IMG_IASA_4, IMG_IASA_5 } from '@/assets'
import {
  TeamCard1,
  TeamCard2,
  TeamCard3,
  TeamCard4,
  TeamCard5,
  TeamCard6,
  TeamCard7,
  TeamCard8,
  TeamCard9,
  TeamCard11,
} from '@/assets'
import { Banner1, Banner2, Banner3, Banner4, Banner5, Banner6, Banner7, Banner9 } from '@/assets'

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
  AnalystShop: `https://t.me/analyst_shop`,
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
  AnalystShop = 'https://t.me/analyst_shop',
  Applicant = '/applicant',
  ForStudent = '/for-student',
  Articles = 'https://iasastudentcouncil.github.io/iasa-sc-blog/',
  Contacts = '/contacts',
  AboutUs = '/about-us',
}

export const routes = [
  // {
  //   name: GlobalRoutes.Applicant,
  //   path: LinkRoutes.Applicant,
  //   withArrow: false,
  //   dropdown: [
  //     {
  //       name: 'Entry',
  //       path: '/entry',
  //     },
  //     {
  //       name: 'Activities',
  //       path: '/activities',
  //     },
  //     {
  //       name: 'Resources',
  //       path: '/resources',
  //     },
  //   ],
  // },
  // {
  //   name: GlobalRoutes.ForStudent,
  //   path: LinkRoutes.ForStudent,
  //   withArrow: true,
  // },
  {
    name: GlobalRoutes.Articles,
    blankLink: LinkRoutes.Articles,
    withArrow: true,
  },
  {
    name: GlobalRoutes.AnalystShop,
    blankLink: LinkRoutes.AnalystShop,
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
    position: 'president',
    image: TeamCard1,
    email: 'melika.maria@lll.kpi.ua',
    socialNetworks: [
      {
        name: 'Linkedin',
        link: 'https://www.linkedin.com/in/maria-melika-860ba6338',
      },
      {
        name: 'Instagram',
        link: 'https://www.instagram.com/veswitch',
      },
      {
        name: 'Telegram',
        link: 'https://t.me/mashenka2277',
      },
    ],
  },
  {
    position: 'secretary',
    image: TeamCard4,
    email: 'rrragulinaaa@gmail.com',
    socialNetworks: [
      {
        name: 'Linkedin',
        link: 'http://linkedin.com/in/rahulina',
      },
      {
        name: 'Instagram',
        link: 'https://www.instagram.com/rrragulina',
      },
      {
        name: 'Telegram',
        link: 'https://t.me/rrragulina',
      },
    ],
  },
  {
    position: 'firstDeputyChairman',
    image: TeamCard2,
    email: 'valeriaplusnina879@gmail.com',
    socialNetworks: [
      {
        name: 'Instagram',
        link: 'https://www.instagram.com/lerrrich',
      },
    ],
  },
  {
    position: 'deputyChairman',
    image: TeamCard3,
    email: 'lisazayarchenko@gmail.com',
    socialNetworks: [
      {
        name: 'Telegram',
        link: 'https://t.me/jwbaelis',
      },
      {
        name: 'Instagram',
        link: 'https://www.instagram.com/baelis_jw',
      },
    ],
  },
]

export const presidiumCardsInformation = [
  {
    position: 'president',
    image: TeamCard1,
    email: 'melika.maria@lll.kpi.ua',
    socialNetworks: [
      {
        name: 'Linkedin',
        link: 'https://www.linkedin.com/in/maria-melika-860ba6338',
      },
      {
        name: 'Instagram',
        link: 'https://www.instagram.com/veswitch',
      },
      {
        name: 'Telegram',
        link: 'https://t.me/mashenka2277',
      },
    ],
  },
  {
    position: 'secretary',
    image: TeamCard4,
    email: 'rrragulinaaa@gmail.com',
    socialNetworks: [
      {
        name: 'Linkedin',
        link: 'http://linkedin.com/in/rahulina',
      },
      {
        name: 'Instagram',
        link: 'https://www.instagram.com/rrragulina',
      },
      {
        name: 'Telegram',
        link: 'https://t.me/rrragulina',
      },
    ],
  },
  {
    position: 'firstDeputyChairman',
    image: TeamCard2,
    email: 'valeriaplusnina879@gmail.com',
    socialNetworks: [
      {
        name: 'Instagram',
        link: 'https://www.instagram.com/lerrrich',
      },
    ],
  },
  {
    position: 'deputyChairman',
    image: TeamCard3,
    email: 'lisazayarchenko@gmail.com',
    socialNetworks: [
      {
        name: 'Telegram',
        link: 'https://t.me/jwbaelis',
      },
      {
        name: 'Instagram',
        link: 'https://www.instagram.com/baelis_jw',
      },
    ],
  },
  {
    position: 'abithead',
    image: TeamCard5,
    email: 'oleksandrabgdnv@gmail.com',
    socialNetworks: [
      {
        name: 'Linkedin',
        link: 'https://www.linkedin.com/in/oleksandra-bohdanova-632b8b365',
      },
      {
        name: 'Instagram',
        link: 'https://www.instagram.com/itsasha_',
      },
      {
        name: 'Telegram',
        link: 'https://t.me/itsasha8',
      },
    ],
  },
  {
    position: 'designhead',
    image: TeamCard6,
    email: 'katerina.dorokhina95@gmail.com',
    socialNetworks: [
      {
        name: 'Linkedin',
        link: 'https://www.linkedin.com/in/kateryna-dorokhina-949140320',
      },
      {
        name: 'Instagram',
        link: 'https://www.instagram.com/katerina_do_95/',
      },
      {
        name: 'Telegram',
        link: 'https://t.me/katerina_do_95',
      },
    ],
  },
  {
    position: 'informhead',
    image: TeamCard7,
    email: 'anya.kruchok5555@gmail.com',
    socialNetworks: [
      {
        name: 'Linkedin',
        link: 'https://www.linkedin.com/in/anna-k-331389312',
      },
    ],
  },
  {
    position: 'megiahead',
    image: TeamCard8,
    socialNetworks: [
      {
        name: 'Instagram',
        link: 'https://www.instagram.com/kkkkkkerber',
      },
      {
        name: 'Telegram',
        link: 'https://t.me/kkkerber',
      },
    ],
  },
  {
    position: 'merchhead',
    image: TeamCard9,
    socialNetworks: [
      {
        name: 'Telegram',
        link: 'https://t.me/sa_lico',
      },
    ],
  },
  {
    position: 'eventhead',
    image: TeamCard11,
    email: 'o.a.polul@gmail.com',
    socialNetworks: [
      {
        name: 'Linkedin',
        link: 'https://www.linkedin.com/in/olha-poliuliakh-9166b1313',
      },
      {
        name: 'Instagram',
        link: 'https://www.instagram.com/olya.pllkh',
      },
      {
        name: 'Telegram',
        link: 'https://t.me/olya_poliuliakh',
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
    title: 'IASA ABIT',
    link: 'https://t.me/abitiasa',
    subText: 'abit',
  },
  {
    title: 'IASAevent',
    link: 'https://t.me/iasa_event',
    subText: 'event',
  },
  {
    title: 'IASAedu',
    link: 'https://t.me/iasa_edu',
    subText: 'edu',
  },
  {
    title: 'IASA Analytics',
    link: 'https://t.me/iasa_analytics',
    subText: 'anal',
  },
]

export const telegramBots = [
  {
    title: 'IASA Bot',
    link: 'https://t.me/iasa_mate_bot',
    subText: 'bot',
  },
  {
    title: 'IASA Suggestions',
    link: 'https://t.me/IASAsuggestionBot',
    subText: 'sug',
  },
  {
    title: 'IASA Student Support',
    link: 'https://t.me/iasa_stud_support_bot',
    subText: 'sup',
  },
]
