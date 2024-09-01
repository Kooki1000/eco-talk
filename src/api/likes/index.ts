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

interface ReplyPostArgs {
  userId: string;
  replyId: string;
}

export const useLikeReply = () => {
  return useMutation({
    mutationFn: async ({ userId, replyId }: ReplyPostArgs) => {
      const { error } = await supabase
        .from('likes')
        .insert({ user: userId, reply: replyId });

      if (error) {
        throw new Error(error.message);
      }

      return;
    },
  });
};

export const useUnlikeReply = () => {
  return useMutation({
    mutationFn: async ({ userId, replyId }: ReplyPostArgs) => {
      const { error } = await supabase
        .from('likes')
        .delete()
        .eq('user', userId)
        .eq('reply', replyId);

      if (error) {
        throw new Error(error.message);
      }

      return;
    },
  });
};
