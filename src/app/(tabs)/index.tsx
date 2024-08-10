import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Calendar } from '@/components/calendar';
import HomeHeader from '@/components/headers/homeHeader';
import UserInfoHeader from '@/components/headers/userInfoHeader';
import { dayData } from '@/constants/dummyData';

dayjs.extend(localizedFormat);

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <UserInfoHeader />

      <View className="items-center rounded-lg">
        <FlatList
          data={dayData}
          renderItem={({ item }) => (
            <Calendar
              variant={item.type}
              date={dayjs(item.date).format('L')}
              dayOfWeek={dayjs(item.date).format('dddd')}
            />
          )}
          ListHeaderComponent={<HomeHeader />}
          ListFooterComponent={<View className="mb-32" />}
          className="w-full"
        />
      </View>
    </SafeAreaView>
  );
}
