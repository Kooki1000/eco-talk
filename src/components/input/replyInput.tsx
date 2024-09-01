import { CircleUserRound } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import { useEffect, useState } from 'react';
import type { TextInput } from 'react-native';
import { StyleSheet, View } from 'react-native';

import { useCreateReply } from '@/api/replies';
import { Image, Input } from '@/components/obytes';
import { black, white } from '@/components/obytes/colors';
import { useAuth } from '@/providers/auth-provider';

interface KeyboardInputProps {
  postId: string | null;
  inputRef: React.RefObject<TextInput>;
}

const ReplyInput: React.FC<KeyboardInputProps> = ({ postId, inputRef }) => {
  const { profile } = useAuth();

  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  const { mutate: createReply } = useCreateReply();

  const [inputValue, setInputValue] = useState('');
  const [inputDisabled, setInputDisabled] = useState(true);

  useEffect(() => {
    if (postId) {
      setInputDisabled(false);
    }
  }, [postId]);

  const handleSubmit = () => {
    if (!inputValue.trim() || !profile || !postId) {
      return;
    }

    createReply(
      { userId: profile.id, content: inputValue, postId: postId },
      {
        onSuccess: () => {
          if (inputRef.current) {
            inputRef.current.blur();
          }

          setInputValue('');
          setInputDisabled(true);
        },
      }
    );
  };

  return (
    <View
      style={styles.floatingView}
      className="flex-row border-t-2 border-[#CBBDBD] bg-white px-2 py-3 dark:bg-black"
    >
      <View className="mr-2">
        {profile?.avatar_url ? (
          <Image
            source={{ uri: profile.avatar_url }}
            style={{ width: 36, height: 36, borderRadius: 18 }}
          />
        ) : (
          <CircleUserRound
            color={isDark ? white : black}
            size={36}
            strokeWidth={1}
          />
        )}
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
