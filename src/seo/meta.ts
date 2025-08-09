type Locale = 'ua' | 'en'

type Meta = {
  title: string
  description: string
  keywords?: string
}

export function getLocaleFromPath(pathname: string): Locale {
  const seg = pathname.split('/')[1]
  return seg === 'en' ? 'en' : 'ua'
}

// Build META from i18n resources to keep a single source of truth
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import resources from '../../public/locale'

export const META: Record<Locale, Record<string, Meta>> = {
  ua: (resources.ua && resources.ua.seo) || {},
  en: (resources.en && resources.en.seo) || {},
} as Record<Locale, Record<string, Meta>>
