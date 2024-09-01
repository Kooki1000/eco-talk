import { useMutation, useQuery } from '@tanstack/react-query';

import { CHIYODA_ID, variantColors } from '@/constants';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { supabase } from '@/lib/supabase';

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
      const { data, error } = await supabase
        .from('posts')
        .select('*, profiles(*), replies(*, profiles(*))')
        .eq('city', cityId)
        .order('created_at', { ascending: false });

      if (error) {
        throw new Error(error.message);
      }

      return data;
    },
  });
};
