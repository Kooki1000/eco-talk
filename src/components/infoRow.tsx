import { ChevronDown, type LucideIcon } from 'lucide-react-native';

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
      <Text className="ml-4 text-lg">{text}</Text>
      <ChevronDown color={black} size={28} />
    </View>
  );
};

export default infoRow;
