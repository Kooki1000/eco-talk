import { CircleUserRound, ThumbsDown, ThumbsUp } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import { forwardRef, memo, useMemo } from 'react';
import { Pressable, TouchableOpacity, View } from 'react-native';
import type { VariantProps } from 'tailwind-variants';
import { tv } from 'tailwind-variants';

import { translate } from '@/i18n';
import type { Language } from '@/i18n/resources';

import { Text } from './obytes';
import { black, white } from './obytes/colors';

const post = tv({
  slots: {
    container: 'mb-5 size-fit w-full rounded-lg py-4',
    language: 'mr-1 flex h-11 justify-center rounded-2xl px-2',
  },

  variants: {
    variant: {
      red: {
        container: 'bg-red-100 dark:bg-red-400',
        language: 'bg-red-200 dark:bg-red-500',
      },
      orange: {
        container: 'bg-orange-100 dark:bg-orange-400',
        language: 'bg-orange-200 dark:bg-orange-500',
      },
      green: {
        container: 'bg-green-100 dark:bg-green-500',
        language: 'bg-green-200 dark:bg-green-600',
      },
      blue: {
        container: 'bg-blue-100 dark:bg-blue-500',
        language: 'bg-blue-200 dark:bg-blue-600',
      },
      purple: {
        container: 'bg-purple-100 dark:bg-purple-400',
        language: 'bg-purple-200 dark:bg-purple-500',
      },
    },
  },

  defaultVariants: {
    variant: 'red',
  },
});

type PostVariant = VariantProps<typeof post>;

interface Props extends PostVariant {
  variant?: 'red' | 'orange' | 'green' | 'blue' | 'purple';
  onPress: () => void;
  text: string;
  langCode: Language;
  containerClassName?: string;
  languageClassName?: string;
}

const PostComponent = forwardRef<View, Props>(
  (
    {
      variant = 'red',
      text,
      langCode,
      containerClassName = '',
      languageClassName = '',
      ...props
    },
    ref
  ) => {
    const styles = useMemo(() => post({ variant }), [variant]);

    const { colorScheme } = useColorScheme();
    const isDark = colorScheme === 'dark';

    const onThumbsUp = () => {
      console.log('Thumbs up');
    };

    const onThumbsDown = () => {
      console.log('Thumbs down');
    };

    return (
      <Pressable
        className={styles.container({ className: containerClassName })}
        {...props}
        ref={ref}
      >
        <View className="flex-row items-center justify-between">
          <CircleUserRound
            color={isDark ? white : black}
            size={48}
            strokeWidth={1}
          />

          <View className={styles.language({ className: languageClassName })}>
            <Text className="text-center text-sm">
              {translate('post.translate')}
              {translate(`translatedLocales.${langCode}`)}
            </Text>
          </View>
        </View>

        <View className="mt-4 self-center px-3">
          <Text className="mb-4">{text}</Text>

          <View className="ml-6 flex-row">
            <TouchableOpacity onPress={onThumbsUp}>
              <ThumbsUp color={isDark ? white : black} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onThumbsDown} className="ml-4">
              <ThumbsDown color={isDark ? white : black} />
            </TouchableOpacity>
          </View>
        </View>
      </Pressable>
    );
  }
);

export const Post = memo(PostComponent);
