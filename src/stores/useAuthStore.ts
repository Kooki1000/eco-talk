import type { Session } from '@supabase/supabase-js';
import { create } from 'zustand';

import { supabase } from '../lib/supabase';
import type { Tables } from '../types/database.types';

type AuthState = {
  session: Session | null;
  profile: Tables<'profiles'> | null;
  loading: boolean;
  fetchSession: () => Promise<void>;
  setProfile: (profile: Tables<'profiles'>) => void;
};

export const useAuthStore = create<AuthState>((set) => {
  const fetchSession = async () => {
    const {
      data: { session: fetchedSession },
    } = await supabase.auth.getSession();
    set({ session: fetchedSession });

    if (fetchedSession) {
      const { data } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', fetchedSession.user.id)
        .single();
      set({ profile: data || null });
    }

    set({ loading: false });
  };

  supabase.auth.onAuthStateChange((_event, session) => {
    set({ session });
    if (session) {
      fetchSession();
    } else {
      set({ profile: null });
    }
  });

  return {
    session: null,
    profile: null,
    loading: true,
    fetchSession,
    setProfile: (profile) => set({ profile }),
  };
});
