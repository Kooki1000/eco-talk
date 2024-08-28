import { Link, Stack } from 'expo-router';
import { MoveLeft } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';

import { black, white } from '@/components/obytes/colors';
import { translate } from '@/i18n';

export default function TabLayout() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <Stack
      screenOptions={{
        // eslint-disable-next-line react/no-unstable-nested-components
        headerLeft: () => (
          <Link href="/(auth)/sign-up" asChild>
            <MoveLeft
              color={isDark ? white : black}
              style={{ marginRight: 4 }}
            />
          </Link>
        ),
      }}
    >
      <Stack.Screen
        name="index"
        options={{ title: translate('signUp.title') }}
      />
      <Stack.Screen
        name="policy"
        options={{ title: translate('about.title') }}
      />
    </Stack>
  );
}
