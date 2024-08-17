import { MapPinned } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import { memo } from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../obytes';
import { black, white } from '../obytes/colors';

const CityInfoComponent = () => {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View className="mb-4 flex flex-row items-center">
      <MapPinned color={isDark ? white : black} size={28} />
      <Text tx="city.chiyoda" className="text-lg" style={styles.text} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginLeft: 12,
  },
});

export const CityInfo = memo(CityInfoComponent);
