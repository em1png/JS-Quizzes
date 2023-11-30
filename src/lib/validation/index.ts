import * as z from "zod"

export const SignupValidation = z.object({
    username: z.string().min(4).max(32),
    email: z.string().email(),
    password: z.string().min(8, {message: 'Password must be at least 8 characters.'})
  })

  export const SigninValidation = z.object({
    email: z.string().email(),
    password: z.string().min(8, {message: 'Password must be at least 8 characters.'})
  })