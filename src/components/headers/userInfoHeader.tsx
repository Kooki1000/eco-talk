import { Link } from 'expo-router';
import { ChevronDown, CircleUserRound } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import { StyleSheet, View, type ViewProps } from 'react-native';

import { Text } from '../obytes';
import { black, white } from '../obytes/colors';

interface Props extends ViewProps {
  className?: string;
}

const UserInfoHeader = ({ style, className }: Props) => {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View style={[style, styles.container]} className={className}>
      <View style={styles.leftContainer}>
        <Link href={'/(tabs)/profile'} asChild>
          <CircleUserRound
            color={isDark ? white : black}
            size={40}
            strokeWidth={1}
          />
        </Link>
      </View>

      <View style={styles.rightContainer}>
        <Text className="text-lg">Yokohama City</Text>
        <ChevronDown color={isDark ? white : black} size={32} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderColor: '#CBBDBD',
    paddingBottom: 8,
  },
  leftContainer: {
    alignItems: 'center',
    marginLeft: 10,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
});

export default UserInfoHeader;
