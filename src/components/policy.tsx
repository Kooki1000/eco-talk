/* eslint-disable max-lines-per-function */
import { View } from 'react-native';

import { Text } from './obytes';

interface PrivacyPolicyProps {
  className?: string;
}

const PrivacyPolicy = ({ className }: PrivacyPolicyProps) => {
  return (
    <View className={className}>
      <Text tx="about.policy.policy" className="mb-2 text-2xl font-bold" />
      <Text tx="about.policy.preamble" className="mb-2" />

      <View className="mb-2">
        <Text
          tx="about.policy.article1.title"
          className="mb-2 text-xl font-bold"
        />
        <Text tx="about.policy.article1.content" />
      </View>

      <View className="mb-2">
        <Text
          tx="about.policy.article2.title"
          className="mb-2 text-xl font-bold"
        />

        <Text tx="about.policy.article2.content" />
        <View style={{ marginLeft: 16 }}>
          <Text tx="about.policy.article2.item1" />
          <Text tx="about.policy.article2.item2" />
          <Text tx="about.policy.article2.item3" />
          <Text tx="about.policy.article2.item4" />
          <Text tx="about.policy.article2.item5" />
          <Text tx="about.policy.article2.item6" />
          <Text tx="about.policy.article2.item7" />
        </View>
      </View>

      <View className="mb-2">
        <Text
          tx="about.policy.article3.title"
          className="mb-2 text-xl font-bold"
        />

        <Text tx="about.policy.article3.section1" />
        <Text tx="about.policy.article3.section2" />
      </View>

      <View className="mb-2">
        <Text
          tx="about.policy.article4.title"
          className="mb-2 text-xl font-bold"
        />

        <Text tx="about.policy.article4.section1" />
        <View style={{ marginLeft: 16 }}>
          <Text tx="about.policy.article4.subitems1.item1" />
          <Text tx="about.policy.article4.subitems1.item2" />
          <Text tx="about.policy.article4.subitems1.item3" />
        </View>

        <Text tx="about.policy.article4.section2" />
        <View style={{ marginLeft: 16 }}>
          <Text tx="about.policy.article4.subitems2.item1" />
          <Text tx="about.policy.article4.subitems2.item2" />
        </View>
      </View>

      <View className="mb-2">
        <Text
          tx="about.policy.article5.title"
          className="mb-2 text-xl font-bold"
        />

        <Text tx="about.policy.article5.section1" />
        <View style={{ marginLeft: 16 }}>
          <Text tx="about.policy.article5.subitems.item1" />
          <Text tx="about.policy.article5.subitems.item2" />
          <Text tx="about.policy.article5.subitems.item3" />
        </View>

        <Text tx="about.policy.article5.section2" />
      </View>

      <View className="mb-2">
        <Text
          tx="about.policy.article6.title"
          className="mb-2 text-xl font-bold"
        />

        <Text tx="about.policy.article6.section1" />
        <Text tx="about.policy.article6.section2" />
        <Text tx="about.policy.article6.section3" />
      </View>

      <View className="mb-2">
        <Text
          tx="about.policy.article7.title"
          className="mb-2 text-xl font-bold"
        />

        <Text tx="about.policy.article7.section1" />
        <Text tx="about.policy.article7.section2" />
        <Text tx="about.policy.article7.section3" />
        <Text tx="about.policy.article7.section4" />
      </View>

      <View className="mb-2">
        <Text
          tx="about.policy.article8.title"
          className="mb-2 text-xl font-bold"
        />

        <Text tx="about.policy.article8.section1" />
        <Text tx="about.policy.article8.section2" />
      </View>
    </View>
  );
};

export default PrivacyPolicy;
