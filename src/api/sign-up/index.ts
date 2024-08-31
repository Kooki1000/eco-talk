import { useMutation } from '@tanstack/react-query';
import type { z } from 'zod';

import type { signUpSchema } from '@/lib/schema';
import { supabase } from '@/lib/supabase';
import { useAuthStore } from '@/stores/useAuthStore';
import type { Tables } from '@/types/database.types';

type FormType = z.infer<typeof signUpSchema>;

export const useSignUp = () => {
  const setProfile = useAuthStore((state) => state.setProfile);

  return useMutation({
    mutationFn: async (data: FormType) => {
      const { data: userData, error: signUpError } = await supabase.auth.signUp(
        {
          email: data.email,
          password: data.password,
        }
      );

      if (signUpError || !userData) {
        throw new Error('signUp.error');
      }

      const { data: profileData, error } = await supabase
        .from('profiles')
        .update({
          username: data.username,
        })
        .eq('id', userData.user?.id)
        .select();

      if (error) {
        throw new Error('signUp.queryError');
      }

      setProfile(profileData as unknown as Tables<'profiles'>);
      return;
    },
  });
};
