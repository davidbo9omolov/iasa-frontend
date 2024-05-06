export enum GlobalRoutes {
  AnalystShop = 'AnalystShop',
  Applicant = 'Applicant',
  ForStudent = 'ForStudent',
  Articles = 'Articles',
  Contacts = 'Contacts',
  test = 'test',
}

export enum LinkRoutes {
  Home = '/',
  AnalystShop = '/analyst-shop',
  Applicant = '/applicant',
  ForStudent = '/for-student',
  Articles = '/articles',
  Contacts = '/contacts',
}

export const routes = [
  {
    name: GlobalRoutes.Applicant,
    path: LinkRoutes.Applicant,
    dropdown: [
      {
        name: 'Вступ',
        path: '/entry',
      },
      {
        name: 'Заходи',
        path: '/activities',
      },
      {
        name: 'Ресури',
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
]

export const socialNetworks = [
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/',
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/',
  },
  {
    name: 'TikTok',
    link: 'https://www.tiktok.com/',
  },
  {
    name: 'Youtube',
    link: 'https://www.youtube.com/',
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
