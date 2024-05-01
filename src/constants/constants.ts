export enum GlobalRoutes {
  AnalystShop = 'Analyst shop',
  Applicant = 'Для абітурієнтів',
  ForStudent = 'Для студента',
  Articles = 'Статті',
  Contacts = 'Контакти',
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
    name: 'TiKTok',
    link: 'https://www.tiktok.com/',
  },
  {
    name: 'Youtube',
    link: 'https://www.youtube.com/',
  },
]
