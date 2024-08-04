import type { TextInputProps } from 'react-native';
import { TextInput } from 'react-native';

import type { TxKeyPath } from '@/i18n';
import { translate } from '@/i18n';

interface PlaceHolderProps extends TextInputProps {
  placeholderKey: TxKeyPath;
}

const PlaceHolder = ({ placeholderKey, ...props }: PlaceHolderProps) => {
  return <TextInput placeholder={translate(placeholderKey)} {...props} />;
};

export default PlaceHolder;