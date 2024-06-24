import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function index() {
  return (
    <SafeAreaView style={styles.container}>
      <Link href={'/(tabs)'} className="border-collapse bg-red-700 p-10">
        Link to tabs
      </Link>
    </SafeAreaView>
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
