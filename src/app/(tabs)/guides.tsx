import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '@/components/header';
import { Text } from '@/components/obytes';

export default function GuidesScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Header style={styles.header} />

      <View style={styles.container} className="h-full">
        <Text tx="guides.title" className="text-2xl font-bold" />
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
