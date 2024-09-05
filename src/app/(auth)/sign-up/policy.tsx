import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import PrivacyPolicy from '@/components/policy';
import TermsOfService from '@/components/terms';

export default function PolicyScreen() {
  return (
    <ScrollView>
      <View className="mx-4 mt-4">
        <TermsOfService className="mb-8" />
        <PrivacyPolicy className="mb-8" />
      </View>
    </ScrollView>
  );
}
