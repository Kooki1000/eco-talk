import { FlatList, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import PostsHeader from '@/components/headers/postsHeader';
import UserInfoHeader from '@/components/headers/userInfoHeader';
import { Post } from '@/components/post';
import { dummyPosts } from '@/constants/dummyData';

export default function PostsScreen() {
  const insets = useSafeAreaInsets();

  const onPostPress = (index: number) => {
    console.log('Post pressed:', index);
  };

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      <UserInfoHeader />

      <View className="mx-4">
        <FlatList
          data={dummyPosts}
          renderItem={({ item }) => (
            <Post post={item} onPress={() => onPostPress(item.id)} />
          )}
          ListHeaderComponent={<PostsHeader />}
          ListFooterComponent={<View style={{ height: 128 }} />}
          className="mx-auto w-full"
        />
      </View>
    </View>
  );
}
