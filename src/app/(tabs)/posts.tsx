import { useRef } from 'react';
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
import { Post } from '@/components/post';
import { dummyPosts } from '@/constants/dummyData';

export default function PostsScreen() {
  const insets = useSafeAreaInsets();
  const inputRef = useRef<TextInput>(null);

  const handleReplyPress = (id: string) => {
    console.log(`Reply pressed from: ${id}`);
    inputRef.current?.focus();
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

        <View style={styles.floatingView}>
          <Input ref={inputRef} multiline maxLength={200} />
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
