import { Link, Stack } from 'expo-router';
import { MoveLeft } from 'lucide-react-native';

import { black } from '@/components/obytes/colors';
import { translate } from '@/i18n';

export default function ProfileStack() {
  return (
    <Stack
      screenOptions={{
        // eslint-disable-next-line react/no-unstable-nested-components
        headerLeft: () => (
          <Link href="/(tabs)/profile" asChild>
            <MoveLeft color={black} />
          </Link>
        ),
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="about"
        options={{ title: translate('about.title') }}
      />
    </Stack>
  );
}
