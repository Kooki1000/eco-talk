/* eslint-disable max-lines-per-function */
import { Image } from 'expo-image';
import { CircleUserRound, Heart } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import { memo, useMemo, useState } from 'react';
import { Pressable, StyleSheet, TouchableOpacity, View } from 'react-native';
import type { VariantProps } from 'tailwind-variants';
import { tv } from 'tailwind-variants';

import { loremText } from '@/constants/dummyData';
import type { PostDataType } from '@/lib/types';

import { Text } from './obytes';
import { black, red, white } from './obytes/colors';

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
  onPress: () => void;
  post: PostDataType;
  containerClassName?: string;
}

const PostComponent = ({ post, containerClassName = '', ...props }: Props) => {
  const { variant = 'red' } = post;
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
    <View
      className={styles.container({ className: containerClassName })}
      {...props}
    >
      <View className="flex-row items-center">
        {post.user.avatar ? (
          <Image
            source={{ uri: post.user.avatar }}
            style={{ width: 48, height: 48 }}
          />
        ) : (
          <CircleUserRound
            color={isDark ? white : black}
            size={48}
            strokeWidth={1}
          />
        )}

        <Text className="ml-2 text-xl">{post.user.name}</Text>
      </View>

      <View className="mt-4 self-center px-3">
        <Text className="mb-4">{post.text}</Text>

        <View style={styling.translateContainer}>
          <Pressable
            onPress={displayTranslation}
            className={styles.translation({})}
            style={styling.translateButton}
          >
            <Text
              tx={showTranslation ? 'post.hide' : 'post.translate'}
              className="text-center text-sm"
            />
          </Pressable>
        </View>
      </View>

      {showTranslation && (
        <View
          style={{
            borderTopWidth: 1,
            marginTop: 10,
            marginBottom: 10,
            borderColor: isDark ? '#e5e7eb' : '#9ca3af',
          }}
        >
          <Text className="my-4 px-3" style={{ paddingTop: 10 }}>
            {loremText}
          </Text>
        </View>
      )}

      <View className="ml-6">
        <TouchableOpacity
          onPress={onThumbsUp}
          className="flex-row items-center"
        >
          {post.isLiked ? (
            <Heart color={'none'} fill={red} />
          ) : (
            <Heart color={isDark ? white : black} />
          )}
          <Text className="ml-2 text-lg">{post.likes}</Text>
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

export const Post = memo(PostComponent);
