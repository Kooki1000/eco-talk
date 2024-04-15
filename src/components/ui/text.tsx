// Modified from https://github.com/obytes/react-native-template-obytes/blob/master/src/ui/text.tsx

import { useMemo } from 'react';
import type { TextProps } from 'react-native';
import { Text as NNText } from 'react-native';
import { twMerge } from 'tailwind-merge';

import type { TxKeyPath } from '@/i18n';
import { translate } from '@/i18n';

interface Props extends TextProps {
  className?: string;
  tx?: TxKeyPath;
}

export const Text = ({ className = '', tx, children, ...props }: Props) => {
  const textStyle = useMemo(
    () =>
      twMerge('text-base text-black dark:text-white font-normal', className),
    [className]
  );

  return (
    <NNText className={textStyle} {...props}>
      {tx ? translate(tx) : children}
    </NNText>
  );
};
