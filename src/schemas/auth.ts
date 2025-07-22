import { boolean, z } from "zod";

export const registerSchema = z.object({
  body: z.object({
    firstName: z
      .string()
      .min(3, "First name must be at least 1 character long"),
    lastName: z.string().min(3, "Last name must be at least 1 character long"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
  }),
});
export const loginSchema = z.object({
  body: z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
  }),
});
