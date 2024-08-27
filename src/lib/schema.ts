import { z } from 'zod';

export const postSchema = z.object({
  content: z.string().min(1).max(1000),
});

export const logInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const signUpSchema = z.object({
  username: z.string().min(3).max(20),
  email: z.string().email(),
  password: z.string().min(8),
});
