// This code is taken from the original version found at:
// https://github.com/obytes/react-native-template-obytes/blob/master/src/core/i18n/index.tsx#L24
// Original code by OBytes (https://github.com/obytes), licensed under the MIT License.

import 'dayjs/locale/ja';
import 'dayjs/locale/zh';

import dayjs from 'dayjs';
import { getLocales } from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { I18nManager } from 'react-native';

import { resources } from './resources';
import { getLanguage } from './utils';
export * from './utils';

i18n.use(initReactI18next).init({
  resources,
  lng: getLanguage() || getLocales()[0].languageCode!,
  fallbackLng: 'ja',
  compatibilityJSON: 'v3',
});

// Is it a right-to-left language?
export const isRTL: boolean = i18n.dir() === 'rtl';

I18nManager.allowRTL(isRTL);
I18nManager.forceRTL(isRTL);

dayjs.locale(`${getLanguage() || getLocales()[0].languageCode!}`);

export default i18n;
