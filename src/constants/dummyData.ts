import type { Language } from '@/i18n/resources';

export const loremText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id malesuada mi, ut tempus diam. Morbi a purus sit amet neque gravida pellentesque. Morbi rhoncus sed leo sed dictum. Nam vulputate consectetur neque, ut dictum justo rhoncus et. Donec pellentesque sodales arcu eget sagittis. Donec faucibus congue pulvinar. Donec est mauris, molestie ac dolor id, sollicitudin iaculis diam. Vivamus sodales blandit auctor.`;

type PostDataType = {
  variant: 'red' | 'orange' | 'green' | 'blue' | 'purple';
  langCode: Language;
};

export const postsData: PostDataType[] = [
  { variant: 'red', langCode: 'en' },
  { variant: 'orange', langCode: 'en' },
  { variant: 'green', langCode: 'en' },
  { variant: 'blue', langCode: 'en' },
  { variant: 'purple', langCode: 'en' },
];
