/* eslint-disable max-lines-per-function */
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { Text } from '@/components/obytes';

export default function AboutScreen() {
  return (
    <ScrollView>
      <View className="mx-4 mt-4">
        <View className="mb-8">
          <Text tx="about.terms.terms" className="mb-2 text-2xl font-bold" />
          <Text tx="about.terms.preamble" className="mb-2" />

          <View className="mb-2">
            <Text
              tx="about.terms.article1.title"
              className="mb-2 text-xl font-bold"
            />
            <Text tx="about.terms.article1.section1" />
            <Text tx="about.terms.article1.section2" />
            <Text tx="about.terms.article1.section3" />
          </View>

          <View className="mb-2">
            <Text
              tx="about.terms.article2.title"
              className="mb-2 text-xl font-bold"
            />

            <Text tx="about.terms.article2.section1" />
            <Text tx="about.terms.article2.section2.title" />

            <View style={{ marginLeft: 16 }}>
              <Text tx="about.terms.article2.section2.item1" />
              <Text tx="about.terms.article2.section2.item2" />
              <Text tx="about.terms.article2.section2.item3" />
            </View>
          </View>

          <View className="mb-2">
            <Text
              tx="about.terms.article3.title"
              className="mb-2 text-xl font-bold"
            />

            <Text tx="about.terms.article3.section1" />
            <Text tx="about.terms.article3.section2" />
            <Text tx="about.terms.article3.section3" />
          </View>

          <View className="mb-2">
            <Text
              tx="about.terms.article4.title"
              className="mb-2 text-xl font-bold"
            />

            <Text tx="about.terms.article4.content" />
            <View style={{ marginLeft: 16 }}>
              <Text tx="about.terms.article4.section1" />
              <Text tx="about.terms.article4.section2" />
              <Text tx="about.terms.article4.section3" />
              <Text tx="about.terms.article4.section4" />
              <Text tx="about.terms.article4.section5" />
              <Text tx="about.terms.article4.section6" />
              <Text tx="about.terms.article4.section7" />
              <Text tx="about.terms.article4.section8" />
              <Text tx="about.terms.article4.section9" />

              <Text tx="about.terms.article4.section10.content" />
              <View style={{ marginLeft: 16 }}>
                <Text tx="about.terms.article4.section10.item1" />
                <Text tx="about.terms.article4.section10.item2" />
                <Text tx="about.terms.article4.section10.item3" />
                <Text tx="about.terms.article4.section10.item4" />
                <Text tx="about.terms.article4.section10.item5" />
              </View>

              <Text tx="about.terms.article4.section11.content" />
              <View style={{ marginLeft: 16 }}>
                <Text tx="about.terms.article4.section11.item1" />
                <Text tx="about.terms.article4.section11.item2" />
                <Text tx="about.terms.article4.section11.item3" />
                <Text tx="about.terms.article4.section11.item4" />
                <Text tx="about.terms.article4.section11.item5" />
                <Text tx="about.terms.article4.section11.item6" />
              </View>

              <Text tx="about.terms.article4.section12" />
              <Text tx="about.terms.article4.section13" />
            </View>
          </View>

          <View className="mb-2">
            <Text
              tx="about.terms.article5.title"
              className="mb-2 text-xl font-bold"
            />

            <Text tx="about.terms.article5.section1.content" />
            <View style={{ marginLeft: 16 }}>
              <Text tx="about.terms.article5.section1.item1" />
              <Text tx="about.terms.article5.section1.item2" />
              <Text tx="about.terms.article5.section1.item3" />
              <Text tx="about.terms.article5.section1.item4" />
            </View>

            <Text tx="about.terms.article5.section2" />
          </View>

          <View className="mb-2">
            <Text
              tx="about.terms.article6.title"
              className="mb-2 text-xl font-bold"
            />

            <Text tx="about.terms.article6.section1" />
            <Text tx="about.terms.article1.section2" />
            <Text tx="about.terms.article6.section3" />
          </View>

          <View className="mb-2">
            <Text
              className="mb-2 text-xl font-bold"
              tx="about.terms.article7.title"
            />

            <Text tx="about.terms.article7.section1.content" />
            <View style={{ marginLeft: 16 }}>
              <Text tx="about.terms.article7.section1.item1" />
              <Text tx="about.terms.article7.section1.item2" />
              <Text tx="about.terms.article7.section1.item3" />
              <Text tx="about.terms.article7.section1.item4" />
              <Text tx="about.terms.article7.section1.item5" />
            </View>

            <Text tx="about.terms.article7.section2" />
            <Text tx="about.terms.article7.section3" />
          </View>

          <View className="mb-2">
            <Text
              tx="about.terms.article8.title"
              className="mb-2 text-xl font-bold"
            />

            <Text tx="about.terms.article8.section1" />
            <Text tx="about.terms.article8.section2" />
            <Text tx="about.terms.article8.section3" />
            <Text tx="about.terms.article8.section4" />
          </View>

          <View className="mb-2">
            <Text
              tx="about.terms.article9.title"
              className="mb-2 text-xl font-bold"
            />
            <Text tx="about.terms.article9.content" />
          </View>

          <View className="mb-2">
            <Text
              tx="about.terms.article10.title"
              className="mb-2 text-xl font-bold"
            />

            <Text tx="about.terms.article10.section1.content" />
            <View style={{ marginLeft: 16 }}>
              <Text tx="about.terms.article10.section1.item1" />
              <Text tx="about.terms.article10.section1.item2" />
            </View>

            <Text tx="about.terms.article10.section2" />
          </View>

          <View className="mb-2">
            <Text
              tx="about.terms.article11.title"
              className="mb-2 text-xl font-bold"
            />
            <Text tx="about.terms.article11.content" />
          </View>

          <View className="mb-2">
            <Text
              tx="about.terms.article12.title"
              className="mb-2 text-xl font-bold"
            />
            <Text tx="about.terms.article12.content" />
          </View>

          <View className="mb-2">
            <Text
              tx="about.terms.article13.title"
              className="mb-2 text-xl font-bold"
            />
            <Text tx="about.terms.article13.content" />
          </View>

          <View className="mb-2">
            <Text
              tx="about.terms.article14.title"
              className="mb-2 text-xl font-bold"
            />

            <Text tx="about.terms.article14.section1" />
            <Text tx="about.terms.article14.section2" />
          </View>
        </View>

        <View className="mb-8">
          <Text tx="about.policy.policy" className="mb-2 text-2xl font-bold" />
          <Text tx="about.policy.content" />
        </View>
      </View>
    </ScrollView>
  );
}
