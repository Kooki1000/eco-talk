import { View } from 'react-native';

import { Text } from '@/components/obytes';
import { translate } from '@/i18n';

const WhyGuide = () => {
  return (
    <View className="m-4 size-fit self-center rounded-lg bg-red-100 px-3 dark:bg-red-400">
      <View className="mx-4 mb-4">
        <Text tx="guides.why.title" className="mt-4 text-xl font-bold" />
        <Text tx="guides.why.guide1" className="mt-2" />

        <View className="my-4">
          <Text>
            {'\u25cf'}{' '}
            <Text tx="guides.why.resources.title" className="font-bold" />{' '}
            {translate('guides.why.resources.text')}
          </Text>

          <Text className="mt-2">
            {'\u25cf'}{' '}
            <Text tx="guides.why.landfills.title" className="font-bold" />{' '}
            {translate('guides.why.landfills.text')}
          </Text>

          <Text className="mt-2">
            {'\u25cf'}{' '}
            <Text tx="guides.why.safety.title" className="font-bold" />{' '}
            {translate('guides.why.safety.text')}
          </Text>
        </View>

        <Text tx="guides.why.guide2" />
      </View>
    </View>
  );
};

export default WhyGuide;
