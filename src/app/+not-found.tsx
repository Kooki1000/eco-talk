import { Link, Stack } from 'expo-router';
import { MoveLeft } from 'lucide-react-native';
import { StyleSheet, View } from 'react-native';

import { Text } from '@/components/obytes';
import { black } from '@/components/obytes/colors';
import { translate } from '@/i18n';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          headerLeft: () => (
            <Link href="/" asChild>
              <MoveLeft color={black} />
            </Link>
          ),
          title: translate('notFound.title'),
        }}
      />

      <View style={styles.container}>
        <Text tx="notFound.description" style={styles.title} />

        <Link href="/" style={styles.link}>
          <Text tx="notFound.home" style={styles.linkText} />
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
