import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/themed';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text className="text-2xl">Profile</Text>
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
