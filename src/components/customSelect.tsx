// This code is modified from the original version found at:
// https://github.com/obytes/react-native-template-obytes/blob/master/src/ui/select.tsx
// Original code by OBytes (https://github.com/obytes), licensed under the MIT License.

import { type BottomSheetModal } from '@gorhom/bottom-sheet';
import { FlashList } from '@shopify/flash-list';
import { ChevronDown } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import React, { forwardRef, memo, useCallback, useMemo } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Pressable, type PressableProps } from 'react-native';

import { colors, Modal, Text, useModal } from '@/components/obytes';
import { black } from '@/components/obytes/colors';
import { translate, type TxKeyPath } from '@/i18n';

const List = FlashList;

export type Option = { label: TxKeyPath; value: string | number };

type OptionsProps = {
  options: Option[];
  onSelect: (option: Option) => void;
  value?: string | number;
};

function keyExtractor(item: Option) {
  return `select-item-${item.value}`;
}

export const Options = forwardRef<BottomSheetModal, OptionsProps>(
  ({ options, onSelect, value }, ref) => {
    const height = options.length * 70 + 100;
    const snapPoints = useMemo(() => [height], [height]);
    const { colorScheme } = useColorScheme();
    const isDark = colorScheme === 'dark';

    const renderSelectItem = useCallback(
      ({ item }: { item: Option }) => (
        <Option
          key={`select-item-${item.value}`}
          label={item.label}
          selected={value === item.value}
          onPress={() => onSelect(item)}
        />
      ),
      [onSelect, value]
    );

    return (
      <Modal
        ref={ref}
        index={0}
        snapPoints={snapPoints}
        backgroundStyle={{
          backgroundColor: isDark ? colors.neutral[800] : colors.white,
        }}
      >
        <List
          data={options}
          keyExtractor={keyExtractor}
          renderItem={renderSelectItem}
          estimatedItemSize={52}
        />
      </Modal>
    );
  }
);

const Option = memo(
  ({
    label,
    ...props
  }: PressableProps & {
    selected?: boolean;
    label: TxKeyPath;
  }) => {
    return (
      <Pressable
        // eslint-disable-next-line tailwindcss/no-unnecessary-arbitrary-value
        className="flex-row items-center border-b-[1px] border-neutral-300 bg-white px-3 py-2 dark:border-neutral-700 dark:bg-neutral-800"
        {...props}
      >
        <Text tx={label} className="flex-1 dark:text-neutral-100" />
      </Pressable>
    );
  }
);

export interface SelectProps {
  value?: string | number;
  txKey: TxKeyPath;
  txOption?: any;
  disabled?: boolean;
  error?: string;
  options?: Option[];
  onSelect?: (value: string | number) => void;
  placeholder?: string;
}

export const Select = (props: SelectProps) => {
  const { txKey, txOption, options = [], disabled = false, onSelect } = props;
  const modal = useModal();

  const onSelectOption = useCallback(
    (option: Option) => {
      onSelect?.(option.value);
      modal.dismiss();
    },
    [modal, onSelect]
  );

  return (
    <>
      <View>
        <TouchableOpacity
          className="flex-row items-center"
          disabled={disabled}
          onPress={modal.present}
        >
          <Text className="text-lg dark:text-neutral-100">
            {translate(txKey, txOption)}
          </Text>
          <ChevronDown color={black} size={28} />
        </TouchableOpacity>
      </View>

      <Options ref={modal.ref} options={options} onSelect={onSelectOption} />
    </>
  );
};
