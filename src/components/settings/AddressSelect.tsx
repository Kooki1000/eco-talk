import { MapPinned } from 'lucide-react-native';
import { memo, useMemo } from 'react';
import { View } from 'react-native';

import { addressOptions } from '@/constants/options/addressOptions';
import { useSelectedAddress } from '@/hooks/use-selected-address';

import { Select } from './settingSelect';

const AddressSelectComponent = () => {
  const { selectedAddress, setSelectedAddress } = useSelectedAddress();
  const memoizedAddressOptions = useMemo(() => addressOptions, []);

  return (
    <View className="mb-4 flex flex-row items-center">
      <Select
        IconComponent={MapPinned}
        txKey="city.chiyoda"
        options={memoizedAddressOptions}
        value={selectedAddress}
        onSelect={(option) => setSelectedAddress(option as string)}
      />
    </View>
  );
};

export const AddressSelect = memo(AddressSelectComponent);
