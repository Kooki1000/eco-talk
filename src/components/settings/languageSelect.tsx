import { Languages } from 'lucide-react-native';
import { StyleSheet, View } from 'react-native';

import { languages } from '@/constants/languages';
import type { Language } from '@/i18n/resources';
import { translate, useSelectedLanguage } from '@/i18n/utils';

import { Select } from '../customSelect';
import { black } from '../obytes/colors';

const LanguageSelect = () => {
  const { language, setLanguage } = useSelectedLanguage();

  return (
    <View className="mb-4 flex flex-row items-center">
      <Languages color={black} size={28} style={styles.icon} />
      <Select
        txKey="profile.settings.language"
        txOption={{ language: translate(`locales.${language}`) }}
        options={languages}
        value={language}
        onSelect={(option) => setLanguage(option as Language)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginRight: 10,
  },
});

export default LanguageSelect;
