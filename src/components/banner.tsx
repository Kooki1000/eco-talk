/* eslint-disable max-lines-per-function */
import { ImageBackground } from 'expo-image';
import * as ImagePicker from 'expo-image-picker';
import { Camera, Check, CircleUserRound, Pencil, X } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  Alert,
  Pressable,
  StyleSheet,
  View,
  type ViewProps,
} from 'react-native';
import type { TextInput } from 'react-native-gesture-handler';
import { twMerge } from 'tailwind-merge';

import { useUpdateAvatar } from '@/api/update-avatar';
import { uploadAvatar } from '@/api/upload-image';
import { translate } from '@/i18n';
import type { Tables } from '@/types/database.types';

import { Image, Input } from './obytes';
import { black, white } from './obytes/colors';

interface Props extends ViewProps {
  profile: Tables<'profiles'>;
  className?: string;
}

const Banner = ({ profile, style, className }: Props) => {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  const [editable, setEditable] = useState(false);
  const [username, setUsername] = useState(profile.username ?? '');
  const inputRef = useRef<TextInput>(null);

  const ViewStyle = useMemo(() => twMerge('w-full', className), [className]);

  const { mutate: updateAvatar } = useUpdateAvatar();

  useEffect(() => {
    setUsername(profile.username ?? '');
  }, [profile.username]);

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

  const handlePencilPress = () => {
    setEditable(!editable);

    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const handleCancel = () => {
    inputRef.current?.blur();
    setEditable(false);
    setUsername(profile.username ?? '');
  };

  const updateUsername = () => {
    if (username.length < 3) {
      Alert.alert(translate('profile.usernameLength'));
      return;
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
                  height: 72,
                  width: 72,
                  borderRadius: 36,
                  borderWidth: 2,
                }}
              />
            ) : (
              <CircleUserRound
                size={36}
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

          <View className="ml-4 flex-row items-center">
            <View className="mr-3">
              <Input
                ref={inputRef}
                className="text-xl font-bold dark:text-neutral-100"
                value={username}
                onChangeText={setUsername}
                maxLength={16}
              />
            </View>

            {!editable ? (
              <Pencil
                size={24}
                color={isDark ? white : black}
                onPress={handlePencilPress}
              />
            ) : (
              <View className="flex-row">
                <Pressable onPress={handleCancel}>
                  <X size={24} color={isDark ? white : black} />
                </Pressable>

                <Pressable onPress={updateUsername}>
                  <Check size={24} color={'red'} />
                </Pressable>
              </View>
            )}
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
    right: -16,
    bottom: -16,
  },
});

export default Banner;
