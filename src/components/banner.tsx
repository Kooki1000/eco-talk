/* eslint-disable max-lines-per-function */
import { ImageBackground } from 'expo-image';
import * as ImagePicker from 'expo-image-picker';
import { Camera, CircleUserRound, Pencil } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import { useMemo } from 'react';
import { Pressable, StyleSheet, View, type ViewProps } from 'react-native';
import { twMerge } from 'tailwind-merge';

import { useUpdateAvatar } from '@/api/update-avatar';
import { uploadAvatar } from '@/api/upload-image';
import type { Tables } from '@/types/database.types';

import { Image, Text } from './obytes';
import { black, white } from './obytes/colors';

interface Props extends ViewProps {
  profile: Tables<'profiles'>;
  className?: string;
}

const Banner = ({ profile, style, className }: Props) => {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  const ViewStyle = useMemo(() => twMerge('w-full', className), [className]);

  const { mutate: updateAvatar } = useUpdateAvatar();

  const handleImagePickerPress = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      const imagePath = await uploadAvatar(result.assets[0].uri);
      if (!imagePath) return;

      updateAvatar(
        { userId: profile.id, img_url: imagePath },
        {
          onSuccess: () => {
            // TODO: Update profile in store
          },
        }
      );
    }
  };

  return (
    <View className={ViewStyle} style={style}>
      <ImageBackground
        source={require('@assets/images/banner.png')}
        contentFit="cover"
      >
        <View className="flex-row border-b-2 border-[#CBBDBD]">
          <View style={styles.iconContainer} className="mb-4 ml-2">
            {profile.avatar ? (
              <Image
                source={{ uri: profile.avatar }}
                cachePolicy={'disk'}
                style={{
                  height: 96,
                  width: 96,
                  borderRadius: 48,
                  borderWidth: 2,
                }}
              />
            ) : (
              <CircleUserRound
                size={96}
                color={isDark ? white : black}
                strokeWidth={1}
              />
            )}

            <Pressable
              onPress={handleImagePickerPress}
              style={styles.cameraIcon}
            >
              <Camera size={30} color={isDark ? white : black} />
            </Pressable>
          </View>

          <View className="ml-16 flex-row items-center">
            <Text className="mr-3 text-2xl font-bold">{profile.username}</Text>
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
    right: -12,
    bottom: -12,
  },
});

export default Banner;
