import { Bell } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import { forwardRef, useMemo } from 'react';
import { TouchableOpacity, View } from 'react-native';
import type { VariantProps } from 'tailwind-variants';
import { tv } from 'tailwind-variants';

import type { TxKeyPath } from '@/i18n';
import { translate } from '@/i18n';

import { Text } from './obytes';
import { black, white } from './obytes/colors';

const day = tv({
  slots: {
    container: 'w-100 mb-2 size-fit rounded-lg p-4',
  },

  variants: {
    variant: {
      red: {
        container: 'bg-red-100 dark:bg-red-400',
      },
      orange: {
        container: 'bg-orange-100 dark:bg-orange-400',
      },
      green: {
        container: 'bg-green-100 dark:bg-green-500',
      },
      blue: {
        container: 'bg-blue-100 dark:bg-blue-400',
      },
      purple: {
        container: 'bg-purple-100 dark:bg-purple-400',
      },
    },
  },

  defaultVariants: {
    variant: 'red',
  },
});

type DayVariant = VariantProps<typeof day>;

interface Props extends DayVariant {
  variant?: 'red' | 'orange' | 'green' | 'blue' | 'purple';
  text: TxKeyPath;
  containerClassName?: string;
  days: { date: string; dayOfWeek: string }[];
}

export const Calendar = forwardRef<View, Props>(
  ({ variant = 'red', text, containerClassName = '', days, ...props }, ref) => {
    const styles = useMemo(() => day({ variant }), [variant]);

    const { colorScheme } = useColorScheme();
    const isDark = colorScheme === 'dark';

    const onNotificationPress = () => {
      console.log('Notification');
    };

    return (
      <View
        className={`${styles.container({
          className: containerClassName,
        })} flex-row items-center`}
        {...props}
        ref={ref}
      >
        {days.map((date, index) => (
          <View key={index} className="items-center">
            <Text className="text-lg">{date.date}</Text>
            <Text className="text-lg">{date.dayOfWeek}</Text>
          </View>
        ))}
        <Text className="ml-6 mr-20 text-2xl">{translate(text)}</Text>
        <TouchableOpacity onPress={onNotificationPress} className="flex-row">
          <Bell
            color={isDark ? white : black}
            size={36}
            strokeWidth={1}
            className="ml-10"
          />
        </TouchableOpacity>
      </View>
    );
  }
);
