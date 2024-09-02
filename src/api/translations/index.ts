import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/constants/queryKeys';
import { supabase } from '@/lib/supabase';
import type { Tables } from '@/types/database.types';

interface FetchTranslationData {
  content: string;
  langCode: string;
  postId?: string;
  replyId?: string;
}

export const useFetchTranslation = ({
  content,
  langCode,
  postId,
  replyId,
}: FetchTranslationData) => {
  return useQuery({
    queryKey: [QUERY_KEYS.TRANSLATIONS, langCode, postId, replyId],
    enabled: !!postId || !!replyId,
    queryFn: async () => {
      if (!postId && !replyId) {
        throw new Error('postId or replyId is required');
      }

      const { data: translationFetchData, error: translationFetchError } =
        await supabase
          .from('translations')
          .select('*')
          .eq('lang_code', langCode)
          .or(`post.eq.${postId},reply.eq.${replyId}`)
          .single();

      if (translationFetchError) {
        throw new Error(translationFetchError.message);
      }

      if (translationFetchData !== null) {
        return translationFetchData as Tables<'translations'>;
      }

      const {
        data: generatedTranslationData,
        error: generatedTranslationError,
      } = await supabase.functions.invoke('translation', {
        body: { content, postId, replyId, langCode },
      });

      if (generatedTranslationError) {
        throw new Error(generatedTranslationError.message);
      }

      return generatedTranslationData as Tables<'translations'>;
    },
  });
};
