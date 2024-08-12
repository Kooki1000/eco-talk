// This code is modified from the original version found at:
// https://github.com/obytes/react-native-template-obytes/blob/master/src/ui/input.tsx
// Original code by OBytes (https://github.com/obytes), licensed under the MIT License.

import { forwardRef } from 'react';
import type {
  Control,
  FieldValues,
  Path,
  RegisterOptions,
} from 'react-hook-form';
import { useController } from 'react-hook-form';
import type { TextInput, TextInputProps } from 'react-native';
import { I18nManager, StyleSheet, View } from 'react-native';
import { TextInput as NTextInput } from 'react-native';

import { translate, type TxKeyPath } from '@/i18n';

import colors from './obytes/colors';

export interface NInputProps extends TextInputProps {
  tx: TxKeyPath;
  disabled?: boolean;
  error?: string;
}

type TRule = Omit<
  RegisterOptions,
  'valueAsNumber' | 'valueAsDate' | 'setValueAs'
>;

export type RuleType<T> = { [name in keyof T]: TRule };
export type InputControllerType<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  rules?: TRule;
};

interface ControlledInputProps<T extends FieldValues>
  extends NInputProps,
    InputControllerType<T> {}

export const Input = forwardRef<TextInput, NInputProps>((props, ref) => {
  const { _error, ...inputProps } = props;

  const placeholder = translate(props.tx);

  return (
    <View className="mb-2">
      <NTextInput
        ref={ref}
        placeholder={placeholder}
        placeholderTextColor={colors.neutral[400]}
        className="mt-0 rounded-xl px-4 py-3 text-base font-[500] leading-5 dark:text-white"
        {...inputProps}
        style={StyleSheet.flatten([
          { writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr' },
          inputProps.style,
        ])}
      />

      {/* {error && (
        <Text className="ml-4 text-sm text-danger-400 dark:text-danger-600">
          {error}
        </Text>
      )} */}
    </View>
  );
});

// Only used with react-hook-form
export function ControlledInput<T extends FieldValues>(
  props: ControlledInputProps<T>
) {
  const { name, control, rules, onChangeText, ...inputProps } = props;
  const { field, fieldState } = useController({ control, name, rules });

  return (
    <Input
      ref={field.ref}
      autoCapitalize="none"
      onChangeText={(text) => {
        field.onChange(text);
        if (onChangeText) onChangeText(text);
      }}
      value={(field.value as string) || ''}
      {...inputProps}
      error={fieldState.error?.message}
    />
  );
}
