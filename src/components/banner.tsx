import { Camera, CircleUserRound, Pencil } from 'lucide-react-native';
import React from 'react';
import { StyleSheet, View, type ViewProps } from 'react-native';

import { Text } from './obytes';
import { black } from './obytes/colors';

const Banner = ({ style }: ViewProps) => {
  return (
    <View
      style={[styles.bannerStyle, style]}
      className="w-full flex-row border-b-2 border-[#CBBDBD]"
    >
      <View>
        <CircleUserRound size={96} color={black} strokeWidth={1} />
        <Camera size={30} color={black} />
      </View>

      <View className="flex-row">
        <Text className="text-2xl font-bold">Username</Text>
        <Pencil color={black} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bannerStyle: {},
});

export default Banner;
