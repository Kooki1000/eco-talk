import type { PostDataType } from '@/lib/types';

export const loremText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id malesuada mi, ut tempus diam. Morbi a purus sit amet neque gravida pellentesque. Morbi rhoncus sed leo sed dictum. Nam vulputate consectetur neque, ut dictum justo rhoncus et. Donec pellentesque sodales arcu eget sagittis. Donec faucibus congue pulvinar. Donec est mauris, molestie ac dolor id, sollicitudin iaculis diam. Vivamus sodales blandit auctor.`;

export const dummyPosts: PostDataType[] = [
  {
    id: 1,
    user: { name: 'Alice' },
    text: loremText,
    likes: 10,
    langCode: 'en',
    variant: 'red',
    isLiked: true,
    postedAt: new Date('2023-10-05T12:00:00Z'),
  },
  {
    id: 2,
    user: { name: 'Bob' },
    text: loremText,
    likes: 20,
    langCode: 'ja',
    variant: 'orange',
    isLiked: false,
    postedAt: new Date('2023-10-05T13:00:00Z'),
  },
  {
    id: 3,
    user: { name: 'Charlie' },
    text: loremText,
    likes: 30,
    langCode: 'en',
    variant: 'green',
    isLiked: false,
    postedAt: new Date('2023-10-05T14:00:00Z'),
  },
  {
    id: 4,
    user: { name: 'David' },
    text: loremText,
    likes: 40,
    langCode: 'ja',
    variant: 'blue',
    isLiked: true,
    postedAt: new Date('2023-10-05T15:00:00Z'),
  },
  {
    id: 5,
    user: { name: 'Eve' },
    text: loremText,
    likes: 50,
    langCode: 'en',
    variant: 'purple',
    isLiked: false,
    postedAt: new Date('2023-10-05T16:00:00Z'),
  },
];

type DayDataType = {
  id: number;
  type: 'burnable' | 'nonBurnable' | 'bulky' | 'recyclable' | 'other';
  date: string;
};

export const dayData: DayDataType[] = [
  { id: 1, type: 'burnable', date: '2024-08-01' },
  { id: 2, type: 'nonBurnable', date: '2024-08-02' },
  { id: 3, type: 'bulky', date: '2024-08-03' },
  { id: 4, type: 'recyclable', date: '2024-08-04' },
  { id: 5, type: 'other', date: '2024-08-05' },
  { id: 6, type: 'burnable', date: '2024-08-06' },
  { id: 7, type: 'burnable', date: '2024-08-07' },
  { id: 8, type: 'nonBurnable', date: '2024-08-08' },
  { id: 9, type: 'other', date: '2024-08-09' },
  { id: 10, type: 'bulky', date: '2024-08-10' },
  { id: 11, type: 'recyclable', date: '2024-08-11' },
  { id: 12, type: 'nonBurnable', date: '2024-08-12' },
  { id: 13, type: 'other', date: '2024-08-13' },
  { id: 14, type: 'burnable', date: '2024-08-14' },
  { id: 15, type: 'nonBurnable', date: '2024-08-15' },
  { id: 16, type: 'bulky', date: '2024-08-16' },
  { id: 17, type: 'recyclable', date: '2024-08-17' },
  { id: 18, type: 'other', date: '2024-08-18' },
  { id: 19, type: 'burnable', date: '2024-08-19' },
  { id: 20, type: 'burnable', date: '2024-08-20' },
  { id: 21, type: 'nonBurnable', date: '2024-08-21' },
  { id: 22, type: 'other', date: '2024-08-22' },
  { id: 23, type: 'bulky', date: '2024-08-23' },
  { id: 24, type: 'recyclable', date: '2024-08-24' },
  { id: 25, type: 'bulky', date: '2024-08-25' },
  { id: 26, type: 'other', date: '2024-08-26' },
  { id: 27, type: 'bulky', date: '2024-08-27' },
  { id: 28, type: 'nonBurnable', date: '2024-08-28' },
  { id: 29, type: 'bulky', date: '2024-08-29' },
  { id: 30, type: 'other', date: '2024-08-30' },
  { id: 31, type: 'other', date: '2024-08-31' },
];
