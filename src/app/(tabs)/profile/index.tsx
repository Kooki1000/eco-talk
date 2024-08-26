import { router } from 'expo-router';
import { Info, UserRound } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import { Pressable, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { DeleteAccountButton, LogOutButton } from '@/components/auth';
import Banner from '@/components/banner';
import { Text } from '@/components/obytes';
import { black, white } from '@/components/obytes/colors';
import { AddressSelect } from '@/components/settings/AddressSelect';
import { LanguageSelect } from '@/components/settings/languageSelect';
import { ThemeSelect } from '@/components/settings/themeSelect';

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();

  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  const onAboutPress = () => {
    console.log('About');
    router.navigate('/profile/about');
  };

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      <Banner />

      <View className="mt-10">
        <Text
          tx="profile.title"
          className="mb-8 text-center text-2xl font-bold"
        />

        <View style={styles.settingsContainer}>
          <AddressSelect />
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
    </View>
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
