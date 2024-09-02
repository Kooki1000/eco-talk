import type { Option } from '@/components/input/customSelect';

export const languages: Option[] = [
  { value: 'ja', label: 'locales.ja' },
  { value: 'en', label: 'locales.en' },
  { value: 'zh', label: 'locales.zh' },
];

export const themes: Option[] = [
  { value: 'light', label: 'theme.light' },
  { value: 'dark', label: 'theme.dark' },
  { value: 'system', label: 'theme.system' },
];

export const sortOptions: Option[] = [
  { value: 'newest', label: 'posts.newest' },
  { value: 'oldest', label: 'posts.oldest' },
  { value: 'most-popular', label: 'posts.mostPopular' },
];
