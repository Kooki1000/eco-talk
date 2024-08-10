import { Languages } from 'lucide-react-native';
import { memo } from 'react';
import { View } from 'react-native';

import { languages } from '@/constants/options';
import type { Language } from '@/i18n/resources';
import { useSelectedLanguage } from '@/i18n/utils';

import { Select } from './settingSelect';

const LanguageSelectComponent = () => {
  let { language, setLanguage } = useSelectedLanguage();

  return (
    <View className="mb-4 flex flex-row items-center">
      <Select
        IconComponent={Languages}
        txKey="profile.settings.language"
        options={languages}
        value={language}
        onSelect={(option) => setLanguage(option as Language)}
      />
    </View>
  );
};

export const LanguageSelect = memo(LanguageSelectComponent);
