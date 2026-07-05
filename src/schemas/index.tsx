import { z } from 'zod';

export const RegisterSchema = z
  .object({
    email: z.email({ message: 'Email is invalid' }),
    name: z.string().min(1, { message: 'Name is required' }),
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters' }),
    password_confirmation: z.string(),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: 'Passwords do not match',
    path: ['password_confirmation'],
  });

export const SuccessSchema = z.string();
export const ErrorResponseSchema = z.object({
  error: z.string(),
});

export const TokenSchema = z
  .string({ message: 'Token is required' })
  .length(6, { message: 'Token is required' });
