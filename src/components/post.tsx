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

import { loremText } from '@/constants/dummyData';
import { useAuth } from '@/providers/auth-provider';
import type { DetailedPost, VariantColor } from '@/types/types';

import DeleteButton from './input/deleteButton';
import { LikePost } from './likePost';
import { Image, Text } from './obytes';
import { black, white } from './obytes/colors';
import { Reply } from './reply';

dayjs.extend(utc);
dayjs.extend(localizedFormat);

const postVariant = tv({
  slots: {
    container: 'mb-5 size-fit w-full rounded-lg px-2 py-4',
    translation: 'justify-center rounded-2xl',
  },

  variants: {
    variant: {
      red: {
        container: 'bg-red-100 dark:bg-red-400',
        translation: 'bg-red-200 dark:bg-red-500',
      },
      orange: {
        container: 'bg-orange-100 dark:bg-orange-400',
        translation: 'bg-orange-200 dark:bg-orange-500',
      },
      green: {
        container: 'bg-green-100 dark:bg-green-500',
        translation: 'bg-green-200 dark:bg-green-600',
      },
      blue: {
        container: 'bg-blue-100 dark:bg-blue-500',
        translation: 'bg-blue-200 dark:bg-blue-600',
      },
      purple: {
        container: 'bg-purple-100 dark:bg-purple-400',
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
  post: DetailedPost;
  containerClassName?: string;
  onReplyPress: (id: string) => void;
}

const PostComponent = ({
  post,
  containerClassName = '',
  onReplyPress,
  ...props
}: Props) => {
  const variant: VariantColor = post.variant ?? 'red';
  const styles = useMemo(() => postVariant({ variant }), [variant]);

  const { profile } = useAuth();
  const isAuthor = profile?.id === post.profiles.id;

  const [showReply, setShowReply] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);

  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  const displayTranslation = () => {
    setShowTranslation((prevState) => !prevState);
  };

  const displayReply = () => {
    setShowReply((prevState) => !prevState);
  };

  return (
    <View
      className={styles.container({ className: containerClassName })}
      {...props}
    >
      {isAuthor && (
        <View style={{ marginTop: 2, marginBottom: 8 }}>
          <DeleteButton type="post" id={post.id} />
        </View>
      )}

      <View className="mt-2 flex-row items-center justify-between">
        <View className="flex-row items-center">
          {post.profiles.avatar_url ? (
            <Image
              source={{ uri: post.profiles.avatar_url }}
              style={{ width: 36, height: 36, borderRadius: 18 }}
            />
          ) : (
            <CircleUserRound
              color={isDark ? white : black}
              size={36}
              strokeWidth={1}
            />
          )}

          <Text className="ml-2">{post.profiles.username}</Text>
        </View>

        <Text className="mr-4 text-sm">
          {dayjs.utc(post.created_at).format('LLL')}
        </Text>
      </View>

      <Text className="my-4 px-4">{post.content}</Text>

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

      {post.img_url && (
        <Image
          source={{ uri: post.img_url }}
          style={styling.image}
          contentFit="contain"
          className="self-center"
        />
      )}

      <View className="ml-8 flex-row">
        <Text
          tx="post.reply"
          onPress={() => onReplyPress(`Post ${post.id}`)}
          className="mr-6"
        />

        <LikePost post={post} />
      </View>

      {post.replies.length > 0 && (
        <>
          {showReply && (
            <>
              {post.replies.map((reply) => (
                <Reply
                  key={reply.id}
                  variant={variant}
                  reply={reply}
                  onReplyPress={onReplyPress}
                />
              ))}
            </>
          )}

          <Text
            tx={showReply ? 'post.hideReply' : 'post.showReply'}
            className="mt-4 text-center font-medium"
            onPress={displayReply}
          />
        </>
      )}
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
  image: {
    width: 350,
    height: 300,
    marginVertical: 10,
  },
});

export const Post = memo(PostComponent);
