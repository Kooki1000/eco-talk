import { CircleUserRound } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import { useEffect, useState } from 'react';
import type { TextInput } from 'react-native';
import { StyleSheet, View } from 'react-native';

import { Input } from '@/components/obytes';
import { black, white } from '@/components/obytes/colors';

interface KeyboardInputProps {
  replyId: string | null;
  inputRef: React.RefObject<TextInput>;
}

const ReplyInput: React.FC<KeyboardInputProps> = ({ replyId, inputRef }) => {
  const [inputValue, setInputValue] = useState('');
  const [inputDisabled, setInputDisabled] = useState(true);

  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  useEffect(() => {
    if (replyId) {
      setInputDisabled(false);
    }
  }, [replyId]);

  const handleSubmit = () => {
    if (!inputValue.trim()) {
      return;
    }

    console.log(`Replying to: ${replyId} with: ${inputValue}`);

    setInputValue('');
    setInputDisabled(true);
  };

  return (
    <View
      style={styles.floatingView}
      className="flex-row border-t-2 border-[#CBBDBD] bg-white px-2 py-3 dark:bg-black"
    >
      <View className="mr-2">
        <CircleUserRound
          color={isDark ? white : black}
          size={36}
          strokeWidth={1}
        />
      </View>

      <View style={{ flex: 1 }}>
        <Input
          ref={inputRef}
          disabled={inputDisabled}
          maxLength={200}
          value={inputValue}
          onChangeText={setInputValue}
          onSubmitEditing={handleSubmit}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  floatingView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default ReplyInput;
