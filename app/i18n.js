import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en/translation.json';
import id from './locales/id/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      id: { translation: id }
    },
    lng: 'en', // bahasa default
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React sudah aman dari XSS
    }
  });

export default i18n;
