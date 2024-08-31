import { router } from 'expo-router';

import { supabase } from '@/lib/supabase';

import { Button } from '../obytes/button';

const LogOutButton = () => {
  const logOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      return;
    }

    router.replace('/');
  };

  return (
    <Button
      onPress={logOut}
      tx="profile.logout"
      textClassName="text-xl text-black"
      className="h-10 w-80 rounded-3xl bg-gray-300"
    />
  );
};

export default LogOutButton;
