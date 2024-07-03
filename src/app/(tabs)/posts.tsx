import { Search } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Select } from '@/components/customSelect';
import Header from '@/components/header';
import { Text } from '@/components/obytes';
import { black, white } from '@/components/obytes/colors';
import { sortOptions } from '@/constants/options';
import { translate } from '@/i18n';

export default function PostsScreen() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  const [value, setValue] = useState<string | undefined>();

  const onSelectPress = () => {
    console.log('Search pressed');
  };

  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Header style={styles.header} />

      <View style={styles.container} className="mt-10 h-full">
        <Text tx="posts.title" className="text-2xl font-bold" />

        <View className="mt-3 w-4/5 flex-row items-center justify-between">
          <Select
            txKey="posts.sortBy"
            options={sortOptions}
            value={value}
            onSelect={(option) => {
              console.log('Selected:', option);
              setValue(option as string);
            }}
          />

          <Text>{translate('posts.count', { count: 128 })}</Text>

          <TouchableOpacity onPress={onSelectPress} className="flex-row">
            <Search color={isDark ? white : black} />
            <Text tx="posts.search" className="ml-2" />
          </TouchableOpacity>
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
});
