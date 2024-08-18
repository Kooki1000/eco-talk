import { Link, Stack } from 'expo-router';
import { MoveRight } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';

import { black, white } from '@/components/obytes/colors';

export default function TabLayout() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <Stack
      screenOptions={{
        // eslint-disable-next-line react/no-unstable-nested-components
        headerLeft: () => (
          <Link href="/" asChild>
            <MoveRight
              color={isDark ? white : black}
              style={{ marginRight: 4 }}
            />
          </Link>
        ),
      }}
    />
  );
}
