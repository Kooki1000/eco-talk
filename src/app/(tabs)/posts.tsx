import { FlatList, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import PostsHeader from '@/components/headers/postsHeader';
import UserInfoHeader from '@/components/headers/userInfoHeader';
import { Post } from '@/components/post';
import { loremText, postsData } from '@/constants/dummyData';

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
          data={postsData}
          renderItem={({ item }) => (
            <Post
              onPress={() => onPostPress(item.id)}
              variant={item.variant}
              text={loremText}
              langCode={item.langCode}
            />
          )}
          ListHeaderComponent={<PostsHeader />}
          ListFooterComponent={<View className="mb-32" />}
          className="mx-auto w-full"
        />
      </View>
    </View>
  );
}
