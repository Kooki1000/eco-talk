import { StyleSheet, View } from 'react-native';

import { Text } from '@/components/obytes';

export default function GuidesScreen() {
  return (
    <View style={styles.container}>
      <Text className="text-2xl">Guides</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
