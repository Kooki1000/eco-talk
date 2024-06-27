import { router } from 'expo-router';
import {
  ALargeSmall,
  Info,
  Languages,
  MapPinned,
  SunMoon,
  UserRound,
} from 'lucide-react-native';
import { Pressable, StyleSheet, View } from 'react-native';

import Banner from '@/components/banner';
import InfoRow from '@/components/infoRow';
import { Button, SafeAreaView, Text } from '@/components/obytes';
import { black } from '@/components/obytes/colors';

export default function ProfileScreen() {
  const onAboutPress = () => {
    console.log('About');
    router.push('/profile/about');
  };

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

      <View className="mt-8 w-full">
        <Text
          tx="profile.title"
          className="mb-8 items-center text-center text-2xl font-bold"
        />

        <View className="ml-12">
          <InfoRow IconComponent={MapPinned} text="Location: Yokohama City" />
          <InfoRow IconComponent={Languages} text="Language: Chinese" />
          <InfoRow IconComponent={ALargeSmall} text="Text Size: 12" />
          <InfoRow IconComponent={SunMoon} text="Day/Night/System" />

          <Pressable
            onPress={onAboutPress}
            className="mb-4 flex flex-row items-center"
          >
            <Info color={black} size={28} />
            <Text className="ml-4 text-lg">About</Text>
          </Pressable>

          <View className="mb-12 flex flex-row items-center">
            <UserRound color={black} size={28} />
            <Text className="ml-4 text-lg">test@example.com</Text>
          </View>
        </View>

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
