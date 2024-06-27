import { ImageBackground } from 'expo-image';
import { Camera, CircleUserRound, Pencil } from 'lucide-react-native';
import React, { useMemo } from 'react';
import { StyleSheet, View, type ViewProps } from 'react-native';
import { twMerge } from 'tailwind-merge';

import { Text } from './obytes';
import { black } from './obytes/colors';

interface Props extends ViewProps {
  className?: string;
}

const Banner = ({ style, className }: Props) => {
  const ViewStyle = useMemo(() => twMerge('w-full', className), [className]);

  return (
    <View className={ViewStyle} style={style}>
      <ImageBackground
        source={require('../../assets/images/banner.png')}
        contentFit="cover"
        style={styles.bannerStyle}
      >
        <View className="flex-row border-b-2 border-[#CBBDBD]">
          <View style={styles.iconContainer} className="mb-4 ml-6">
            <CircleUserRound size={96} color={black} strokeWidth={1} />
            <View style={styles.cameraIcon}>
              <Camera size={30} color={black} />
            </View>
          </View>

          <View className="ml-8 flex-row items-center">
            <Text tx="banner" className="mr-2 text-2xl font-bold" />
            <Pencil color={black} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  bannerStyle: {
    opacity: 0.8,
  },
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
