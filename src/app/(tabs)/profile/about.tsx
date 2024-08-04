import { SafeAreaView, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { Text } from '@/components/obytes';

export default function AboutScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <ScrollView className="px-4">
        <View className="mt-4">
          <View className="mb-8">
            <Text tx="about.about.about" className="mb-2 text-2xl font-bold" />
            <Text tx="about.about.content" />
          </View>

          <View className="mb-8">
            <Text tx="about.terms.terms" className="mb-2 text-2xl font-bold" />
            <Text tx="about.terms.content" />
          </View>

          <View className="mb-8">
            <Text
              tx="about.policy.policy"
              className="mb-2 text-2xl font-bold"
            />
            <Text tx="about.policy.content" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}