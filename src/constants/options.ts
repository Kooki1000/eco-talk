import type { Option } from '@/components/postInput';

export const languages: Option[] = [
  { value: 'ja', label: 'locales.ja' },
  { value: 'en', label: 'locales.en' },
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
