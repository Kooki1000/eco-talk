import { Link, Redirect, router } from 'expo-router';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';

import LoadingIndicator from '@/components/loadingIndicator';
import { Button, Image, Text } from '@/components/obytes';
import { useAuth } from '@/providers/auth-provider';

export default function IndexScreen() {
  const { profile, loading } = useAuth();

  if (loading) {
    return <LoadingIndicator />;
  }

  if (profile) {
    return <Redirect href="/(tabs)" />;
  }

  const onLogIn = () => {
    router.navigate('/(auth)/log-in');
  };

  const onSignUp = () => {
    router.navigate('/(auth)/sign-up');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('@assets/images/logo.png')}
        style={styles.image}
        contentFit="contain"
        cachePolicy={'disk'}
      />

      <Text tx="auth.title" className="my-5 text-center text-4xl font-bold" />
      <Text tx="auth.description" className="mx-8 mb-5 text-center text-2xl" />

      <Button
        onPress={onLogIn}
        tx="auth.logIn"
        textClassName="text-xl text-black"
        className="h-12 w-96 rounded-3xl border border-solid border-black bg-white"
      />

      <Button
        onPress={onSignUp}
        tx="auth.signUp"
        textClassName="text-xl text-black"
        className="h-12 w-96 rounded-3xl border border-solid border-black bg-white"
      />

      <Link href="/(tabs)" className="mt-10 underline">
        <Text tx="auth.visitor" />
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
