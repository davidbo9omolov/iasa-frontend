import { languageCheck } from '@/i18n.ts'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'

import { IMG_IASA_1, IMG_IASA_2, IMG_IASA_3, IMG_IASA_4, IMG_IASA_5 } from '@/assets'

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
  Articles: `/${languageCheck}/articles`,
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
  Articles = '/articles',
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
    path: LinkRoutes.Articles,
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
    title: 'Проєктний',
    image: '#',
    description:
      'Ініціює та втілює в життя різноманітні заходи Студради, супроводжуючи їх на всіх етапах: від народження ідеї до фінальної реалізації.',
    path: '/#',
  },
  {
    title: 'Інформ',
    image: '#',
    description:
      "Веде IASA Student Council та IASAevent, пише дописи для інших відділів Студради, публікує інтерв'ю з викладачами та редагує все, що містить літери.",
    path: '/#',
  },
  {
    title: 'Абіт',
    image: '#',
    description:
      'Знайомить абітурієнтів з ІПСА та сферою ІТ, влаштовуючи офлайн й онлайн-івенти. Пише статті, інформуючи про наш інститут і вступ.',
    path: '/#',
  },
  {
    title: 'ІТ',
    image: '#',
    description:
      'Розробляє й підтримує телеграм-ботів та вебпродукти для студентів. Бере участь в організації щорічного хакатону та допомагає у створенні аналітики викладачів ІПСА.',
    path: '/#',
  },
  {
    title: 'Медіа',
    image: '#',
    description:
      'Відповідає за естетичну складову Студради: веде інстаграм, фотографує на івентах і залишає позитивні враження у світлинах.',
    path: '/#',
  },
  {
    title: 'Освітній',
    image: '#',
    description:
      'Веде канал IASAedu з корисною інформацією про сферу ІТ. Допомагає з розв’язанням питань, пов’язаних із процесом навчання. Щорічно створює статті про вибіркові дисципліни та розробляє аналітику викладачів.',
    path: '/#',
  },
  {
    title: 'Дизайнерський',
    image: '#',
    description:
      'Відповідає за графічні матеріали для заходів, подій та проєктів. Створює дизайни для ботів, груп, чатів та іншого.',
    path: '/#',
  },
  {
    title: 'Мерч',
    image: '#',
    description: "Об'єднує ІПСАшників одягом, наліпками й іншою продукцією з унікальним дизайном.",
    path: '/#',
  },
  {
    title: 'Тікток',
    image: '#',
    description: "Об'єднує ІПСАшників одягом, наліпками й іншою продукцією з унікальним дизайном.",
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
    name: 'Name',
    surname: 'Surname',
    position: 'Position',
  },
  {
    name: 'Name',
    surname: 'Surname',
    position: 'Position',
  },
  {
    name: 'Name',
    surname: 'Surname',
    position: 'Position',
  },
  {
    name: 'Name',
    surname: 'Surname',
    position: 'Position',
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
  },
  {
    title: 'IASA ABIT ',
    link: 'https://t.me/abitiasa',
  },
  {
    title: 'IASAevent ',
    link: 'https://t.me/iasa_event',
  },
  {
    title: 'IASAedu ',
    link: 'https://t.me/iasa_edu',
  },
  {
    title: 'IASA Analytics ',
    link: 'https://t.me/iasa_analytics',
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
