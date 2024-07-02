import { SunMoon } from 'lucide-react-native';
import { View } from 'react-native';

import { themes } from '@/constants/options';
import {
  type ColorSchemeType,
  useSelectedTheme,
} from '@/hooks/use-selected-theme';

import { Select } from './settingSelect';

const ThemeSelect = () => {
  const { selectedTheme, setSelectedTheme } = useSelectedTheme();

  return (
    <View className="mb-4 flex flex-row items-center">
      <Select
        IconComponent={SunMoon}
        txKey="profile.settings.theme"
        options={themes}
        value={selectedTheme}
        onSelect={(option) => setSelectedTheme(option as ColorSchemeType)}
      />
    </View>
  );
};

export default ThemeSelect;
