import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import resources from '../public/locale'

const languages = ['ua', 'en']
const languageCheck = languages.includes(window.location.pathname.split('/')[1])
  ? window.location.pathname.split('/')[1]
  : 'ua'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: languageCheck,
    fallbackLng: 'ua',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources,
    ns: ['home'],
  })

export default i18n
