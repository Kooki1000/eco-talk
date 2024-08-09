/* eslint-disable react/no-unstable-nested-components */
import { Tabs } from 'expo-router';
import {
  BookOpenCheck,
  CirclePlus,
  Home,
  MessageSquareText,
  UserRound,
} from 'lucide-react-native';

import { useThemeConfig } from '@/hooks/use-theme-config';

export default function TabLayout() {
  const colorScheme = useThemeConfig();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colorScheme.colors.text,
        tabBarShowLabel: false,
      }}
      backBehavior={'history'}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <Home color={color} />,
        }}
      />
      <Tabs.Screen
        name="guides"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <BookOpenCheck color={color} />,
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <CirclePlus color={color} size={40} />,
        }}
      />
      <Tabs.Screen
        name="posts"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <MessageSquareText color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <UserRound color={color} />,
        }}
      />
    </Tabs>
  );
}
