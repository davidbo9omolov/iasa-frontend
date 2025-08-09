import PresidiumCard from '@/components/presidium-board/PresidiumBoard'
import SelectedUserPresidiumCard from '@/components/selectedUserPresidiumCard/SelectedUserPresidiumCard'
import { SEO } from '@/seo/SEO'
import { META, getLocaleFromPath } from '@/seo/meta'
import JsonLd from '@/seo/JsonLd'
import { BASE_URL } from '@/seo/site'

const AboutUs = () => {
  return (
    <div className={`w-full relative`}>
      <h1 className="sr-only">{getLocaleFromPath(window.location.pathname) === 'en' ? 'About us' : 'Про нас'}</h1>
      <SEO
        title={META[getLocaleFromPath(window.location.pathname)].about.title}
        description={META[getLocaleFromPath(window.location.pathname)].about.description}
        indexable
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: getLocaleFromPath(window.location.pathname) === 'en' ? 'Home' : 'Головна',
              item: `${BASE_URL}/${getLocaleFromPath(window.location.pathname)}/home`,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: getLocaleFromPath(window.location.pathname) === 'en' ? 'About us' : 'Про нас',
            },
          ],
        }}
      />
      <PresidiumCard />
      <SelectedUserPresidiumCard />
    </div>
  )
}

export default AboutUs
