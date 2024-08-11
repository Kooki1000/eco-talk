import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { FlatList, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Calendar } from '@/components/calendar';
import HomeHeader from '@/components/headers/homeHeader';
import UserInfoHeader from '@/components/headers/userInfoHeader';
import { dayData } from '@/constants/dummyData';

dayjs.extend(localizedFormat);

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        alignItems: 'center',
      }}
    >
      <UserInfoHeader />

      <View style={{ width: '80%' }}>
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
          ListFooterComponent={<View style={{ height: 128 }} />}
          className="mx-auto w-full"
        />
      </View>
    </View>
  );
}
