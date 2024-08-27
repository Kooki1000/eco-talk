import { TriangleAlert } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useTrashSchedule } from '@/api/trash-schedule';
import { Calendar } from '@/components/calendar';
import { HomeContainer } from '@/components/container/homeContainer';
import HomeHeader from '@/components/headers/homeHeader';
import UserInfoHeader from '@/components/headers/userInfoHeader';
import { Text } from '@/components/obytes';
import { AddressSelect } from '@/components/settings/addressSelect';
import { useSelectedAddress } from '@/hooks/use-selected-address';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const { selectedAddress } = useSelectedAddress();

  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  const {
    data: trashSchedule,
    isPending,
    error,
  } = useTrashSchedule(selectedAddress);

  if (!selectedAddress) {
    return (
      <HomeContainer>
        <View className="mt-12 items-center justify-center rounded-md bg-red-200 p-16 dark:bg-red-500">
          <Text tx="home.setAddress" className="mb-8 text-xl" />
          <AddressSelect />
        </View>
      </HomeContainer>
    );
  }

  if (isPending) {
    return (
      <HomeContainer>
        <View className="mt-36 items-center">
          <ActivityIndicator />
        </View>
      </HomeContainer>
    );
  }

  if (error || trashSchedule.length === 0) {
    return (
      <HomeContainer>
        <View className="mt-24 items-center">
          <TriangleAlert size={48} color={isDark ? 'white' : 'red'} />
          <Text tx="data.error" className="mt-6 text-xl font-bold" />
        </View>
      </HomeContainer>
    );
  }

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
          data={trashSchedule}
          renderItem={({ item }) => <Calendar data={item} />}
          ListHeaderComponent={<HomeHeader />}
          ListFooterComponent={<View style={{ height: 128 }} />}
          className="mx-auto w-full"
        />
      </View>
    </View>
  );
}
