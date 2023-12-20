import * as z from "zod";

export const SignupValidationSchema = z.object({
  name: z.string().min(2, { message: "Too short" }),
  username: z.string().min(2, { message: "Too short" }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 character." }),
});

export const SigninFormValidation = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 character." }),
});

export const PostFormValidation = z.object({
  caption: z.string().min(5).max(2000),
  file: z.custom<File[]>(),
  location: z.string().min(5),
  tags: z.string(),
});
