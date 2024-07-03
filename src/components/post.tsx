import { CircleUserRound, ThumbsDown, ThumbsUp } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import { useMemo } from 'react';
import { TouchableOpacity, View } from 'react-native';
import type { VariantProps } from 'tailwind-variants';
import { tv } from 'tailwind-variants';

import { translate } from '@/i18n';
import type { Language } from '@/i18n/resources';

import { Text } from './obytes';
import { black, white } from './obytes/colors';

const post = tv({
  slots: {
    container: 'mb-5 w-[90%] rounded-lg p-4',
    language: 'mr-1 flex h-11 w-48 justify-center rounded-2xl',
  },

  variants: {
    variant: {
      red: {
        container: 'bg-[#F1D9D9] dark:bg-[#E26D6D]',
        language: 'bg-[#DFB2B2] dark:bg-[#B42121]',
      },
      orange: {
        container: 'bg-[#FAE8DB] dark:bg-[#FCA363]',
        language: 'bg-[#FAD2B6] dark:bg-[#CB5704]',
      },
      green: {
        container: 'bg-[#C6DEB8] dark:bg-[#4F9467]',
        language: 'bg-[#A3C68A] dark:bg-[#346D48]',
      },
      blue: {
        container: 'bg-[#B8D8E6] dark:bg-[#3A9CA8]',
        language: 'bg-[#8DBECF] dark:bg-[#1E6A7A]',
      },
      purple: {
        container: 'bg-[#D4C9E2] dark:bg-[#8E6FB7]',
        language: 'bg-[#B9A4D0] dark:bg-[#5C3A8A]',
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
  text: string;
  langCode: Language;
}

const Post = ({ variant = 'red', text, langCode }: Props) => {
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
    <View className={styles.container({})}>
      <View className="flex-row items-center justify-between">
        <CircleUserRound
          color={isDark ? white : black}
          size={48}
          strokeWidth={1}
        />

        <View className={styles.language({})}>
          <Text className="text-center text-sm">
            {translate('post.language', {
              language: translate(`locales.${langCode}`),
            })}
          </Text>
        </View>
      </View>

      <View className="mt-4 w-5/6 self-center px-3">
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
    </View>
  );
};

export default Post;
