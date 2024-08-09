import { FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Calendar } from '@/components/calendar';
import HomeHeader from '@/components/headers/homeHeader';
import UserInfoHeader from '@/components/headers/userInfoHeader';
import { dayData } from '@/constants/dummyData';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <UserInfoHeader />

      <View className="items-center rounded-lg">
        <FlatList
          data={dayData}
          renderItem={({ item }) => <Calendar variant={item.type} />}
          ListHeaderComponent={<HomeHeader />}
          ListFooterComponent={<View className="mb-32" />}
          className="w-full px-6"
        />
      </View>
    </SafeAreaView>
  );
}
