import { useEffect } from 'react'
import { BASE_URL, DEFAULT_OG_IMAGE, SITE_NAME_EN, SITE_NAME_UA } from './site'

type SEOProps = {
  title: string
  description: string
  path?: string
  image?: string
  locale?: 'ua' | 'en'
  keywords?: string
  indexable?: boolean
}

function upsertMeta(attrKey: 'name' | 'property', attrValue: string, content: string) {
  const selector = `meta[${attrKey}="${attrValue}"]`
  let element = document.head.querySelector<HTMLMetaElement>(selector)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attrKey, attrValue)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

function setCanonical(href: string) {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', 'canonical')
    document.head.appendChild(element)
  }
  element.setAttribute('href', href)
}

function setAlternate(hreflang: string, href: string) {
  // Remove existing specific hreflang alternate if any
  const existing = document.head.querySelectorAll<HTMLLinkElement>(`link[rel="alternate"][hreflang="${hreflang}"]`)
  existing.forEach((el) => el.parentElement?.removeChild(el))
  const element = document.createElement('link')
  element.setAttribute('rel', 'alternate')
  element.setAttribute('hreflang', hreflang)
  element.setAttribute('href', href)
  document.head.appendChild(element)
}

export const SEO = ({ title, description, path, image, locale, keywords, indexable = true }: SEOProps) => {
  useEffect(() => {
    const currentLocale: 'ua' | 'en' = (locale || window.location.pathname.split('/')[1] || 'ua') as 'ua' | 'en'
    const siteName = currentLocale === 'ua' ? SITE_NAME_UA : SITE_NAME_EN
    const pathname = path || window.location.pathname
    const url = `${BASE_URL}${pathname}`
    const ogImage = image || DEFAULT_OG_IMAGE

    // Document title
    document.title = title

    // Meta tags
    upsertMeta('name', 'description', description)
    if (keywords) upsertMeta('name', 'keywords', keywords)
    upsertMeta('name', 'robots', indexable ? 'index, follow' : 'noindex, nofollow')
    upsertMeta('name', 'googlebot', indexable ? 'index, follow' : 'noindex, nofollow')

    // Canonical
    setCanonical(url)

    // Hreflang alternates
    const segments = pathname.split('/')
    if (segments.length > 1) {
      segments[1] = 'ua'
      setAlternate('uk', `${BASE_URL}${segments.join('/')}`)
      segments[1] = 'en'
      setAlternate('en', `${BASE_URL}${segments.join('/')}`)
      // x-default → UA
      segments[1] = 'ua'
      setAlternate('x-default', `${BASE_URL}${segments.join('/')}`)
    }

    // Open Graph
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:site_name', siteName)
    upsertMeta('property', 'og:image', ogImage)

    // Twitter
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', ogImage)
  }, [title, description, path, image, locale, keywords, indexable])

  return null
}

export default SEO
