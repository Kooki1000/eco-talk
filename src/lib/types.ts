import type { Language } from '@/i18n/resources';

export interface UserDataType {
  name: string;
  avatar?: string;
}

export type VariantColor = 'red' | 'orange' | 'green' | 'blue' | 'purple';

export interface PostDataType {
  id: number;
  user: UserDataType;
  text: string;
  likes: number;
  postedAt: Date;
  image?: string;
  langCode: Language;
  variant?: VariantColor;
  isLiked?: boolean;
  replies?: ReplyDataType[];
}

export interface ReplyDataType {
  id: number;
  user: UserDataType;
  text: string;
  likes: number;
  postedAt: Date;
  langCode: Language;
  isLiked?: boolean;
}
