import { View } from 'react-native';

import { Text } from '@/components/obytes';
import { translate } from '@/i18n';

const WhatGuide = () => {
  return (
    <View className="m-4 size-fit self-center rounded-lg bg-green-100 px-3 dark:bg-green-500">
      <View className="mx-4 mb-4">
        <Text tx="guides.what.title" className="mt-4 text-xl font-bold" />
        <Text tx="guides.what.guide1" className="mt-2" />

        <View className="my-2">
          <Text>
            {'\u25cf'} {translate('calendar.burnable')}
          </Text>
          <Text className="mt-2">
            {'\u25cf'} {translate('calendar.nonBurnable')}
          </Text>
          <Text className="mt-2">
            {'\u25cf'} {translate('calendar.recyclable')}
          </Text>
          <Text className="mt-2">
            {'\u25cf'} {translate('calendar.bulky')}
          </Text>
        </View>

        <Text tx="guides.what.guide2" className="mt-2" />
        <Text tx="guides.what.guide3" className="mt-2" />

        <Text
          tx="guides.what.tips.subtitle"
          className="my-4 text-xl font-bold"
        />

        <Text>
          {'\u25cf'} {translate('guides.what.tips.tips1')}
        </Text>
        <Text className="mt-2">
          {'\u25cf'} {translate('guides.what.tips.tips2')}
        </Text>

        <View style={{ marginLeft: 16 }}>
          <Text className="mt-2">
            {'\u25cf'} {translate('guides.what.tips.subtip1')}
          </Text>
          <Text className="mt-2">
            {'\u25cf'} {translate('guides.what.tips.subtip2')}
          </Text>
        </View>

        <Text tx="guides.what.tips.rules" className="mt-2" />
      </View>
    </View>
  );
};

export default WhatGuide;
