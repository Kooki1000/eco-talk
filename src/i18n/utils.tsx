// Modified from https://github.com/obytes/react-native-template-obytes/blob/master/src/core/i18n/utils.tsx

import AsyncStorage from '@react-native-async-storage/async-storage';
import type TranslateOptions from 'i18next';
import i18n from 'i18next';
import memoize from 'lodash.memoize';
import { useCallback, useEffect, useState } from 'react';
import { NativeModules, Platform } from 'react-native';
import RNRestart from 'react-native-restart';

import type { Language, resources } from './resources';
import type { RecursiveKeyOf } from './types';

type DefaultLocale = typeof resources.en.translation;
export type TxKeyPath = RecursiveKeyOf<DefaultLocale>;

export const LOCAL = 'local';

export const getLanguage = async (): Promise<Language | null> => {
  const item = await AsyncStorage.getItem(LOCAL);
  return item as Language | null;
};

export const translate = memoize(
  (key: TxKeyPath, options = undefined) =>
    i18n.t(key, options) as unknown as string,
  (key: TxKeyPath, options: typeof TranslateOptions) =>
    options ? key + JSON.stringify(options) : key
);

export const changeLanguage = (lang: Language) => {
  i18n.changeLanguage(lang);

  if (Platform.OS === 'ios' || Platform.OS === 'android') {
    if (__DEV__) NativeModules.DevSettings.reload();
    else RNRestart.restart();
  } else if (Platform.OS === 'web') {
    window.location.reload();
  }
};

export const useSelectedLanguage = () => {
  const [language, setLanguage] = useState<Language | null>(null);

  useEffect(() => {
    const fetchLanguage = async () => {
      const lang = await getLanguage();
      setLanguage(lang);
    };

    fetchLanguage();
  }, []);

  const setLanguageAsync = useCallback(async (lang: Language) => {
    setLanguage(lang);
    await AsyncStorage.setItem(LOCAL, lang);
    if (lang !== undefined) changeLanguage(lang);
  }, []);

  return { language, setLanguage: setLanguageAsync };
};
