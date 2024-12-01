import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en';
import ru from './locales/ru';
import he from './locales/he';

// Get stored language from localStorage
const getStoredLanguage = () => {
  try {
    const stored = localStorage.getItem('techfix-storage');
    if (stored) {
      const { state } = JSON.parse(stored);
      return state.language || 'he';
    }
  } catch (error) {
    console.error('Error reading stored language:', error);
  }
  return 'he'; // Default to Hebrew if no stored preference
};

// Extend the i18next options type to include custom 'rtl' property
declare module 'i18next' {
  interface InitOptions {
    rtl?: string[];
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ru: { translation: ru },
      he: { translation: he },
    },
    fallbackLng: 'en',
    lng: getStoredLanguage(),
    interpolation: {
      escapeValue: false,
    },
    // Languages that need RTL direction
    rtl: ['he'],
  });

export default i18n;