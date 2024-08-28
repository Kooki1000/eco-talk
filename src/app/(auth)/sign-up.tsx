/* eslint-disable max-lines-per-function */
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
import {
  CircleUserRound,
  CircleX,
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

import { ControlledInput } from '@/components/customInput';
import { Button, Text } from '@/components/obytes';
import { black, white } from '@/components/obytes/colors';
import { translate } from '@/i18n';
import { DismissKeyboard, useSoftKeyboardEffect } from '@/lib/keyboard';
import { signUpSchema } from '@/lib/schema';

type FormType = z.infer<typeof signUpSchema>;


export default function SignUpScreen() {
  useSoftKeyboardEffect();
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isConfirmationVisible, setConfirmationVisible] = useState(false);

  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  const onPolicyPress = () => {
    console.log('Show Policy');
  };

  const [email, setEmail] = useState('');

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

  const onSubmit: SubmitHandler<FormType> = async (data: FormType) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      reset();
      setEmail('');
      console.log(data);
      router.navigate('/(tabs)');
    } catch (error) {
      setError('email', {
        message: translate('logIn.invalid'),
      });
      setError('password', {
        message: translate('logIn.invalid'),
      });
    }
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
              error={errors.email?.message}
              style={styles.input}
            />
          </View>
        </View>

        <View className="mt-8 w-4/5" style={styles.textContainer}>
          <Mail color={isDark ? white : black} size={22} />
          <View className="w-full">
            <ControlledInput
              name="email"
              control={control}
              tx="signUp.enterEmail"
              error={errors.email?.message}
              value={email}
              onChangeText={setEmail}
              style={styles.input}
            />
          </View>

          {email.length > 0 && (
            <TouchableOpacity
              onPress={() => setEmail('')}
              className="absolute right-5"
            >
              <CircleX color={isDark ? white : black} size={18} />
            </TouchableOpacity>
          )}
        </View>

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
            />
          </View>

          <TouchableOpacity
            onPress={() => setConfirmationVisible(!isConfirmationVisible)}
            className="absolute right-5"
          >
            {isPasswordVisible ? (
              <EyeOff color={isDark ? white : black} size={18} />
            ) : (
              <Eye color={isDark ? white : black} size={18} />
            )}
          </TouchableOpacity>
        </View>
        {errors.email && (
          <Text className="text-sm text-red-500" tx="logIn.invalid" />
        )}
        <Text
          tx="signUp.policy"
          className="mb-6 ml-[10%] mt-4 self-start text-sm text-blue-500 dark:text-blue-700"
          onPress={onPolicyPress}
        />
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
          className="mt-3 text-center text-sm text-blue-500 dark:bg-blue-700"
          onPress={() => router.push('/(auth)/log-in')}
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
    height: 53,
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
