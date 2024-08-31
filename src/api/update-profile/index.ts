import { useMutation } from '@tanstack/react-query';

import { supabase } from '@/lib/supabase';
import type { Tables } from '@/types/database.types';

interface UpdateUsernameArgs {
  userId: string;
  username: string;
}

export const useUpdateUsername = () => {
  return useMutation({
    mutationFn: async ({ userId, username }: UpdateUsernameArgs) => {
      const { data, error } = await supabase
        .from('profiles')
        .update({ username })
        .eq('id', userId)
        .select()
        .single();

      if (error) {
        throw new Error(error.message);
      }

      return data as Tables<'profiles'>;
    },
  });
};

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
        .select()
        .single();

      if (error) {
        throw new Error(error.message);
      }

      return data as Tables<'profiles'>;
    },
  });
};
