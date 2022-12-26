import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: 'hu',
  resources: {
    en: {
      translations: require('./en/translations.json')
    },
    hu: {
      translations: require('./hu/translations.json')
    }
  },
  ns: ['translations'],
  defaultNS: 'translations'
});

i18n.languages = ['en', 'hu'];

export default i18n;