/* eslint-disable max-lines-per-function */
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
import { CircleX, Eye, EyeOff, KeyRound, Mail } from 'lucide-react-native';
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
import { DismissKeyboard } from '@/lib/keyboard';
import { logInSchema } from '@/lib/schema';
import { supabase } from '@/lib/supabase';

type FormType = z.infer<typeof logInSchema>;

export default function LogInScreen() {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  /* const onForgotPress = () => {
    console.log('Forgot password');
  }; */

  const {
    control,
    handleSubmit,
    setError,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormType>({
    resolver: zodResolver(logInSchema),
    reValidateMode: 'onSubmit',
  });

  const email = watch('email');

  const onSubmit: SubmitHandler<FormType> = async (data: FormType) => {
    const { error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });

    if (error) {
      setError('root', {
        message: translate('logIn.invalid'),
      });

      return;
    }

    router.navigate('/(tabs)');
  };

  return (
    <DismissKeyboard>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <Text
          tx="logIn.welcome"
          className="mt-8 text-center text-2xl font-bold"
        />

        <View className="mt-8 w-4/5">
          <Text tx="logIn.email" className="mb-2 ml-3 font-semibold" />

          <View style={styles.textContainer}>
            <Mail color={isDark ? white : black} size={22} />
            <View className="w-full">
              <ControlledInput
                name="email"
                control={control}
                tx="logIn.enterEmail"
                error={errors.email?.message}
                style={styles.input}
              />
            </View>

            {email && (
              <TouchableOpacity
                onPress={() => reset({ email: '' })}
                className="absolute right-5"
              >
                <CircleX color={isDark ? white : black} size={18} />
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View className="mt-6 w-4/5">
          <Text tx="logIn.password" className="mb-2 ml-3 font-semibold" />

          <View style={styles.textContainer}>
            <KeyRound color={isDark ? white : black} size={22} />
            <View className="w-full">
              <ControlledInput
                name="password"
                control={control}
                tx="logIn.enterPassword"
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
        </View>

        <View className="mt-4 w-4/5">
          <Button
            className="mb-4 h-10 items-center justify-center rounded-xl bg-blue-500 px-4 dark:bg-blue-700"
            disabled={isSubmitting}
            onPress={handleSubmit(onSubmit)}
          >
            {isSubmitting ? (
              <ActivityIndicator />
            ) : (
              <Text className="font-bold text-white" tx="logIn.title" />
            )}
          </Button>

          {(errors.email || errors.password) && (
            <Text className="mb-6 text-sm text-red-500" tx="logIn.invalid" />
          )}
        </View>

        <Text
          tx="logIn.signUp"
          className="mt-3 text-center text-sm text-blue-500 dark:bg-blue-700"
          onPress={() => router.replace('/(auth)/sign-up')}
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
