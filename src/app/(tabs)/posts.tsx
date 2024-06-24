import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/themed';

export default function PostsScreen() {
  return (
    <View style={styles.container}>
      <Text className="text-2xl">Posts</Text>
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
