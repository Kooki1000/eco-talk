import { router } from 'expo-router';

import { Button } from '../obytes/button';

const DeleteAccountButton = () => {
  const deleteAccount = () => {
    console.log('Delete account');
    router.replace('/');
  };

  return (
    <Button
      onPress={deleteAccount}
      tx="profile.delete"
      textClassName="text-xl text-black"
      className="h-10 w-80 rounded-3xl bg-red-300 dark:bg-red-400"
    />
  );
};

export default DeleteAccountButton;
