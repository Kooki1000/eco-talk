import { getLocales } from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { resources } from './resources';
import { getLanguage } from './utils';
export * from './utils';

const initializeI18n = async () => {
  const language = await getLanguage();

  i18n.use(initReactI18next).init({
    resources,
    lng: language || getLocales()[0].languageCode || 'jp',
    fallbackLng: 'jp',
    compatibilityJSON: 'v3', // By default React Native projects does not support Intl
    interpolation: {
      escapeValue: false, // Escape passed in values to avoid XSS injections
    },
  });
};

initializeI18n();

export default i18n;
