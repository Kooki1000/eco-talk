import { useMutation } from '@tanstack/react-query';

import { supabase } from '@/lib/supabase';

interface LikePostArgs {
  userId: string;
  postId: string;
}

export const useLikePost = () => {
  return useMutation({
    mutationFn: async ({ userId, postId }: LikePostArgs) => {
      const { error } = await supabase
        .from('likes')
        .insert({ user: userId, post: postId });

      if (error) {
        throw new Error(error.message);
      }

      return;
    },
  });
};

export const useUnlikePost = () => {
  return useMutation({
    mutationFn: async ({ userId, postId }: LikePostArgs) => {
      const { error } = await supabase
        .from('likes')
        .delete()
        .eq('user', userId)
        .eq('post', postId);

      if (error) {
        throw new Error(error.message);
      }

      return;
    },
  });
};
