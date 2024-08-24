import { useCallback } from 'react';
import { useMMKVString } from 'react-native-mmkv';

import { storage } from '@/lib/storage';

const SELECTED_ADDRESS = 'SELECTED_ADDRESS';

export const useSelectedAddress = () => {
  const [address, _setAddress] = useMMKVString(SELECTED_ADDRESS, storage);

  const setSelectedAddress = useCallback(
    (t: string) => {
      _setAddress(t);
    },
    [_setAddress]
  );

  const selectedAddress = address ?? '';
  return { selectedAddress, setSelectedAddress } as const;
};
