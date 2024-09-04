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

              <View className="my-4">
                <Text className="font-bold">{'\u25cf'} Burnable</Text>
                <Text className="mt-2 font-bold">{'\u25cf'} Non-burnable</Text>
                <Text className="mt-2 font-bold">{'\u25cf'} Recyclable</Text>
                <Text className="mt-2 font-bold">{'\u25cf'} Bulky</Text>
              </View>

              <Text className="mt-2">
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

              <Text className="mt-2">
                {'\u25cf'} Only bring out garbage in the morning on collection
                days to avoid attracting animals.
              </Text>
              <Text className="mt-2">
                {'\u25cf'} Make sure waste is properly packaged. For example:
              </Text>

              <View className="ml-4">
                <Text className="mt-2">{'\u25cf'} Rinse cans and bottles.</Text>
                <Text className="mt-2">
                  {'\u25cf'} Tie paper bundles with string.
                </Text>
              </View>

              <Text className="mt-2">
                Following these guidelines is not just environmentally
                friendly—it's also a legal requirement in Japan.
              </Text>
            </View>
          </View>

          <View className="mx-4 mb-3 mt-4 size-fit self-center rounded-lg bg-red-100 px-3 dark:bg-red-400">
            <View className="mx-4 mb-4">
              <Text tx="guides.why.title" className="mt-4 text-xl font-bold" />

              <Text className="mt-2">
                Proper waste sorting helps protect the environment and our
                communities. By separating recyclable materials like paper,
                glass, metal, and plastics from other waste, we can:
              </Text>

              <View className="my-4">
                <Text>
                  <Text className="font-bold">
                    {'\u25cf'} Preserve Resources:{' '}
                  </Text>
                  Recycling one tonne of paper saves 17 trees, 26,000 liters of
                  water, and 4,000 kWh of electricity.
                </Text>

                <Text className="mt-2">
                  <Text className="font-bold">
                    {'\u25cf'} Reduce Landfill Waste:{' '}
                  </Text>
                  Sorting helps prevent groundwater contamination and greenhouse
                  gas emissions.
                </Text>

                <Text className="mt-2">
                  <Text className="font-bold">{'\u25cf'} Ensure Safety: </Text>
                  Hazardous items like chemicals, batteries, and medical waste
                  are disposed of safely, preventing harm to people, wildlife,
                  and reducing toxic emissions.
                </Text>
              </View>

              <Text>
                Sorting waste also keeps our communities cleaner and healthier
                by reducing litter, pests, and unpleasant odors. A small effort
                in sorting your trash contributes to a more sustainable future
                and a better living environment for everyone.
              </Text>
            </View>
          </View>

          <View className="mx-4 mb-3 mt-4 size-fit self-center rounded-lg bg-orange-100 px-3 dark:bg-orange-400">
            <View className="mx-4 mb-4">
              <Text tx="guides.how.title" className="mt-4 text-xl font-bold" />

              <Text className="mt-2">
                Waste sorting in Japan is detailed, with guidelines that may
                vary by municipality. Here's a general guide:
              </Text>

              <View className="mt-4">
                <Text className="mt-2 font-bold">Burnable</Text>
                <View className="ml-2">
                  <Text className="mt-2">
                    {'\u25cf'} Includes: Food scraps, kitchen waste, paper,
                    small pieces of wood, and other organic items.
                  </Text>
                  <Text className="mt-2">
                    {'\u25cf'} Preparation: Use designated burnable waste bags,
                    tie securely, and place in the designated area on the
                    correct day.
                  </Text>
                </View>
              </View>

              <View className="mt-2">
                <Text className="mt-2 font-bold">Non-burnable</Text>
                <View className="ml-2">
                  <Text className="mt-2">
                    {'\u25cf'} Includes: Metal items, ceramics, glass, and small
                    household appliances.
                  </Text>
                  <Text className="mt-2">
                    {'\u25cf'} Preparation: Use designated non-burnable waste
                    bags or follow local instructions. Wrap glass in newspaper
                    to prevent injuries.
                  </Text>
                </View>
              </View>

              <View className="mt-2">
                <Text className="mt-2 font-bold">Plastic</Text>
                <View className="ml-2">
                  <Text className="mt-2">
                    {'\u25cf'} Includes: Plastic bottles, wrappers, trays, and
                    packaging with the plastic recycling symbol (♻).
                  </Text>
                  <Text className="mt-2">
                    {'\u25cf'} Preparation: Rinse and clean items, remove food
                    residue, and place in designated plastic waste bags. Some
                    areas require removing caps and labels from bottles.
                  </Text>
                </View>
              </View>

              <View className="mt-2">
                <Text className="mt-2 font-bold">PET Bottles</Text>
                <View className="ml-2">
                  <Text className="mt-2">
                    {'\u25cf'} Includes: Aluminum cans, steel cans, and glass
                    bottles.
                  </Text>
                  <Text className="mt-2">
                    {'\u25cf'} Preparation: Rinse cans and bottles, remove caps,
                    and place them in designated bins.
                  </Text>
                </View>
              </View>

              <View className="mt-2">
                <Text className="mt-2 font-bold">Cans and Bottles</Text>
                <View className="ml-2">
                  <Text className="mt-2">
                    {'\u25cf'} Includes: Plastic bottles with the PET symbol
                    (e.g., beverage bottles).
                  </Text>
                  <Text className="mt-2">
                    {'\u25cf'} Preparation: Rinse bottles, remove caps and
                    labels, and place them in designated collection bins.
                    Separate caps and labels as needed.
                  </Text>
                </View>
              </View>

              <View className="mt-2">
                <Text className="mt-2 font-bold">Paper</Text>
                <View className="ml-2">
                  <Text className="mt-2">
                    {'\u25cf'} Includes: Newspapers, magazines, cardboard, and
                    other paper products.
                  </Text>
                  <Text className="mt-2">
                    {'\u25cf'} Preparation: Bundle items with string or use
                    designated recycling bags. Flatten cardboard boxes.
                  </Text>
                </View>
              </View>

              <View className="mt-2">
                <Text className="mt-2 font-bold">Bulky/Large-sized</Text>
                <View className="ml-2">
                  <Text className="mt-2">
                    {'\u25cf'} Includes: Furniture, large appliances, and other
                    bulky items.
                  </Text>
                  <Text className="mt-2">
                    {'\u25cf'} Preparation: Contact your local government to
                    arrange a pickup. A special disposal ticket is often
                    required, and items must be placed outside on the scheduled
                    pickup day.
                  </Text>
                </View>
              </View>
            </View>
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
