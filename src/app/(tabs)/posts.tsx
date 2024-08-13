import { useRef, useState } from 'react';
import type { TextInput } from 'react-native';
import { FlatList, KeyboardAvoidingView, Platform, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import PostsHeader from '@/components/headers/postsHeader';
import UserInfoHeader from '@/components/headers/userInfoHeader';
import { Post } from '@/components/post';
import ReplyInput from '@/components/replyInput';
import { dummyPosts } from '@/constants/dummyData';

export default function PostsScreen() {
  const insets = useSafeAreaInsets();
  const inputRef = useRef<TextInput>(null);
  const [replyId, setReplyId] = useState<string | null>(null);

  const handleReplyPress = (id: string) => {
    console.log(`Reply pressed from: ${id}`);
    setReplyId(id);

    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
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
            ListFooterComponent={<View style={{ height: 100 }} />}
            className="mx-auto w-full"
          />
        </View>

        <ReplyInput inputRef={inputRef} replyId={replyId} />
      </View>
    </KeyboardAvoidingView>
  );
}
