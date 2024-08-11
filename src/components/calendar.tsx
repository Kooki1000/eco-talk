import { forwardRef, memo, useMemo } from 'react';
import { View } from 'react-native';
import type { VariantProps } from 'tailwind-variants';
import { tv } from 'tailwind-variants';

import type { TxKeyPath } from '@/i18n';

import { Text } from './obytes';

const calendar = tv({
  slots: {
    container: 'mb-2 size-fit w-full rounded-lg p-4',
  },

  variants: {
    variant: {
      burnable: {
        container: 'bg-red-200 dark:bg-red-400',
      },
      nonBurnable: {
        container: 'bg-orange-200 dark:bg-orange-400',
      },
      bulky: {
        container: 'bg-green-200 dark:bg-green-500',
      },
      recyclable: {
        container: 'bg-blue-200 dark:bg-blue-400',
      },
      other: {
        container: 'bg-purple-200 dark:bg-purple-400',
      },
    },
  },
});

type DayVariant = VariantProps<typeof calendar>;

interface Props extends DayVariant {
  variant?: 'burnable' | 'nonBurnable' | 'bulky' | 'recyclable' | 'other';
  containerClassName?: string;
  date?: string;
  dayOfWeek?: string;
}

const CalendarComponent = forwardRef<View, Props>(
  ({ variant, containerClassName = '', date, dayOfWeek, ...props }, ref) => {
    const styles = useMemo(() => calendar({ variant }), [variant]);
    const type: TxKeyPath = `calendar.${variant}` as TxKeyPath;

    return (
      <View
        className={styles.container({ className: containerClassName })}
        {...props}
        ref={ref}
      >
        <View
          className="w-full flex-row items-center"
          style={{ paddingLeft: 12 }}
        >
          <View className="items-center" style={{ marginRight: 28 }}>
            <Text className="text-lg">{date}</Text>
            <Text className="text-lg">{dayOfWeek}</Text>
          </View>

          <Text className="text-center text-xl" tx={type} />
        </View>
      </View>
    );
  }
);

export const Calendar = memo(CalendarComponent);
