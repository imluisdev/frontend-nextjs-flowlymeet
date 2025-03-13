import { z } from "zod";
export const emailSchema = z.string().email();
export const passwordSchema = z.string().min(8);

export const isValidEmail = (email: string): boolean => {
  const result = emailSchema.safeParse(email);
  return result.success;
};

export const isValidPassword = (password: string): boolean => {
  const result = passwordSchema.safeParse(password);
  return result.success;
};
