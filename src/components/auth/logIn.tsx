import { router } from 'expo-router';

import { Button } from '../obytes/button';

const LogInButton = () => {
  const logIn = () => {
    router.navigate('/');
  };

  return (
    <Button
      onPress={logIn}
      tx="profile.login"
      textClassName="text-xl text-black"
      className="h-10 w-80 rounded-3xl bg-blue-200 dark:bg-blue-400"
    />
  );
};

export default LogInButton;
