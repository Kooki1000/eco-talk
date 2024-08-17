import { X } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import { Alert, Platform, Pressable, StyleSheet } from 'react-native';

import { translate } from '@/i18n';

import { black, white } from './obytes/colors';

interface DeleteButtonProps {
  type: 'post' | 'reply';
  id: string;
}

const DeleteButton = ({ type, id }: DeleteButtonProps) => {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  const showDeleteConfirmation = () => {
    Alert.alert(
      translate('confirmDelete.confirm'),
      translate('confirmDelete.description'),
      [
        {
          text: translate('confirmDelete.cancel'),
        },
        {
          text: translate('confirmDelete.delete'),
          style: Platform.OS === 'ios' ? 'destructive' : undefined,
          onPress: () => {
            if (type === 'post') {
              onPostDelete();
            } else {
              onReplyDelete();
            }
          },
        },
      ]
    );
  };

  const onPostDelete = () => {
    console.log(`Delete post ${id}`);
  };

  const onReplyDelete = () => {
    console.log(`Delete reply ${id}`);
  };

  return (
    <Pressable
      onPress={() => showDeleteConfirmation()}
      style={styles.container}
    >
      <X size={20} color={isDark ? white : black} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 16,
    top: 0,
  },
});

export default DeleteButton;
