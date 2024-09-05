import en from '@/translations/en.json';
import ja from '@/translations/ja.json';
import zh from '@/translations/zh.json';

export const resources = {
  ja: {
    translation: ja,
  },
  en: {
    translation: en,
  },
  zh: {
    translation: zh,
  },
};

export type Language = keyof typeof resources;
