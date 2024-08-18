import { Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { Text } from '@/components/obytes';
import { translate } from '@/i18n';

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: translate('signIn.title') }} />
      <Text className="text-2xl">Sign In</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SignInScreen;
