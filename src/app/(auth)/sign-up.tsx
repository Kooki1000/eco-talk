import { Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { Text } from '@/components/obytes';
import { translate } from '@/i18n';

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: translate('signUp.title') }} />
      <Text className="text-2xl">Sign Up</Text>
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

export default SignUpScreen;
