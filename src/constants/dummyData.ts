import type { Language } from '@/i18n/resources';

export const loremText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id malesuada mi, ut tempus diam. Morbi a purus sit amet neque gravida pellentesque. Morbi rhoncus sed leo sed dictum. Nam vulputate consectetur neque, ut dictum justo rhoncus et. Donec pellentesque sodales arcu eget sagittis. Donec faucibus congue pulvinar. Donec est mauris, molestie ac dolor id, sollicitudin iaculis diam. Vivamus sodales blandit auctor.`;

type PostDataType = {
  id: number;
  variant: 'red' | 'orange' | 'green' | 'blue' | 'purple';
  langCode: Language;
};

export const postsData: PostDataType[] = [
  { id: 1, variant: 'red', langCode: 'en' },
  { id: 2, variant: 'orange', langCode: 'ja' },
  { id: 3, variant: 'green', langCode: 'en' },
  { id: 4, variant: 'blue', langCode: 'ja' },
  { id: 5, variant: 'purple', langCode: 'en' },
  { id: 6, variant: 'green', langCode: 'en' },
  { id: 7, variant: 'purple', langCode: 'ja' },
  { id: 8, variant: 'blue', langCode: 'en' },
  { id: 9, variant: 'orange', langCode: 'en' },
  { id: 10, variant: 'red', langCode: 'ja' },
  { id: 11, variant: 'green', langCode: 'en' },
  { id: 12, variant: 'blue', langCode: 'ja' },
  { id: 13, variant: 'purple', langCode: 'en' },
];
