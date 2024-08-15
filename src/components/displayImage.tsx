import { CircleX } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Image } from './obytes';
import { View } from './obytes';
import { black, white } from './obytes/colors';

interface DisplayImageProps {
  image: string;
  onRemoveImage: () => void;
}

const DisplayImage: React.FC<DisplayImageProps> = ({
  image,
  onRemoveImage,
}) => {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  if (!image) return null;

  return (
    <View className="mb-4">
      <Image
        source={{ uri: image }}
        style={styles.image}
        contentFit="contain"
        className="self-center"
      />
      <TouchableOpacity onPress={onRemoveImage}>
        <CircleX
          color={isDark ? white : black}
          size={18}
          strokeWidth={2}
          style={styles.circleX}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 350,
    height: 300,
  },
  circleX: {
    alignSelf: 'center',
    marginTop: 5,
  },
});

export default DisplayImage;
