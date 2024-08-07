import type { TxKeyPath } from '@/i18n';
import { translate } from '@/i18n';

const getDayOfWeek = (date: Date): TxKeyPath => {
  const daysOfWeek: TxKeyPath[] = [
    'calendar.days.Sun',
    'calendar.days.Mon',
    'calendar.days.Tue',
    'calendar.days.Wed',
    'calendar.days.Thu',
    'calendar.days.Fri',
    'calendar.days.Sat',
  ];
  return daysOfWeek[date.getDay()];
};

const getNextFiveDays = (): { date: Date; dayOfWeek: TxKeyPath }[] => {
  const today = new Date();
  const nextFiveDays = [];
  for (let i = 0; i < 5; i++) {
    const nextDay = new Date(today);
    nextDay.setDate(today.getDate() + i);
    nextFiveDays.push({
      date: nextDay,
      dayOfWeek: getDayOfWeek(nextDay),
    });
  }
  return nextFiveDays;
};

export const translatedDays = getNextFiveDays().map(({ date, dayOfWeek }) => ({
  date: date.toLocaleDateString(),
  dayOfWeek: translate(dayOfWeek),
}));
