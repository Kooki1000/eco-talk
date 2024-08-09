import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
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
    <SafeAreaView className="flex-1 items-center justify-center">
      <UserInfoHeader style={styles.header} />

      <View className="mx-4 items-center pb-20">
        <FlatList
          data={postsData}
          ListHeaderComponent={<PostsHeader />}
          renderItem={({ item }) => (
            <Post
              onPress={() => onPostPress(item.id)}
              variant={item.variant}
              text={loremText}
              langCode={item.langCode}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'relative',
    top: 0,
  },
});
