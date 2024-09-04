/* eslint-disable max-lines-per-function */
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

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
        <View style={styles.container} className="mb-16 mt-8">
          <Text tx="guides.title" className="text-center text-2xl font-bold" />

          <View className="mx-4 mb-3 mt-4 size-fit self-center rounded-lg bg-green-100 px-3 dark:bg-green-500">
            <View className="mx-4 mb-4">
              <Text tx="guides.what.title" className="mt-4 text-xl font-bold" />

              <Text className="mt-2">
                Waste sorting in Japan involves dividing waste into specific
                categories based on material, size, or recyclability. Each city
                or ward may have its own regulations, but generally, waste is
                divided into four main categories:
              </Text>

              <View className="mb-6">
                <Text className="font-bold">{'\u25cf'} Burnable</Text>
                <Text className="mt-2 font-bold">{'\u25cf'} Non-burnable</Text>
                <Text className="mt-2 font-bold">{'\u25cf'} Recyclable</Text>
                <Text className="mt-2 font-bold">{'\u25cf'} Bulky</Text>
              </View>

              <Text>
                Each type of waste is collected on different days. Information
                on collection schedules can usually be found on your
                municipality's English-language website or in a city guidebook
                provided during the registration process.
              </Text>

              <Text className="mt-2">
                If your residence does not have a collection area, waste should
                be taken to the nearest public collection point. Residents are
                usually notified of this when they move in, and schedules are
                often posted near collection points.
              </Text>

              <Text className="my-4 text-xl font-bold">Important Tips:</Text>

              <View className="mb-3">
                <Text>
                  {'\u25cf'} Only bring out garbage in the morning on collection
                  days to avoid attracting animals.
                </Text>
                <Text className="mt-2">
                  {'\u25cf'} Make sure waste is properly packaged. For example:
                </Text>

                <View className="ml-4">
                  <Text className="mt-2">
                    {'\u25cf'} Rinse cans and bottles.
                  </Text>
                  <Text className="mt-2">
                    {'\u25cf'} Tie paper bundles with string.
                  </Text>
                </View>
              </View>

              <Text className="mt-2">
                Following these guidelines is not just environmentally
                friendly—it's also a legal requirement in Japan.
              </Text>
            </View>
          </View>

          <View
            style={styles.sticker}
            className="my-3 size-fit self-center rounded-lg bg-red-100 px-3 dark:bg-red-400"
          >
            <Text
              tx="guides.why.title"
              className="text-xl font-bold leading-7"
              style={styles.question}
            />
            <Text
              tx="guides.why.content"
              style={styles.content}
              className="leading-6"
            />
          </View>

          <View
            style={styles.sticker}
            className="my-3 size-fit self-center rounded-lg bg-orange-100 px-3 dark:bg-orange-400"
          >
            <Text
              tx="guides.how.title"
              className="text-xl font-bold leading-7"
              style={styles.question}
            />
            <Text
              tx="guides.how.content"
              style={styles.content}
              className="leading-6"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    top: 0,
    alignItems: 'center',
  },
  sticker: {
    marginLeft: 16,
    marginRight: 16,
  },
  question: {
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16,
  },
  content: {
    marginTop: 8,
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 16,
  },
});
