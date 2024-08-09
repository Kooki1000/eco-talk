import { FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import PostsHeader from '@/components/headers/postsHeader';
import UserInfoHeader from '@/components/headers/userInfoHeader';
import { Post } from '@/components/post';
import { loremText, postsData } from '@/constants/dummyData';

export default function PostsScreen() {
  const onPostPress = (index: number) => {
    console.log('Post pressed:', index);
  };

  return (
    <SafeAreaView>
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
        />
      </View>
    </SafeAreaView>
  );
}
