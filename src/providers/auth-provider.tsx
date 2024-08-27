import type { Session } from '@supabase/supabase-js';
import type { PropsWithChildren } from 'react';
import { createContext, useContext, useEffect } from 'react';

import type { Tables } from '@/types/database.types';

import { useAuthStore } from '../stores/useAuthStore';

type AuthData = {
  session: Session | null;
  profile: Tables<'profiles'> | null;
  loading: boolean;
};

const AuthContext = createContext<AuthData>({
  session: null,
  profile: null,
  loading: true,
});

export default function AuthProvider({ children }: PropsWithChildren) {
  const { session, profile, loading, fetchSession } = useAuthStore();

  useEffect(() => {
    fetchSession();
  }, [fetchSession]);

  return (
    <AuthContext.Provider value={{ session, profile, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
