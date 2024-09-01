import type { PostgrestError } from '@supabase/supabase-js';
import { useMutation, useQuery } from '@tanstack/react-query';

import { CHIYODA_ID, variantColors } from '@/constants';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { supabase } from '@/lib/supabase';
import type { Tables } from '@/types/database.types';
import type { DetailedPost } from '@/types/types';

interface CreatePostData {
  userId: string;
  cityId?: string;
  content: string;
  img_url?: string;
}

export const useCreatePost = () => {
  return useMutation({
    async mutationFn(data: CreatePostData) {
      const { userId, content, img_url, cityId = CHIYODA_ID } = data;

      const randomVariant =
        variantColors[Math.floor(Math.random() * variantColors.length)];

      const { error } = await supabase.from('posts').insert({
        author: userId,
        city: cityId,
        content,
        img_url,
        variant: randomVariant,
      });

      if (error) {
        throw new Error(error.message);
      }

      return;
    },
  });
};

interface FetchPostsData {
  userId?: string;
  cityId?: string;
}

export const useFetchPosts = ({
  userId,
  cityId = CHIYODA_ID,
}: FetchPostsData = {}) => {
  return useQuery({
    queryKey: [QUERY_KEYS.POSTS, cityId],
    queryFn: async () => {
      const { data: postsData, error: postsError } = await supabase
        .from('posts')
        .select('*, profiles(*), replies(*, profiles(*))')
        .eq('city', cityId)
        .order('created_at', { ascending: false });

      if (postsError) {
        throw new Error(postsError.message);
      }

      if (!userId) {
        return postsData as DetailedPost[];
      }

      const { data: likesData, error: likesError } = (await supabase
        .from('likes')
        .select('*')
        .eq('user', userId)) as {
        data: Tables<'likes'>[] | null;
        error: PostgrestError | null;
      };

      if (likesError || !likesData) {
        return postsData as DetailedPost[];
      }

      return postsData.map((post: DetailedPost) => ({
        ...post,
        isLiked: likesData.some((like) => like.post === post.id),
      })) as DetailedPost[];
    },
  });
};
