/* eslint-disable max-lines-per-function */
import { router } from 'expo-router';
import {
  ALargeSmall,
  Info,
  MapPinned,
  SunMoon,
  UserRound,
} from 'lucide-react-native';
import { Pressable, StyleSheet, View } from 'react-native';

import Banner from '@/components/banner';
import InfoRow from '@/components/infoRow';
import { Button, SafeAreaView, Text } from '@/components/obytes';
import { black } from '@/components/obytes/colors';
import LanguageSelect from '@/components/settings/languageSelect';

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

      <View className="mt-10">
        <Text
          tx="profile.title"
          className="mb-8 items-center text-center text-2xl font-bold"
        />

        <View style={styles.settingsContainer}>
          <InfoRow IconComponent={MapPinned} text="Location: Yokohama City" />

          <LanguageSelect />

          <InfoRow IconComponent={ALargeSmall} text="Text Size: 12" />
          <InfoRow IconComponent={SunMoon} text="Day/Night/System" />

          <Pressable
            onPress={onAboutPress}
            className="mb-4 flex flex-row items-center"
          >
            <Info color={black} size={28} />
            <Text className="text-lg" style={styles.infoText}>
              About
            </Text>
          </Pressable>

          <View className="mb-6 flex flex-row items-center">
            <UserRound color={black} size={28} />
            <Text className="text-lg" style={styles.infoText}>
              test@example.com
            </Text>
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
  settingsContainer: {
    marginLeft: 30,
    marginBottom: 20,
  },
  infoText: {
    marginLeft: 10,
  },
});
