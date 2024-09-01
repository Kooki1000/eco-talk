import type { Language } from '@/i18n/resources';

import type { Tables } from './database.types';

export type VariantColor = 'red' | 'orange' | 'green' | 'blue' | 'purple';

export type DetailedPost = Tables<'posts'> & {
  profiles: Tables<'profiles'>;
  replies: DetailedReply[];
};

export type DetailedReply = Tables<'replies'> & {
  profiles: Tables<'profiles'>;
};

export interface UserDataType {
  name: string;
  avatar?: string;
}

export interface CalendarDataType {
  id: string;
  type:
    | 'burnable'
    | 'nonBurnable'
    | 'bulky'
    | 'recyclable'
    | 'plastic'
    | 'other';
  date: string;
}

export interface PostDataType {
  id: string;
  cityId: string;
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
  id: string;

  // TODO: Require replyId
  replyId?: string;
  user: UserDataType;
  text: string;
  likes: number;
  postedAt: Date;
  langCode: Language;
  isLiked?: boolean;
}
