import dayjs from 'dayjs';

export const nextMonth: { date: string; dayOfWeek: string }[] = [];

for (let i = 0; i < 30; i++) {
  const date = dayjs().add(i, 'day');
  const formattedDate = date.format('YYYY-MM-DD');
  const dayOfWeek = date.format('dddd');
  nextMonth.push({ date: formattedDate, dayOfWeek });
}
