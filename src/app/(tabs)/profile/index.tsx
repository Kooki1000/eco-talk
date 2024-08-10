import { router } from 'expo-router';
import { Info, MapPinned, UserRound } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { DeleteAccountButton, LogOutButton } from '@/components/auth';
import Banner from '@/components/banner';
import { InfoRow } from '@/components/infoRow';
import { SafeAreaView, Text } from '@/components/obytes';
import { black, white } from '@/components/obytes/colors';
import { LanguageSelect } from '@/components/settings/languageSelect';
import { ThemeSelect } from '@/components/settings/themeSelect';

export default function ProfileScreen() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  const onAboutPress = () => {
    console.log('About');
    router.navigate('/profile/about');
  };

  return (
    <SafeAreaView>
      <Banner />

      <View className="mt-10">
        <Text
          tx="profile.title"
          className="mb-8 text-center text-2xl font-bold"
        />

        <View style={styles.settingsContainer}>
          <InfoRow IconComponent={MapPinned} text="Location: Yokohama City" />
          <LanguageSelect />
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
          <LogOutButton />
          <DeleteAccountButton />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  settingsContainer: {
    marginLeft: 30,
    marginBottom: 20,
  },
  infoText: {
    marginLeft: 12,
  },
});
