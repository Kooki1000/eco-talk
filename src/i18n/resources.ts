import en from '@/translations/en.json';
import ja from '@/translations/ja.json';

export const resources = {
  ja: {
    translation: ja,
  },
  en: {
    translation: en,
  },
};

export type Language = keyof typeof resources;
