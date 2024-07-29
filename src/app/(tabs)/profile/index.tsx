/* eslint-disable max-lines-per-function */
import { router } from 'expo-router';
import { ALargeSmall, Info, MapPinned, UserRound } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import Banner from '@/components/banner';
import InfoRow from '@/components/infoRow';
import { Button, SafeAreaView, Text } from '@/components/obytes';
import { black, white } from '@/components/obytes/colors';
import LanguageSelect from '@/components/settings/languageSelect';
import ThemeSelect from '@/components/settings/themeSelect';

export default function ProfileScreen() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  const onAboutPress = () => {
    console.log('About');
    router.push('/profile/about');
  };

  const logOut = () => {
    console.log('Log out');
    router.push('/');
  };

  const deleteAccount = () => {
    console.log('Delete account');
    router.push('/');
  };

  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Banner style={styles.banner} />

      <View className="mt-10">
        <Text
          tx="profile.title"
          className="mb-8 text-center text-2xl font-bold"
        />

        <View style={styles.settingsContainer}>
          <InfoRow IconComponent={MapPinned} text="Location: Yokohama City" />
          <LanguageSelect />
          <InfoRow IconComponent={ALargeSmall} text="Text Size: 12" />
          <ThemeSelect />

          <Pressable
            onPress={onAboutPress}
            className="mb-4 flex flex-row items-center"
          >
            <Info color={isDark ? white : black} size={28} />
            <Text
              tx="about.title"
              className="text-lg"
              style={styles.infoText}
            />
          </Pressable>

          <View className="mb-6 flex flex-row items-center">
            <UserRound color={isDark ? white : black} size={28} />
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
            tx="profile.delete"
            textClassName="text-xl text-black"
            className="h-10 w-80 rounded-3xl bg-red-300 dark:bg-red-400"
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
    marginLeft: 12,
  },
});
