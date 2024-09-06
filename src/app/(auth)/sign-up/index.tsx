/* eslint-disable max-lines-per-function */
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
import {
  CircleUserRound,
  Eye,
  EyeOff,
  KeyRound,
  Mail,
} from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import { useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import type { z } from 'zod';

import { useSignUp } from '@/api/sign-up';
import { ControlledInput } from '@/components/input/customInput';
import { Button, Checkbox, Text } from '@/components/obytes';
import { black, white } from '@/components/obytes/colors';
import { translate } from '@/i18n';
import { DismissKeyboard, useSoftKeyboardEffect } from '@/lib/keyboard';
import { signUpSchema } from '@/lib/schema';

type FormType = z.infer<typeof signUpSchema>;

export default function SignUpScreen() {
  useSoftKeyboardEffect();
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isConfirmationVisible, setConfirmationVisible] = useState(false);
  const [isCheckboxChecked, setCheckboxChecked] = useState(false);

  const { mutateAsync: signUp } = useSignUp();

  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  const {
    control,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormType>({
    resolver: zodResolver(signUpSchema),
    reValidateMode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<FormType> = (data: FormType) => {
    if (!isCheckboxChecked) {
      return;
    }

    signUp(data, {
      onSuccess: () => {
        reset();
        router.navigate('/(tabs)');
      },
      onError: () => {
        setError('email', {
          message: translate('signUp.error'),
        });
      },
    });
  };

  return (
    <DismissKeyboard>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <Text
          tx="signUp.create"
          className="mt-8 text-center text-2xl font-bold"
        />

        <View className="mt-8 w-4/5" style={styles.textContainer}>
          <CircleUserRound color={isDark ? white : black} size={22} />
          <View className="w-full">
            <ControlledInput
              name="username"
              control={control}
              tx="signUp.username"
              error={errors.username?.message}
              style={styles.input}
              keyboardType={Platform.OS === 'ios' ? 'ascii-capable' : 'default'}
              textContentType="username"
              autoCorrect={false}
            />
          </View>
        </View>

        {errors.username && (
          <Text
            className="ml-[10%] self-start text-sm text-red-500"
            tx="signUp.invalidUsername"
          />
        )}

        <View className="mt-8 w-4/5" style={styles.textContainer}>
          <Mail color={isDark ? white : black} size={22} />
          <View className="w-full">
            <ControlledInput
              name="email"
              control={control}
              tx="signUp.enterEmail"
              error={errors.email?.message}
              style={styles.input}
              keyboardType="email-address"
              textContentType="emailAddress"
              spellCheck={false}
            />
          </View>
        </View>

        {errors.email && (
          <Text
            className="ml-[10%] self-start text-sm text-red-500"
            tx="signUp.invalidEmail"
          />
        )}

        <View className="mt-6 w-4/5" style={styles.textContainer}>
          <KeyRound color={isDark ? white : black} size={22} />
          <View className="w-full">
            <ControlledInput
              name="password"
              control={control}
              tx="signUp.enterPassword"
              secureTextEntry={!isPasswordVisible}
              error={errors.password?.message}
              style={styles.input}
              keyboardType={Platform.OS === 'ios' ? 'ascii-capable' : 'default'}
              textContentType="newPassword"
              spellCheck={false}
            />
          </View>

          <TouchableOpacity
            onPress={() => setPasswordVisible(!isPasswordVisible)}
            className="absolute right-5"
          >
            {isPasswordVisible ? (
              <EyeOff color={isDark ? white : black} size={18} />
            ) : (
              <Eye color={isDark ? white : black} size={18} />
            )}
          </TouchableOpacity>
        </View>

        {errors.password && (
          <Text
            className="ml-[10%] self-start text-sm text-red-500"
            tx="signUp.invalidPassword"
          />
        )}

        <View className="mt-6 w-4/5" style={styles.textContainer}>
          <KeyRound color={isDark ? white : black} size={22} />
          <View className="w-full">
            <ControlledInput
              name="confirmation"
              control={control}
              tx="signUp.confirmation"
              secureTextEntry={!isConfirmationVisible}
              error={errors.confirmation?.message}
              style={styles.input}
              keyboardType={Platform.OS === 'ios' ? 'ascii-capable' : 'default'}
              textContentType="newPassword"
              spellCheck={false}
            />
          </View>

          <TouchableOpacity
            onPress={() => setConfirmationVisible(!isConfirmationVisible)}
            className="absolute right-5"
          >
            {isConfirmationVisible ? (
              <EyeOff color={isDark ? white : black} size={18} />
            ) : (
              <Eye color={isDark ? white : black} size={18} />
            )}
          </TouchableOpacity>
        </View>

        {!errors.password && errors.confirmation && (
          <Text
            className="ml-[10%] self-start text-sm text-red-500"
            tx="signUp.invalidConfirmation"
          />
        )}

        <View className="mb-6 mt-4 w-4/5 flex-row flex-wrap text-center text-sm">
          <View className="flex-row items-center">
            <Checkbox
              onChange={() => setCheckboxChecked(!isCheckboxChecked)}
              checked={isCheckboxChecked}
              accessibilityLabel={''}
            />
            <View className="ml-2">
              <Text
                tx="signUp.terms"
                onPress={() => router.push('/(auth)/sign-up/policy')}
              />
            </View>
          </View>
        </View>

        <Button
          className="h-10 w-4/5 items-center justify-center rounded-xl bg-blue-500 px-4 dark:bg-blue-700"
          disabled={isSubmitting}
          onPress={handleSubmit(onSubmit)}
        >
          {isSubmitting ? (
            <ActivityIndicator />
          ) : (
            <Text className="font-bold text-white" tx="signUp.title" />
          )}
        </Button>

        <Text
          tx="signUp.logIn"
          className="mt-3 text-center text-sm text-blue-500 dark:underline"
          onPress={() => router.replace('/(auth)/log-in')}
        />
      </KeyboardAvoidingView>
    </DismissKeyboard>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  textContainer: {
    height: 52,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  input: {
    paddingRight: 60,
  },
});
