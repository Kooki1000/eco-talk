import { router } from 'expo-router';
import { CircleUserRound } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Input } from '@/components/customInput';
import AddPostHeader from '@/components/headers/addPostHeader';
import { black, white } from '@/components/obytes/colors';

export default function AddPostScreen() {
  const insets = useSafeAreaInsets();

  const [text, setText] = useState('');

  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  const onPostPress = () => {
    console.log('post content: ' + text);
    router.navigate('/posts');
  };

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      <AddPostHeader onPress={onPostPress} />

      <ScrollView contentContainerStyle={styles.content}>
        <CircleUserRound
          color={isDark ? white : black}
          size={48}
          strokeWidth={1}
        />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <Input tx="add.insert" error="Hello" />
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    position: 'relative',
    top: 0,
    paddingTop: 16,
    paddingBottom: 16,
    marginLeft: 16,
    marginRight: 16,
    flexDirection: 'row',
    alignContent: 'center',
  },
  input: {
    marginTop: 7,
    paddingLeft: 16,
    paddingRight: 60,
  },
});
