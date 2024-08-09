import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { forwardRef, useMemo } from 'react';
import { View } from 'react-native';
import type { VariantProps } from 'tailwind-variants';
import { tv } from 'tailwind-variants';

import type { TxKeyPath } from '@/i18n';

import { Text } from './obytes';

dayjs.extend(localizedFormat);

const calendar = tv({
  slots: {
    container: 'mb-2 size-fit rounded-lg p-4',
  },

  variants: {
    variant: {
      Burnable: {
        container: 'bg-red-100 dark:bg-red-400',
      },
      NonBurnable: {
        container: 'bg-orange-100 dark:bg-orange-400',
      },
      Bulky: {
        container: 'bg-green-100 dark:bg-green-500',
      },
      Recyclable: {
        container: 'bg-blue-100 dark:bg-blue-400',
      },
      Other: {
        container: 'bg-purple-100 dark:bg-purple-400',
      },
    },
  },
});

type DayVariant = VariantProps<typeof calendar>;

interface Props extends DayVariant {
  variant?: 'Burnable' | 'NonBurnable' | 'Bulky' | 'Recyclable' | 'Other';
  containerClassName?: string;
  day?: string;
}

export const Calendar = forwardRef<View, Props>(
  ({ variant, containerClassName = '', day, ...props }, ref) => {
    const styles = useMemo(() => calendar({ variant }), [variant]);
    const type: TxKeyPath = `calendar.${variant}` as TxKeyPath;

    return (
      <View
        className={`${styles.container({
          className: containerClassName,
        })} flex-row items-center`}
        {...props}
        ref={ref}
      >
        <View className="items-center">
          <Text className="text-lg">{dayjs(day).format('L')}</Text>
          <Text className="text-lg">{dayjs(day).format('dddd')}</Text>
        </View>
        <Text className="ml-6 mr-20 text-2xl" tx={type} />
      </View>
    );
  }
);
