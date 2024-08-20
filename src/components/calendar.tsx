import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { memo, useMemo } from 'react';
import { View } from 'react-native';
import type { VariantProps } from 'tailwind-variants';
import { tv } from 'tailwind-variants';

import type { CalendarDataType } from '@/types/types';

import { Text } from './obytes';

dayjs.extend(localizedFormat);

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
  data: CalendarDataType;
  containerClassName?: string;
}

const CalendarComponent = ({
  data,
  containerClassName = '',
  ...props
}: Props) => {
  const styles = useMemo(() => calendar({ variant: data.type }), [data.type]);

  return (
    <View
      className={styles.container({ className: containerClassName })}
      {...props}
    >
      <View
        className="w-full flex-row items-center"
        style={{ paddingLeft: 12 }}
      >
        <View className="items-center" style={{ marginRight: 28 }}>
          <Text className="text-lg">{dayjs(data.date).format('L')}</Text>
          <Text className="text-lg">{dayjs(data.date).format('dddd')}</Text>
        </View>

        <Text className="text-center text-xl" tx={`calendar.${data.type}`} />
      </View>
    </View>
  );
};

export const Calendar = memo(CalendarComponent);
