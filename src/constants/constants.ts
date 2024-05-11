import { languageCheck } from '@/i18n.ts'

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
  },
  {
    name: GlobalRoutes.Contacts,
    path: LinkRoutes.Contacts,
  },
  {
    name: GlobalRoutes.AnalystShop,
    path: LinkRoutes.AnalystShop,
  },
  {
    name: GlobalRoutes.Articles,
    path: LinkRoutes.Articles,
  },
  {
    name: GlobalRoutes.AboutUs,
    path: LinkRoutes.AboutUs,
  },
]
export const translations = {
  dropdown: [
    {
      name: 'ua',
      path: '/ua',
    },
    {
      name: 'en',
      path: '/en',
    },
  ],
}

export const socialNetworks = [
  {
    name: 'Facebook',
    path: 'https://www.facebook.com/',
  },
  {
    name: 'Instagram',
    path: 'https://www.instagram.com/',
  },
  {
    name: 'TikTok',
    path: 'https://www.tiktok.com/',
  },
  {
    name: 'Youtube',
    path: 'https://www.youtube.com/',
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
  },
  {
    title: 'Abiturients',
    description: 'AbiturientsDescription',
  },
  {
    title: 'Events',
    description: 'EventsDescription',
  },
  {
    title: 'Inform',
    description: 'InformDescription',
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
