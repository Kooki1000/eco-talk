import { ChevronDown, type LucideIcon } from 'lucide-react-native';
import { StyleSheet } from 'react-native';

import { Text, View } from './obytes';
import { black } from './obytes/colors';

type Prop = {
  IconComponent: LucideIcon;
  text: string;
};

const infoRow: React.FC<Prop> = ({ IconComponent, text }) => {
  return (
    <View className="mb-4 flex flex-row items-center">
      <IconComponent color={black} size={28} />
      <Text className="text-lg" style={styles.text}>
        {text}
      </Text>
      <ChevronDown color={black} size={28} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginLeft: 10,
  },
});

export default infoRow;
