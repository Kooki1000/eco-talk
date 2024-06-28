import type { Option } from '@/components/obytes/select';
import type { Language } from '@/i18n/resources';

type LocaleOption = Omit<Option, 'value'> & { value: Language };

export const locales: LocaleOption[] = [
  { value: 'jp', label: 'locales.jp' },
  { value: 'en', label: 'locales.en' },
];
