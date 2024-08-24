import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { FlatList, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Calendar } from '@/components/calendar';
import HomeHeader from '@/components/headers/homeHeader';
import UserInfoHeader from '@/components/headers/userInfoHeader';
import { Text } from '@/components/obytes';
import { AddressSelect } from '@/components/settings/AddressSelect';
import { dayData } from '@/constants/dummyData';
import { useSelectedAddress } from '@/hooks/use-selected-address';

dayjs.extend(localizedFormat);

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const { selectedAddress } = useSelectedAddress();

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        alignItems: 'center',
      }}
    >
      <UserInfoHeader />

      {selectedAddress ? (
        <View style={{ width: '80%' }}>
          <FlatList
            data={dayData}
            renderItem={({ item }) => <Calendar data={item} />}
            ListHeaderComponent={<HomeHeader />}
            ListFooterComponent={<View style={{ height: 128 }} />}
            className="mx-auto w-full"
          />
        </View>
      ) : (
        <>
          <HomeHeader />

          <View className="mt-12 items-center justify-center rounded-md bg-red-200 p-16 dark:bg-red-500">
            <Text tx="home.setAddress" className="mb-8 text-xl" />
            <AddressSelect />
          </View>
        </>
      )}
    </View>
  );
}
