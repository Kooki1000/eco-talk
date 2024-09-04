/* eslint-disable max-lines-per-function */
import { View } from 'react-native';

import { Text } from '@/components/obytes';
import { translate } from '@/i18n';

const HowGuide = () => {
  return (
    <View className="m-4 size-fit self-center rounded-lg bg-orange-100 px-3 dark:bg-orange-400">
      <View className="mx-4 mb-4">
        <Text tx="guides.how.title" className="mt-4 text-xl font-bold" />
        <Text tx="guides.how.guide1" className="mt-2" />

        <View className="mt-2">
          <Text tx="calendar.burnable" className="mt-2 font-bold" />
          <View className="ml-2">
            <Text className="mt-2">
              {'\u25cf'} {translate('guides.how.burnable.includes')}
            </Text>
            <Text className="mt-2">
              {'\u25cf'} {translate('guides.how.burnable.instructions')}
            </Text>
          </View>
        </View>

        <View className="mt-2">
          <Text tx="calendar.nonBurnable" className="mt-2 font-bold" />
          <View className="ml-2">
            <Text className="mt-2">
              {'\u25cf'} {translate('guides.how.nonBurnable.includes')}
            </Text>
            <Text className="mt-2">
              {'\u25cf'} {translate('guides.how.nonBurnable.instructions')}
            </Text>
          </View>
        </View>

        <View className="mt-2">
          <Text tx="calendar.plastic" className="mt-2 font-bold" />
          <View className="ml-2">
            <Text className="mt-2">
              {'\u25cf'} {translate('guides.how.plastic.includes')}
            </Text>
            <Text className="mt-2">
              {'\u25cf'} {translate('guides.how.plastic.instructions')}
            </Text>
          </View>
        </View>

        <View className="mt-2">
          <Text tx="guides.how.pet.title" className="mt-2 font-bold" />
          <View className="ml-2">
            <Text className="mt-2">
              {'\u25cf'} {translate('guides.how.pet.includes')}
            </Text>
            <Text className="mt-2">
              {'\u25cf'} {translate('guides.how.pet.instructions')}
            </Text>
          </View>
        </View>

        <View className="mt-3">
          <Text tx="guides.how.cans.title" className="mt-2 font-bold" />
          <View className="ml-2">
            <Text className="mt-2">
              {'\u25cf'} {translate('guides.how.cans.includes')}
            </Text>
            <Text className="mt-2">
              {'\u25cf'} {translate('guides.how.cans.instructions')}
            </Text>
          </View>
        </View>

        <View className="mt-2">
          <Text tx="guides.how.paper.title" className="mt-2 font-bold" />
          <View className="ml-2">
            <Text className="mt-2">
              {'\u25cf'} {translate('guides.how.paper.includes')}
            </Text>
            <Text className="mt-2">
              {'\u25cf'} {translate('guides.how.paper.instructions')}
            </Text>
          </View>
        </View>

        <View className="mt-2">
          <Text tx="calendar.bulky" className="mt-2 font-bold" />
          <View className="ml-2">
            <Text className="mt-2">
              {'\u25cf'} {translate('guides.how.bulky.includes')}
            </Text>
            <Text className="mt-2">
              {'\u25cf'} {translate('guides.how.bulky.instructions')}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HowGuide;
