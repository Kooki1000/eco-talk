import { ChevronDown, type LucideIcon } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import { StyleSheet } from 'react-native';

import { Text, View } from './obytes';
import { black, white } from './obytes/colors';

type Prop = {
  IconComponent: LucideIcon;
  text: string;
};

const InfoRow: React.FC<Prop> = ({ IconComponent, text }) => {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View className="mb-4 flex flex-row items-center">
      <IconComponent color={isDark ? white : black} size={28} />
      <Text className="text-lg" style={styles.text}>
        {text}
      </Text>
      <ChevronDown color={isDark ? white : black} size={28} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginLeft: 12,
  },
});

export default InfoRow;
