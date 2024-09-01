/* eslint-disable max-lines-per-function */
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
import { CircleUserRound, Send, X } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import { useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { z } from 'zod';

import { useCreatePost } from '@/api/posts';
import { uploadPostImage } from '@/api/upload-image';
import { ControlledInput } from '@/components/customInput';
import DisplayImage from '@/components/displayImage';
import ImageInput from '@/components/imageInput';
import { Image, Text } from '@/components/obytes';
import { black, white } from '@/components/obytes/colors';
import { translate } from '@/i18n';
import { postSchema } from '@/lib/schema';
import { useAuth } from '@/providers/auth-provider';

type FormType = z.infer<typeof postSchema>;

export default function AddPostScreen() {
  const insets = useSafeAreaInsets();
  const { profile } = useAuth();

  const { control, handleSubmit, reset } = useForm<FormType>({
    resolver: zodResolver(postSchema),
  });

  const { mutate: createPost } = useCreatePost();

  const [charCount, setCharCount] = useState(0);
  const [image, setImage] = useState('');

  const onSubmit: SubmitHandler<FormType> = async (data: FormType) => {
    if (!profile) return;

    let imagePath = '';
    if (image) {
      imagePath = (await uploadPostImage(image)) || '';
    }

    createPost(
      {
        userId: profile.id,
        content: data.content,
        img_url: imagePath,
      },
      {
        onSuccess: () => {
          // Reset the form and char count
          reset();
          setCharCount(0);
          setImage('');

          router.navigate('/posts');
        },
      }
    );
  };

  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  const handleInputChange = (text: string) => {
    setCharCount(text.length);
  };

  const handleScreenPress = () => {
    if (!profile) {
      Alert.alert(
        translate('requireAuth.warning'),
        translate('requireAuth.post'),
        [
          {
            text: translate('requireAuth.cancel'),
            style: Platform.OS === 'ios' ? 'cancel' : undefined,
          },
          {
            text: translate('requireAuth.move'),
            onPress: () => router.navigate('/'),
          },
        ]
      );
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleScreenPress}>
      <View
        style={{
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          flex: 1,
        }}
      >
        <View style={styles.container}>
          <View style={styles.leftContainer}>
            <TouchableOpacity
              onPress={() => router.back()}
              className="flex-row justify-center"
            >
              <X color={isDark ? white : black} size={40} strokeWidth={1} />
            </TouchableOpacity>
          </View>

          <Text tx="city.chiyoda" className="text-lg" />

          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            style={styles.rightContainer}
          >
            <Send color={isDark ? white : black} size={32} />
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.content}>
          <View className="flex-row items-center justify-between">
            {profile?.avatar_url ? (
              <Image
                source={{ uri: profile.avatar_url }}
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 24,
                  borderWidth: 1,
                }}
                cachePolicy={'disk'}
              />
            ) : (
              <CircleUserRound
                color={isDark ? white : black}
                size={48}
                strokeWidth={1}
              />
            )}

            <View className="flex-row items-center">
              <Text
                className={charCount > 1000 ? 'text-red-500' : 'text-gray-500'}
              >
                {translate('add.charCount', { count: charCount })}
              </Text>

              <ImageInput setImage={setImage} />
            </View>
          </View>

          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          >
            <ControlledInput
              name="content"
              tx="add.insert"
              control={control}
              onChangeText={handleInputChange}
              multiline
              maxLength={1000}
            />
          </KeyboardAvoidingView>
          <DisplayImage image={image} onRemoveImage={() => setImage('')} />
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderColor: '#CBBDBD',
    paddingBottom: 8,
  },
  leftContainer: {
    alignItems: 'center',
    marginLeft: 10,
  },
  rightContainer: {
    marginRight: 10,
  },
  content: {
    position: 'relative',
    top: 0,
    paddingTop: 16,
    paddingBottom: 16,
    marginLeft: 16,
    marginRight: 16,
    alignContent: 'center',
  },
  input: {
    marginTop: 7,
    paddingLeft: 16,
    paddingRight: 60,
  },
});
