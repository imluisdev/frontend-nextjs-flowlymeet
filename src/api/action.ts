"use server";

import { z } from "zod";

const loginFormSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

export async function login(prevState: unknown, formData: FormData) {
  const loginData = Object.fromEntries(formData);
  const validatedLoginData = loginFormSchema.safeParse(loginData);

  if (!validatedLoginData.success) {
    const formFieldErrors = validatedLoginData.error.flatten().fieldErrors;

    return {
      errors: {
        email: formFieldErrors?.email,
        password: formFieldErrors?.password,
      },
    };
  }

  try {
    // Here you would typically make an API call to your authentication endpoint
    // For example:
    // const response = await fetch('/api/auth/login', {
    //   method: 'POST',
    //   body: JSON.stringify(validatedLoginData.data),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });
    
    // Placeholder for successful login
    return {
      success: "Login successful!",
    };
  } catch {
    return {
      errors: {
        general: "Failed to login. Please try again.",
      },
    };
  }
}