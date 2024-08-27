import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';

import { QUERY_KEYS } from '@/constants/queryKeys';
import { supabase } from '@/lib/supabase';
import type { Tables } from '@/types/database.types';

export const useTrashSchedule = (addressId: string) => {
  const today = dayjs().format('YYYY-MM-DD');
  const thirtyDaysFromNow = dayjs().add(30, 'day').format('YYYY-MM-DD');

  return useQuery<Tables<'trash_schedule'>[]>({
    queryKey: [QUERY_KEYS.TRASH_SCHEDULE, addressId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('trash_schedule')
        .select('*')
        .eq('address', addressId)
        .gte('date', today)
        .lte('date', thirtyDaysFromNow);

      if (error) {
        throw new Error(error.message);
      }

      return data as Tables<'trash_schedule'>[];
    },
  });
};
