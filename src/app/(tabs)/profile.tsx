import { router } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { Button, Text } from '@/components/obytes';

export default function ProfileScreen() {
  const logOut = () => {
    router.push('/');
  };

  const deleteAccount = () => {
    router.push('/');
  };

  return (
    <View style={styles.container}>
      <Text className="mb-10 text-2xl">Profile</Text>

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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
