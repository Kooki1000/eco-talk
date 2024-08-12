import * as ImagePicker from 'expo-image-picker';
import { ImageUp } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { View } from './obytes';
import { black, white } from './obytes/colors';

interface ImageInputProps {
  setImage: (uri: string) => void;
}

const ImageInput: React.FC<ImageInputProps> = ({ setImage }) => {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  const handleImagePickerPress = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={handleImagePickerPress}>
        <ImageUp
          color={isDark ? white : black}
          size={24}
          strokeWidth={1}
          className="items-center"
        />
      </TouchableOpacity>
    </View>
  );
};

export default ImageInput;
