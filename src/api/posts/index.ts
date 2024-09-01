import { useMutation } from '@tanstack/react-query';

import { CHIYODA_ID, variantColors } from '@/constants';
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
