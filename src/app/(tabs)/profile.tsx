import { router } from 'expo-router';
import { StyleSheet, View } from 'react-native';

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
    <SafeAreaView className="flex-1 items-center justify-center">
      <Banner style={styles.banner} />

      <View className="mt-5 w-full">
        <Text
          tx="profile.title"
          className="mb-10 items-center text-center text-2xl font-bold"
        />

        <View className="items-center">
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
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  banner: {
    position: 'relative',
    top: 0,
  },
});
