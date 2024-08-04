import { router } from 'expo-router';
import { CircleUserRound } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import AddPostHeader from '@/components/addPostHeader';
import { black, white } from '@/components/obytes/colors';
import PostInput from '@/components/postInput';
import { useSoftKeyboardEffect } from '@/lib/keyboard';

export default function AddPostScreen() {
  const [text, setText] = useState('');
  useSoftKeyboardEffect();

  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  const onPostPress = () => {
    console.log('post content: ' + text + '  post date:' + Date());
    router.navigate('/posts');
  };

  return (
    <SafeAreaView style={styles.container}>
      <AddPostHeader onPress={onPostPress} />

      <ScrollView
        keyboardShouldPersistTaps="always"
        keyboardDismissMode="none"
        contentContainerStyle={styles.content}
      >
        <CircleUserRound
          color={isDark ? white : black}
          size={48}
          strokeWidth={1}
        />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <PostInput
            style={[styles.input, { color: isDark ? 'white' : 'black' }]}
            placeholderKey="add.insert"
            multiline
            onChangeText={(newText) => setText(newText)}
            textAlign="left"
            className="text-base font-normal"
          />
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    top: 0,
  },
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
  header: {
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderColor: '#CBBDBD',
    paddingBottom: 13,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
});
