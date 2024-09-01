import { ImageBackground } from 'expo-image';
import { CircleUserRound } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import { useMemo } from 'react';
import { StyleSheet, View, type ViewProps } from 'react-native';
import { twMerge } from 'tailwind-merge';

import type { Tables } from '@/types/database.types';

import AvatarPicker from '../input/avatarPicker';
import UsernameInput from '../input/usernameInput';
import { Image } from '../obytes';
import { black, white } from '../obytes/colors';

interface Props extends ViewProps {
  profile: Tables<'profiles'>;
  className?: string;
}

const Banner = ({ profile, style, className }: Props) => {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  const ViewStyle = useMemo(() => twMerge('w-full', className), [className]);

  return (
    <View className={ViewStyle} style={style}>
      <ImageBackground
        source={require('@assets/images/banner.png')}
        contentFit="cover"
      >
        <View className="flex-row border-b-2 border-[#CBBDBD]">
          <View style={styles.iconContainer} className="mb-4 ml-2">
            {profile.avatar_url ? (
              <Image
                source={{ uri: profile.avatar_url }}
                cachePolicy={'disk'}
                style={{
                  height: 72,
                  width: 72,
                  borderRadius: 36,
                  borderWidth: 2,
                }}
              />
            ) : (
              <CircleUserRound
                size={72}
                color={isDark ? white : black}
                strokeWidth={1}
              />
            )}

            <AvatarPicker userId={profile.id} />
          </View>

          <UsernameInput profile={profile} />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    position: 'relative',
  },
});

export default Banner;
