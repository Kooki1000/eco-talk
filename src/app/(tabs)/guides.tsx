import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { HowGuide, WhatGuide, WhyGuide } from '@/components/guides';
import UserInfoHeader from '@/components/headers/userInfoHeader';
import { Text } from '@/components/obytes';

export default function GuidesScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      <UserInfoHeader />

      <ScrollView className="mb-6 mt-3">
        <View style={{ alignItems: 'center' }} className="mb-16 mt-8">
          <Text tx="guides.title" className="text-center text-2xl font-bold" />

          <WhatGuide />
          <WhyGuide />
          <HowGuide />
        </View>
      </ScrollView>
    </View>
  );
}
