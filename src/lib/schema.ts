import { z } from 'zod';

import { translate } from '@/i18n';

export const postSchema = z.object({
  content: z.string().min(1).max(1000),
});

export const logInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const signUpSchema = z
  .object({
    username: z
      .string({ message: translate('signUp.invalidUsername') })
      .min(3)
      .max(20),
    email: z.string({ message: translate('signUp.invalidEmail') }).email(),
    password: z.string({ message: translate('signUp.invalidPassword') }).min(8),
    confirmation: z.string({ message: translate('signUp.confirmation') }),
  })
  .refine((data) => data.password === data.confirmation, {
    message: translate('signUp.invalidConfirmation'),
    path: ['confirmation'],
  });
