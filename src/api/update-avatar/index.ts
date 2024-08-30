import { useMutation } from '@tanstack/react-query';

import { supabase } from '@/lib/supabase';

interface UpdateAvatarArgs {
  userId: string;
  img_url: string;
}

export const useUpdateAvatar = () => {
  return useMutation({
    mutationFn: async ({ userId, img_url }: UpdateAvatarArgs) => {
      const { data, error } = await supabase
        .from('profiles')
        .update({ avatar: img_url })
        .eq('id', userId)
        .select();

      if (error) {
        throw new Error(error.message);
      }

      return data;
    },
  });
};
