import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import resources from '../public/locale'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: window.location.pathname.split('/')[1] || 'ua',
    fallbackLng: 'ua',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources,
    ns: ['home'],
  })

export default i18n
