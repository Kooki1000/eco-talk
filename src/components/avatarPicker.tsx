import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import { Pressable, StyleSheet } from 'react-native';

import { useUpdateAvatar } from '@/api/update-profile';
import { uploadAvatar } from '@/api/upload-image';
import { useAuthStore } from '@/stores/useAuthStore';

import { black, white } from './obytes/colors';

const AvatarPicker = ({ userId }: { userId: string }) => {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  const setProfile = useAuthStore((state) => state.setProfile);

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
        { userId: userId, img_url: imagePath },
        {
          onSuccess: (profile) => {
            setProfile(profile);
          },
        }
      );
    }
  };

  return (
    <Pressable onPress={handleImagePickerPress} style={styles.cameraIcon}>
      <Camera size={30} color={isDark ? white : black} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cameraIcon: {
    position: 'absolute',
    right: -16,
    bottom: -16,
  },
});

export default AvatarPicker;
