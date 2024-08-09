import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import React from 'react';
import { FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Calendar } from '@/components/calendar';
import HomeHeader from '@/components/headers/homeHeader';
import UserInfoHeader from '@/components/headers/userInfoHeader';
import { dayData } from '@/constants/dummyData';

dayjs.extend(localizedFormat);

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <UserInfoHeader />

      <View className="mb-20 items-center rounded-lg">
        <FlatList
          data={dayData}
          ListHeaderComponent={<HomeHeader />}
          renderItem={({ item }) => (
            <Calendar
              variant={item.type}
              date={dayjs(item.date).format('L')}
              dayOfWeek={dayjs(item.date).format('dddd')}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}
