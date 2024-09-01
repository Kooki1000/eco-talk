import type { Tables } from './database.types';

export type VariantColor = 'red' | 'orange' | 'green' | 'blue' | 'purple';

export type DetailedPost = Tables<'posts'> & {
  profiles: Tables<'profiles'>;
  isLiked?: boolean;
  replies: DetailedReply[];
};

export type DetailedReply = Tables<'replies'> & {
  profiles: Tables<'profiles'>;
  isLiked?: boolean;
};
