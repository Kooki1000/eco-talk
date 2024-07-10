import { router } from 'expo-router';
import { Search } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Select } from '@/components/customSelect';
import Header from '@/components/header';
import { Text } from '@/components/obytes';
import { black, white } from '@/components/obytes/colors';
import { Post } from '@/components/post';
import { loremText, postsData } from '@/constants/dummyData';
import { sortOptions } from '@/constants/options';
import { translate } from '@/i18n';

export default function PostsScreen() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  const [value, setValue] = useState<string | undefined>();

  const onSelectPress = () => {
    console.log('Search pressed');
  };

  const onPostPress = (index: number) => {
    console.log('Post pressed:', index);
    router.push(`/(tabs)/posts/${index}`);
  };

  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Header style={styles.header} />

      <ScrollView className="mb-7">
        <View style={styles.container} className="mt-10">
          <Text tx="posts.title" className="text-2xl font-bold" />

          <View style={styles.row}>
            <Select
              txKey="posts.sortBy"
              options={sortOptions}
              value={value}
              onSelect={(option) => {
                console.log('Selected:', option);
                setValue(option as string);
              }}
            />

            <Text className="justify-center text-lg">
              {translate('posts.count', { count: 128 })}
            </Text>

            <TouchableOpacity
              onPress={onSelectPress}
              className="flex-row justify-center"
            >
              <Search color={isDark ? white : black} />
              <Text tx="posts.search" style={styles.searchText} />
            </TouchableOpacity>
          </View>
        </View>

        <View
          className="mt-4 items-center rounded-lg"
          style={styles.postsContainer}
        >
          {postsData.map((post, index) => (
            <Post
              key={index}
              onPress={() => onPostPress(index)}
              variant={post.variant}
              text={loremText}
              langCode={post.langCode}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'relative',
    top: 0,
  },
  container: {
    position: 'relative',
    top: 0,
    alignItems: 'center',
  },
  row: {
    width: '80%',
    justifyContent: 'space-between',
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchText: {
    marginLeft: 8,
  },
  postsContainer: {
    marginLeft: 16,
    marginRight: 16,
  },
});
