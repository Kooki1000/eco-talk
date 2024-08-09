import { Link } from 'expo-router';
import { Send, X } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  type ViewProps,
} from 'react-native';

import { Text } from '../obytes';
import { black, white } from '../obytes/colors';

interface Props extends ViewProps {
  className?: string;
  onPress?: () => void;
}

const AddPostHeader = ({ style, className, onPress }: Props) => {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View style={[style, styles.container]} className={className}>
      <View style={styles.leftContainer}>
        <Link href={'/(tabs)/posts'} asChild>
          <X color={isDark ? white : black} size={40} strokeWidth={1} />
        </Link>
      </View>

      <Text className="text-lg">Yokohama City</Text>

      <TouchableOpacity onPress={onPress} style={styles.rightContainer}>
        <Send color={isDark ? white : black} size={32} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
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
    marginRight: 10,
  },
});

export default AddPostHeader;
