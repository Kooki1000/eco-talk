import 'dayjs/locale/ja';
import 'dayjs/locale/en';

import dayjs from 'dayjs';
import { Languages } from 'lucide-react-native';
import { View } from 'react-native';

import { languages } from '@/constants/options';
import type { Language } from '@/i18n/resources';
import { useSelectedLanguage } from '@/i18n/utils';

import { Select } from './settingSelect';

const LanguageSelect = () => {
  let { language, setLanguage } = useSelectedLanguage();

  const handleLanguageChange = (option: Language) => {
    setLanguage(option);
    if (option === 'jp') {
      dayjs.locale('ja');
    } else if (option === 'en') {
      dayjs.locale('ja');
    }
  };

  return (
    <View className="mb-4 flex flex-row items-center">
      <Select
        IconComponent={Languages}
        txKey="profile.settings.language"
        options={languages}
        value={language}
        onSelect={(option) => handleLanguageChange(option as Language)}
      />
    </View>
  );
};

export default LanguageSelect;

const formattedDate = dayjs().format('MMMM D, YYYY');
console.log(`Formatted Date: ${formattedDate}`);
