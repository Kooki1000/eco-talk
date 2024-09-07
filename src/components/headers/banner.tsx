import { ImageBackground } from 'expo-image';
import { CircleUserRound } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import { useEffect, useMemo, useState } from 'react';
import { StyleSheet, View, type ViewProps } from 'react-native';
import { twMerge } from 'tailwind-merge';

import { useAuth } from '@/providers/auth-provider';

import AvatarPicker from '../input/avatarPicker';
import UsernameInput from '../input/usernameInput';
import { Image } from '../obytes';
import { black, white } from '../obytes/colors';

interface Props extends ViewProps {
  className?: string;
}

const Banner = ({ style, className }: Props) => {
  const { profile } = useAuth();

  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  const [currentProfile, setCurrentProfile] = useState(profile);

  useEffect(() => {
    setCurrentProfile(profile ? { ...profile } : null);
  }, [profile]);

  const ViewStyle = useMemo(() => twMerge('w-full', className), [className]);

  if (!currentProfile) return null;

  return (
    <View className={ViewStyle} style={style}>
      <ImageBackground
        source={require('@assets/images/banner.png')}
        contentFit="cover"
      >
        <View className="flex-row border-b-2 border-[#CBBDBD]">
          <View style={styles.iconContainer} className="mb-4 ml-2">
            {currentProfile.avatar_url ? (
              <Image
                source={{ uri: currentProfile.avatar_url }}
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

            <AvatarPicker userId={currentProfile.id} />
          </View>

          <UsernameInput profile={currentProfile} />
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
