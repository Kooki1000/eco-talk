import { AppleButton } from '@invertase/react-native-apple-authentication';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { router } from 'expo-router';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';

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
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Light}
        onPress={() => GoogleLogin()}
      />
      <AppleButton
        buttonStyle={AppleButton.Style.WHITE_OUTLINE}
        buttonType={AppleButton.Type.DEFAULT}
        style={{
          marginTop: 10,
          width: 306,
          height: 42,
        }}
        onPress={() => AppleLogin()}
      />
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
});
