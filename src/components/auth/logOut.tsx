import { router } from 'expo-router';

import { Button } from '../obytes/button';

const LogOutButton = () => {
  const logOut = () => {
    console.log('Log out');
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
