import { CalendarCheck } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import { StyleSheet, View } from 'react-native';

import { Text } from '../obytes';
import { black, white } from '../obytes/colors';

const HomeHeader = () => {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <>
      <Text tx="home.title" className="mt-8 self-center text-2xl font-bold" />

      <View style={styles.container}>
        <CalendarCheck
          color={isDark ? white : black}
          size={28}
          strokeWidth={1}
        />
        <Text tx="home.upcoming" className="ml-2 text-xl font-medium" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeHeader;
