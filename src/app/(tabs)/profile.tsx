import { router } from 'expo-router';
import { StyleSheet } from 'react-native';

import Banner from '@/components/banner';
import { Button, SafeAreaView, Text } from '@/components/obytes';

export default function ProfileScreen() {
  const logOut = () => {
    console.log('Log out');
    router.push('/');
  };

  const deleteAccount = () => {
    console.log('Delte account');
    router.push('/');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Banner />

      <Text tx="profile.title" className="mb-10 text-2xl font-bold" />

      <Button
        onPress={logOut}
        tx="profile.logout"
        textClassName="text-xl text-black"
        className="h-10 w-80 rounded-3xl bg-gray-300"
      />

      <Button
        onPress={deleteAccount}
        tx="profile.delte"
        textClassName="text-xl text-black"
        className="h-10 w-80 rounded-3xl bg-red-300"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
