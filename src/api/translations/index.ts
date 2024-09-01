import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/constants/queryKeys';
import { supabase } from '@/lib/supabase';
import type { Tables } from '@/types/database.types';

interface FetchTranslationsData {
  langCode: string;
  postId?: string;
  replyId?: string;
  showTranslation: boolean;
}

export const useFetchTranslations = ({
  langCode,
  postId,
  replyId,
  showTranslation,
}: FetchTranslationsData) => {
  return useQuery({
    queryKey: [QUERY_KEYS.TRANSLATIONS, langCode, postId, replyId],
    enabled: !showTranslation && (!!postId || !!replyId),
    queryFn: async () => {
      if (!postId && !replyId) {
        throw new Error('postId or replyId is required');
      }

      const { data: translationsData, error: translationsError } =
        await supabase
          .from('translations')
          .select('*')
          .eq('lang_code', langCode)
          .or(`post.eq.${postId},reply.eq.${replyId}`)
          .single();

      if (translationsError) {
        throw new Error(translationsError.message);
      }

      return translationsData as Tables<'translations'>;
    },
  });
};
