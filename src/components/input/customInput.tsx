// This code is modified from the original version found at:
// https://github.com/obytes/react-native-template-obytes/blob/master/src/ui/input.tsx
// Original code by OBytes (https://github.com/obytes), licensed under the MIT License.

import { forwardRef, useRef } from 'react';
import type {
  Control,
  FieldValues,
  Path,
  RegisterOptions,
} from 'react-hook-form';
import { useController } from 'react-hook-form';
import type { TextInput, TextInputProps } from 'react-native';
import {
  I18nManager,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import { TextInput as NTextInput } from 'react-native';

import colors from '@/components/obytes/colors';
import { translate, type TxKeyPath } from '@/i18n';

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
  const placeholder = translate(props.tx);

  return (
    <NTextInput
      ref={ref}
      placeholder={placeholder}
      placeholderTextColor={colors.neutral[400]}
      className="rounded-xl px-4 py-3 text-base font-[500] leading-5 dark:text-white"
      {...props}
      style={StyleSheet.flatten([
        { writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr' },
        props.style,
      ])}
    />
  );
});

// Only used with react-hook-form
export function ControlledInput<T extends FieldValues>(
  props: ControlledInputProps<T>
) {
  const { name, control, rules, onChangeText, ...inputProps } = props;
  const { field, fieldState } = useController({ control, name, rules });
  const inputRef = useRef<NTextInput>(null);

  return (
    <TouchableWithoutFeedback onPress={() => inputRef.current?.focus()}>
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
    </TouchableWithoutFeedback>
  );
}
