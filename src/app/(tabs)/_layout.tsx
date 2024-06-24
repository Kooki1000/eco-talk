/* eslint-disable react/no-unstable-nested-components */
import { Tabs } from 'expo-router';
import {
  BookOpenCheck,
  CirclePlus,
  Home,
  MessageSquareText,
  UserRound,
} from 'lucide-react-native';

import { useClientOnlyValue } from '@/hooks/use-client-only-value';
import { useThemeConfig } from '@/hooks/use-theme-config';

export default function TabLayout() {
  const colorScheme = useThemeConfig();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colorScheme.colors.primary,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <Home color={color} />,
        }}
      />
      <Tabs.Screen
        name="guides"
        options={{
          tabBarIcon: ({ color }) => <BookOpenCheck color={color} />,
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          tabBarIcon: ({ color }) => <CirclePlus color={color} size={40} />,
        }}
      />
      <Tabs.Screen
        name="posts"
        options={{
          tabBarIcon: ({ color }) => <MessageSquareText color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => <UserRound color={color} />,
        }}
      />
    </Tabs>
  );
}
