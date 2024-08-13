import type { Language } from '@/i18n/resources';

export interface UserDataType {
  name: string;
  avatar?: string;
}

export interface PostDataType {
  id: number;
  user: UserDataType;
  text: string;
  likes: number;
  postedAt: Date;
  image?: string;
  langCode: Language;
  variant?: 'red' | 'orange' | 'green' | 'blue' | 'purple';
  isLiked?: boolean;
}
