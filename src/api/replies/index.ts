import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/constants/queryKeys';
import { supabase } from '@/lib/supabase';

export const useDeleteReply = () => {
  const queryClient = useQueryClient();

  return useMutation({
    async mutationFn(postId: string) {
      const { error } = await supabase
        .from('replies')
        .delete()
        .eq('id', postId);

      if (error) {
        throw new Error(error.message);
      }

      return;
    },
    async onSuccess() {
      await queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.POSTS],
      });
    },
  });
};
