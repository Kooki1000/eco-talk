import { Search } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import { useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Select } from '@/components/customSelect';
import { Text } from '@/components/obytes';
import { black, white } from '@/components/obytes/colors';
import { Post } from '@/components/post';
import UserInfoHeader from '@/components/userInfoHeader';
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
  };

  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <UserInfoHeader style={styles.header} />

      <View className="mb-5">
        <View style={styles.container} className="mx-3 mt-6 rounded-sm py-4">
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

        <View className="mt-4 items-center" style={styles.postsContainer}>
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
            contentContainerStyle={{ paddingBottom: 400 }}
          />
        </View>
      </View>
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
