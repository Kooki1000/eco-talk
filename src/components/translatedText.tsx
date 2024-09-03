import { TriangleAlert } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import { memo } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { useFetchTranslation } from '@/api/translations';
import type { Language } from '@/i18n/resources';

import { Text } from './obytes';
import { black, white } from './obytes/colors';

interface TranslationProps {
  langCode: Language;
  postId?: string;
  replyId?: string;
  content: string;
}

const TranslatedTextComponent = ({
  langCode,
  postId,
  replyId,
  content,
}: TranslationProps) => {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  const {
    data: translation,
    isPending,
    isError,
  } = useFetchTranslation({
    langCode: langCode,
    postId: postId,
    replyId: replyId,
    content,
  });

  return (
    <View
      style={{
        borderTopWidth: 1,
        marginTop: 10,
        marginBottom: 10,
        borderColor: isDark ? '#e5e7eb' : '#9ca3af',
      }}
    >
      <View className="mt-6">
        {isPending ? (
          <ActivityIndicator />
        ) : isError || !translation ? (
          <View className="flex-row items-center justify-center">
            <TriangleAlert color={isDark ? white : black} />
            <Text tx="data.error" className="ml-2" />
          </View>
        ) : (
          <Text className="px-4">{translation.content}</Text>
        )}
      </View>
    </View>
  );
};

export const TranslatedText = memo(TranslatedTextComponent);
