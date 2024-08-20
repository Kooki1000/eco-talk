/* eslint-disable max-lines-per-function */
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import utc from 'dayjs/plugin/utc';
import { Image } from 'expo-image';
import { CircleUserRound, Heart } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import { memo, useMemo, useState } from 'react';
import { Pressable, StyleSheet, TouchableOpacity, View } from 'react-native';
import type { VariantProps } from 'tailwind-variants';
import { tv } from 'tailwind-variants';

import { loremText } from '@/constants/dummyData';
import type { ReplyDataType, VariantColor } from '@/types/types';

import DeleteButton from './deleteButton';
import { Text } from './obytes';
import { black, white } from './obytes/colors';

dayjs.extend(utc);
dayjs.extend(localizedFormat);

const postVariant = tv({
  slots: {
    translation: 'justify-center rounded-2xl',
  },

  variants: {
    variant: {
      red: {
        translation: 'bg-red-200 dark:bg-red-500',
      },
      orange: {
        translation: 'bg-orange-200 dark:bg-orange-500',
      },
      green: {
        translation: 'bg-green-200 dark:bg-green-600',
      },
      blue: {
        translation: 'bg-blue-200 dark:bg-blue-600',
      },
      purple: {
        translation: 'bg-purple-200 dark:bg-purple-500',
      },
    },
  },

  defaultVariants: {
    variant: 'red',
  },
});

type PostVariant = VariantProps<typeof postVariant>;

interface Props extends PostVariant {
  variant: VariantColor;
  reply: ReplyDataType;
  onReplyPress: (id: string) => void;
}

const ReplyComponent = ({ reply, variant, onReplyPress, ...props }: Props) => {
  const styles = useMemo(() => postVariant({ variant }), [variant]);

  const [showTranslation, setShowTranslation] = useState(false);

  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  const onThumbsUp = () => {
    console.log('Thumbs up');
  };

  const displayTranslation = () => {
    setShowTranslation((prevState) => !prevState);
  };

  return (
    <View className="ml-12 mt-4 bg-transparent" {...props}>
      <DeleteButton type="reply" id={reply.id} />

      <View className="mt-4 flex-row items-center justify-between">
        <View className="flex-row items-center">
          {reply.user.avatar ? (
            <Image
              source={{ uri: reply.user.avatar }}
              style={{ width: 36, height: 36 }}
            />
          ) : (
            <CircleUserRound
              color={isDark ? white : black}
              size={36}
              strokeWidth={1}
            />
          )}

          <Text className="ml-2 text-lg">{reply.user.name}</Text>
        </View>

        <Text className="mr-4 text-sm">
          {dayjs.utc(reply.postedAt).format('LLL')}
        </Text>
      </View>

      <Text className="my-4 px-4">{reply.text}</Text>

      {showTranslation && (
        <View
          style={{
            borderTopWidth: 1,
            marginTop: 10,
            marginBottom: 10,
            borderColor: isDark ? '#e5e7eb' : '#9ca3af',
          }}
        >
          <Text className="my-4 px-4">{loremText}</Text>
        </View>
      )}

      <View style={styling.translateContainer}>
        <Pressable
          onPress={displayTranslation}
          className={styles.translation({})}
          style={styling.translateButton}
        >
          <Text
            tx={
              showTranslation ? 'post.hideTranslation' : 'post.showTranslation'
            }
            className="text-center text-sm"
          />
        </Pressable>
      </View>

      <View className="ml-8 flex-row">
        <Text
          tx="post.reply"
          onPress={() => onReplyPress(`Reply ${reply.id}`)}
          className="mr-6"
        />

        <TouchableOpacity
          onPress={onThumbsUp}
          className="flex-row items-center"
        >
          {reply.isLiked ? (
            <Heart color={'none'} fill={'#ff0000'} />
          ) : (
            <Heart color={isDark ? white : black} />
          )}
          <Text className="ml-2 text-lg">{reply.likes}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styling = StyleSheet.create({
  translateContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  translateButton: {
    height: 36,
    width: 120,
  },
});

export const Reply = memo(ReplyComponent);
