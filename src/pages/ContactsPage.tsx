import ContactHeader from '@/components/contact-header/ContactHeader.tsx'
import ContactTelegram from '@/components/contact-telegram/ContactTelegram.tsx'
import NavigationMap from 'components/navigation-map/NavigationMap.tsx'
import { SEO } from '@/seo/SEO'
import { META, getLocaleFromPath } from '@/seo/meta'
import JsonLd from '@/seo/JsonLd'
import { BASE_URL } from '@/seo/site'

const ContactsPage = () => {
  return (
    <div className={'w-full h-full relative'}>
      <h1 className="sr-only">{getLocaleFromPath(window.location.pathname) === 'en' ? 'Contacts' : 'Контакти'}</h1>
      <SEO
        title={META[getLocaleFromPath(window.location.pathname)].contacts.title}
        description={META[getLocaleFromPath(window.location.pathname)].contacts.description}
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
              name: getLocaleFromPath(window.location.pathname) === 'en' ? 'Contacts' : 'Контакти',
            },
          ],
        }}
      />
      <ContactHeader />
      <ContactTelegram />
      <NavigationMap />
    </div>
  )
}

export default ContactsPage
