import { Search } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { sortOptions } from '@/constants/options/options';
import { translate } from '@/i18n';

import { Select } from '../customSelect';
import { Text } from '../obytes';
import { black, white } from '../obytes/colors';

const PostsHeader = ({ postCount }: { postCount: number }) => {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  const [value, setValue] = useState<string | undefined>();

  const onSelectPress = () => {
    console.log('Search pressed');
  };

  return (
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
          {translate('posts.count', { count: postCount })}
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
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    top: 0,
    alignItems: 'center',
  },
  row: {
    width: '90%',
    justifyContent: 'space-between',
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchText: {
    marginLeft: 6,
  },
});

export default PostsHeader;
