import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from '@/components/obytes';
import UserInfoHeader from '@/components/userInfoHeader';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <UserInfoHeader style={styles.header} />

      <View style={styles.container} className="h-full">
        <Text tx="home.title" className="text-2xl font-bold" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    position: 'relative',
    top: 0,
  },
});
