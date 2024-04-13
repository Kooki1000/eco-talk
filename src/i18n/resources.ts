import en from '@/translations/en.json';
import jp from '@/translations/jp.json';

export const resources = {
  jp: {
    translation: jp,
  },
  en: {
    translation: en,
  },
};

export type Language = keyof typeof resources;
