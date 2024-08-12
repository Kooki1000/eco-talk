/* eslint-disable max-lines-per-function */
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
import { CircleUserRound, Send, X } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { z } from 'zod';

import { ControlledInput } from '@/components/customInput';
import DisplayImage from '@/components/displayImage';
import ImageInput from '@/components/imageInput';
import { Text } from '@/components/obytes';
import { black, white } from '@/components/obytes/colors';
import { translate } from '@/i18n';
import { postSchema } from '@/lib/schema';

type FormType = z.infer<typeof postSchema>;

export default function AddPostScreen() {
  const insets = useSafeAreaInsets();

  const { control, handleSubmit, reset } = useForm<FormType>({
    resolver: zodResolver(postSchema),
  });

  const [charCount, setCharCount] = useState(0);
  const [image, setImage] = useState('');

  const onSubmit = (data: FormType) => {
    console.log(data);

    // Reset the form and char count
    reset();
    setCharCount(0);
    setImage('');

    router.navigate('/posts');
  };

  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  const handleInputChange = (text: string) => {
    setCharCount(text.length);
  };

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
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

        <Text className="text-lg">Yokohama City</Text>

        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          style={styles.rightContainer}
        >
          <Send color={isDark ? white : black} size={32} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View className="flex-row items-center justify-between">
          <CircleUserRound
            color={isDark ? white : black}
            size={48}
            strokeWidth={1}
          />

          <View className="flex-row items-center">
            <Text
              className={charCount > 1000 ? 'text-red-500' : 'text-gray-500'}
            >
              {translate('add.charCount', { count: charCount })}
            </Text>

            <View className="ml-4 size-12 items-center justify-center rounded-full bg-red-200 dark:bg-red-400">
              <ImageInput setImage={setImage} />
            </View>
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
