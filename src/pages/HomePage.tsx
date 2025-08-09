import React from 'react'
import { SEO } from '@/seo/SEO'
import { META, getLocaleFromPath } from '@/seo/meta'
import JsonLd from '@/seo/JsonLd'
import { BASE_URL } from '@/seo/site'

const Intro = React.lazy(() => import('components/intro/Intro.tsx'))
const Activity = React.lazy(() => import('components/our-activity/Activity.tsx'))
const Department = React.lazy(() => import('components/department/Department.tsx'))
const WhatDoWeDo = React.lazy(() => import('components/what-do-we-do/WhatDoWeDo.tsx'))
const OurTeam = React.lazy(() => import('components/our-team/OurTeam.tsx'))
const SelectedUserTeamCard = React.lazy(() => import('components/selectedUserTeamCard/SelectedUserTeamCard.tsx'))

const HomePage = () => {
  return (
    <div className={`w-full relative`}>
      <h1 className="sr-only">
        {getLocaleFromPath(window.location.pathname) === 'en'
          ? 'IASA Student Council — Official website'
          : 'Студрада ІПСА — Офіційний сайт студентської ради'}
      </h1>
      <SEO
        title={META[getLocaleFromPath(window.location.pathname)].home.title}
        description={META[getLocaleFromPath(window.location.pathname)].home.description}
        keywords={META[getLocaleFromPath(window.location.pathname)].home.keywords}
        indexable
      />
      <JsonLd
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Студрада ІПСА / IASA Student Council',
            url: BASE_URL,
            logo: `${BASE_URL}/iasaLogo.svg`,
            sameAs: [
              'https://www.instagram.com/studrada_iasa',
              'https://www.linkedin.com/company/iasa-sc',
              'https://www.facebook.com/studrada.iasa',
              'https://www.tiktok.com/@iasa.sc',
              'https://www.youtube.com/@IASAChannel',
            ],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Студрада ІПСА',
            url: BASE_URL,
            inLanguage: getLocaleFromPath(window.location.pathname) === 'en' ? 'en' : 'uk',
          },
          {
            '@context': 'https://schema.org',
            '@type': 'SiteNavigationElement',
            name:
              getLocaleFromPath(window.location.pathname) === 'en'
                ? ['Home', 'About us', 'Contacts']
                : ['Головна', 'Про нас', 'Контакти'],
            url: [
              `${BASE_URL}/${getLocaleFromPath(window.location.pathname)}/home`,
              `${BASE_URL}/${getLocaleFromPath(window.location.pathname)}/about-us`,
              `${BASE_URL}/${getLocaleFromPath(window.location.pathname)}/contacts`,
            ],
          },
        ]}
      />
      <Intro />
      <Activity />
      <Department />
      <WhatDoWeDo />
      <OurTeam />
      <SelectedUserTeamCard />
    </div>
  )
}

export default HomePage
