import { Link, router } from 'expo-router';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';

import { Button, Image, Text } from '@/components/obytes';

export default function index() {
  const GoogleLogin = () => {
    console.log('Logged in with Google');
    router.push('/(tabs)');
  };

  const AppleLogin = () => {
    console.log('Logged in with Apple');
    router.push('/(tabs)');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.image}
        contentFit="contain"
      />

      <Text className="my-5 text-center text-5xl font-bold">
        Welcome to EcoTalk
      </Text>

      <Text className="mx-8 mb-5 text-center text-2xl">
        Your tool for navigating Japan's trash rules.
      </Text>

      <Button
        onPress={GoogleLogin}
        tx="auth.apple"
        textClassName="text-xl text-black"
        className="h-12 w-96 rounded-3xl border border-solid border-black bg-white"
      />

      <Button
        onPress={AppleLogin}
        tx="auth.google"
        textClassName="text-xl text-black"
        className="h-12 w-96 rounded-3xl border border-solid border-black bg-white"
      />

      <Link href="/(tabs)" className="mt-10">
        Explore as visitor
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
});
