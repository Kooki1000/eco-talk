/* eslint-disable max-lines-per-function */
import { Check, Pencil, X } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import { useEffect, useRef, useState } from 'react';
import type { TextInput } from 'react-native';
import { Alert, Pressable, View } from 'react-native';

import { useUpdateUsername } from '@/api/update-profile';
import { Input } from '@/components/obytes';
import { black, white } from '@/components/obytes/colors';
import { translate } from '@/i18n';
import { useAuthStore } from '@/stores/useAuthStore';
import type { Tables } from '@/types/database.types';

interface UsernameInputProps {
  profile: Tables<'profiles'>;
}

const UsernameInput = ({ profile }: UsernameInputProps) => {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  const setProfile = useAuthStore((state) => state.setProfile);

  const [editable, setEditable] = useState(false);
  const [username, setUsername] = useState(profile.username ?? '');
  const inputRef = useRef<TextInput>(null);

  const { mutate: updateUsername } = useUpdateUsername();

  useEffect(() => {
    setUsername(username);
  }, [username]);

  const handlePencilPress = () => {
    setEditable(!editable);

    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const handleCancel = () => {
    inputRef.current?.blur();
    setEditable(false);
    setUsername(profile.username ?? '');
  };

  const handleUpdateUsername = () => {
    if (username.length < 3) {
      Alert.alert(translate('profile.username.length'));
      return;
    }

    updateUsername(
      { userId: profile.id, username },
      {
        onSuccess: (data) => {
          setEditable(false);
          inputRef.current?.blur();

          setProfile(data);
        },
        onError: () => {
          Alert.alert(translate('profile.username.error'));

          setUsername(profile.username ?? '');
          setEditable(false);
          inputRef.current?.blur();
        },
      }
    );
  };

  return (
    <View className="ml-6 flex-row items-center">
      <View className="mr-3">
        <Input
          ref={inputRef}
          className="text-xl font-bold dark:text-neutral-100"
          value={username}
          onChangeText={setUsername}
          maxLength={16}
        />
      </View>

      {!editable ? (
        <Pencil
          size={24}
          color={isDark ? white : black}
          onPress={handlePencilPress}
        />
      ) : (
        <View className="flex-row">
          <Pressable onPress={handleCancel}>
            <X size={24} color={isDark ? white : black} />
          </Pressable>

          <Pressable onPress={handleUpdateUsername}>
            <Check size={24} color={'red'} />
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default UsernameInput;
