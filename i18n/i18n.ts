
// You need to install i18next, react-i18next, and i18next-browser-languagedetector
// npm install i18next react-i18next i18next-browser-languagedetector
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en.json';
import translationTR from './locales/tr.json';
import translationBG from './locales/bg.json';
import translationSR from './locales/sr.json';

const resources = {
  en: { ...translationEN },
  tr: { ...translationTR },
  bg: { ...translationBG },
  sr: { ...translationSR },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'tr',
    debug: false,
    interpolation: {
      escapeValue: false, 
    },
    detection: {
      order: ['queryString', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
      caches: ['cookie'],
    },
  });

export default i18n;
