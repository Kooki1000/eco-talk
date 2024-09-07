/* eslint-disable max-lines-per-function */
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import utc from 'dayjs/plugin/utc';
import { CircleUserRound } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import { memo, useMemo, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import type { VariantProps } from 'tailwind-variants';
import { tv } from 'tailwind-variants';

import { useSelectedLanguage } from '@/i18n';
import { useAuth } from '@/providers/auth-provider';
import type { DetailedReply, VariantColor } from '@/types/types';

import DeleteButton from './input/deleteButton';
import { LikeReply } from './likeReply';
import { Image, Text } from './obytes';
import { black, white } from './obytes/colors';
import { TranslatedText } from './translatedText';

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
  reply: DetailedReply;
  onReplyPress: (id: string) => void;
}

const ReplyComponent = ({ reply, variant, onReplyPress, ...props }: Props) => {
  const styles = useMemo(() => postVariant({ variant }), [variant]);

  const [showTranslation, setShowTranslation] = useState(false);

  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  const { language } = useSelectedLanguage();

  const { profile } = useAuth();
  const isAuthor = profile?.id === reply.profiles.id;

  const displayTranslation = () => {
    setShowTranslation((prevState) => !prevState);
  };

  return (
    <View className="ml-12 mt-4 bg-transparent" {...props}>
      {isAuthor && <DeleteButton type="reply" id={reply.id} />}

      <View className="mt-4">
        <View className="flex-row items-center">
          {reply.profiles.avatar_url ? (
            <Image
              source={{ uri: reply.profiles.avatar_url }}
              style={{
                width: 24,
                height: 24,
                borderRadius: 12,
                borderWidth: 1,
              }}
            />
          ) : (
            <CircleUserRound
              color={isDark ? white : black}
              size={24}
              strokeWidth={1}
            />
          )}
          <Text className="ml-2">{reply.profiles.username}</Text>
        </View>

        <Text className="ml-12 text-sm">
          {dayjs.utc(reply.created_at).format('LLL')}
        </Text>
      </View>

      <Text className="my-4 px-4">{reply.content}</Text>

      {showTranslation && (
        <TranslatedText
          langCode={language}
          replyId={reply.id}
          content={reply.content}
        />
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
          onPress={() => onReplyPress(reply.id)}
          className="mr-6"
        />

        <LikeReply reply={reply} />
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
