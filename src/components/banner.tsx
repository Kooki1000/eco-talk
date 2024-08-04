import { ImageBackground } from 'expo-image';
import { Camera, CircleUserRound, Pencil } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import { useMemo } from 'react';
import { StyleSheet, View, type ViewProps } from 'react-native';
import { twMerge } from 'tailwind-merge';

import { Text } from './obytes';
import { black, white } from './obytes/colors';

interface Props extends ViewProps {
  className?: string;
}

const Banner = ({ style, className }: Props) => {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  const ViewStyle = useMemo(() => twMerge('w-full', className), [className]);

  return (
    <View className={ViewStyle} style={style}>
      <ImageBackground
        source={require('../../assets/images/banner.png')}
        contentFit="cover"
      >
        <View className="flex-row border-b-2 border-[#CBBDBD]">
          <View style={styles.iconContainer} className="mb-4">
            <CircleUserRound
              size={96}
              color={isDark ? white : black}
              strokeWidth={1}
            />
            <View style={styles.cameraIcon}>
              <Camera size={30} color={isDark ? white : black} />
            </View>
          </View>

          <View className="ml-14 flex-row items-center">
            <Text tx="banner" className="mr-3 text-2xl font-bold" />
            <Pencil color={isDark ? white : black} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    position: 'relative',
  },
  cameraIcon: {
    position: 'absolute',
    right: -8,
    bottom: -8,
  },
});

export default Banner;
