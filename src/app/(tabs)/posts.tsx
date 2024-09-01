/* eslint-disable max-lines-per-function */
import { router } from 'expo-router';
import { TriangleAlert } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import { useRef, useState } from 'react';
import type { TextInput } from 'react-native';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useFetchPosts } from '@/api/posts';
import { PostContainer } from '@/components/container/postsContainer';
import PostsHeader from '@/components/headers/postsHeader';
import UserInfoHeader from '@/components/headers/userInfoHeader';
import ReplyInput from '@/components/input/replyInput';
import { Text } from '@/components/obytes';
import { Post } from '@/components/post';
import { translate } from '@/i18n';
import { useAuth } from '@/providers/auth-provider';

export default function PostsScreen() {
  const insets = useSafeAreaInsets();
  const inputRef = useRef<TextInput>(null);

  const { profile } = useAuth();
  const {
    data: postsData,
    isPending,
    error,
  } = useFetchPosts({
    userId: profile?.id,
  });

  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  const [replyId, setReplyId] = useState<string | null>(null);

  const handleReplyPress = (id: string) => {
    if (!profile) {
      Alert.alert(
        translate('requireAuth.warning'),
        translate('requireAuth.reply'),
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

      return;
    }

    setReplyId(id);

    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const resetReplyId = () => {
    setReplyId(null);
  };

  if (isPending) {
    return (
      <PostContainer>
        <PostsHeader postCount={0} />
        <View className="mt-36 items-center">
          <ActivityIndicator />
        </View>
      </PostContainer>
    );
  }

  if (error || !postsData || postsData.length === 0) {
    return (
      <PostContainer>
        <PostsHeader postCount={0} />
        <View className="mt-24 items-center">
          <TriangleAlert size={48} color={isDark ? 'white' : 'red'} />
          <Text tx="data.error" className="mt-6 text-xl font-bold" />
        </View>
      </PostContainer>
    );
  }

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
            data={postsData}
            renderItem={({ item }) => (
              <Post post={item} onReplyPress={handleReplyPress} />
            )}
            ListHeaderComponent={
              <PostsHeader postCount={postsData?.length ?? 0} />
            }
            ListFooterComponent={<View style={{ height: 100 }} />}
            className="mx-auto w-full"
          />
        </View>

        <ReplyInput
          inputRef={inputRef}
          postId={replyId}
          resetReplyId={resetReplyId}
        />
      </View>
    </KeyboardAvoidingView>
  );
}
