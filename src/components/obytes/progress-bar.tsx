// This code is taken from the original version found at:
// https://github.com/obytes/react-native-template-obytes/blob/master/src/ui/progress-bar.tsx
// Original code by OBytes (https://github.com/obytes), licensed under the MIT License.

import { forwardRef, useImperativeHandle } from 'react';
import { View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { twMerge } from 'tailwind-merge';

type Props = {
  initialProgress?: number;
  className?: string;
};

export type ProgressBarRef = {
  setProgress: (value: number) => void;
};

export const ProgressBar = forwardRef<ProgressBarRef, Props>(
  ({ initialProgress = 0, className = '' }, ref) => {
    const progress = useSharedValue<number>(initialProgress ?? 0);
    useImperativeHandle(
      ref,
      () => {
        return {
          setProgress: (value: number) => {
            progress.value = withTiming(value, {
              duration: 250,
              easing: Easing.inOut(Easing.quad),
            });
          },
        };
      },
      [progress]
    );

    const style = useAnimatedStyle(() => {
      return {
        width: `${progress.value}%`,
        backgroundColor: '#000',
        height: 2,
      };
    });

    return (
      <View className={twMerge(` bg-[#EAEAEA]`, className)}>
        <Animated.View style={style} />
      </View>
    );
  }
);
