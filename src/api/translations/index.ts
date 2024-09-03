/* eslint-disable max-lines-per-function */
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

      let query = supabase
        .from('translations')
        .select('*')
        .eq('lang_code', langCode);

      if (postId) {
        query = query.eq('post', postId);
      } else if (replyId) {
        query = query.eq('reply', replyId);
      }

      const { data: translationFetchData, error: translationFetchError } =
        await query;

      if (translationFetchError) {
        throw new Error(translationFetchError.message);
      }

      if (translationFetchData.length > 0) {
        return translationFetchData[0] as Tables<'translations'>;
      }

      const normalizedLangCode =
        langCode === 'en' ? 'EN-US' : langCode.toLowerCase();

      const {
        data: generatedTranslationData,
        error: generatedTranslationError,
      } = await supabase.functions.invoke('translate', {
        body: { content, langCode: normalizedLangCode },
      });

      if (generatedTranslationError) {
        throw new Error(generatedTranslationError.message);
      }

      const generatedTranslation = {
        content: generatedTranslationData.data,
        post: postId,
        reply: replyId,
        lang_code: langCode,
      };

      supabase
        .from('translations')
        .insert(generatedTranslation)
        .single()
        .then(({ error: insertError }) => {
          if (insertError) {
            console.error('Failed to insert translation:', insertError.message);
          }
        });

      return generatedTranslation as Tables<'translations'>;
    },
  });
};
