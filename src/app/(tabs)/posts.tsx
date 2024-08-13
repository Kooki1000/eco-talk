/* eslint-disable max-lines-per-function */
import { CircleUserRound } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import { useRef, useState } from 'react';
import type { TextInput } from 'react-native';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import PostsHeader from '@/components/headers/postsHeader';
import UserInfoHeader from '@/components/headers/userInfoHeader';
import { Input } from '@/components/obytes';
import { black, white } from '@/components/obytes/colors';
import { Post } from '@/components/post';
import { dummyPosts } from '@/constants/dummyData';

export default function PostsScreen() {
  const insets = useSafeAreaInsets();
  const inputRef = useRef<TextInput>(null);
  const [inputValue, setInputValue] = useState('');
  const [inputDisabled, setInputDisabled] = useState(true);
  const [replyId, setReplyId] = useState<string | null>(null);

  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  const handleReplyPress = (id: string) => {
    console.log(`Reply pressed from: ${id}`);
    setInputDisabled(false);
    setReplyId(id);

    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const handleSubmit = () => {
    console.log(`Submitted: ${inputValue}`);
    console.log(`Replying to: ${replyId}`);

    if (!inputValue.trim()) {
      return;
    }

    setInputValue('');
    setInputDisabled(true);
    setReplyId(null);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View
        style={{
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          flex: 1,
        }}
      >
        <UserInfoHeader />

        <View className="mx-4" style={{ flex: 1 }}>
          <FlatList
            data={dummyPosts}
            renderItem={({ item }) => (
              <Post post={item} onReplyPress={handleReplyPress} />
            )}
            ListHeaderComponent={<PostsHeader />}
            ListFooterComponent={<View style={{ height: 200 }} />}
            className="mx-auto w-full"
          />
        </View>

        <View
          style={styles.floatingView}
          className="flex-row border-t-2 border-[#CBBDBD] bg-white px-2 py-3 dark:bg-black"
        >
          <View className="mr-2">
            <CircleUserRound
              color={isDark ? white : black}
              size={36}
              strokeWidth={1}
            />
          </View>

          <View style={{ flex: 1 }}>
            <Input
              ref={inputRef}
              disabled={inputDisabled}
              maxLength={200}
              value={inputValue}
              onChangeText={setInputValue}
              onSubmitEditing={handleSubmit}
            />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  floatingView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
