import { StyleSheet, View } from 'react-native';

import { Text } from '../obytes';

const PostsHeader = () => {
  return (
    <View style={styles.container} className="mx-3 mt-6 rounded-sm py-4">
      <Text tx="posts.title" className="text-2xl font-bold" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    top: 0,
    alignItems: 'center',
  },
});

export default PostsHeader;
