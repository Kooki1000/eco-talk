import type { TextInputProps } from 'react-native';
import { TextInput } from 'react-native';

import type { TxKeyPath } from '@/i18n';
import { translate } from '@/i18n';

interface PlaceHolderProps extends TextInputProps {
  placeholderKey: TxKeyPath;
}

const PlaceHolder = ({ placeholderKey, ...props }: PlaceHolderProps) => {
  const placeholder = translate(placeholderKey);

  if (typeof placeholder !== 'string') {
    console.error('Invalid placeholder value:', placeholderKey);
  }

  return <TextInput placeholder={placeholder} {...props} />;
};

export default PlaceHolder;
