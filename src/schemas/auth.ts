import { z } from "zod";

export const registerSchema = z.object({
  body: z.object({
    firstName: z
      .string()
      .min(3, "First name must be at least 1 character long"),
    lastName: z.string().min(3, "Last name must be at least 1 character long"),
    email: z.string().email("Invalid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
        "Password must contain uppercase, lowercase, number and special character",
      ),
  }),
});
export const loginSchema = z.object({
  body: z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
  }),
});
export const forgetpasswordSchema = z.object({
  body: z.object({
    email: z.string().email("Invalid email address"),
  }),
});

export const newpasswordSchema = z.object({
  body: z.object({
    oldpassword: z
      .string()
      .min(8, "Password must be at least 8 characters long"),
    newpassword: z
      .string()
      .min(8, "Password must be at least 8 characters long"),
  }),
});

export const verifyemailSchema = z.object({
  body: z.object({
    email: z.string().email("Invalid email address"),
    code: z.string().min(6, "Code must be at least 6 characters long"),
  }),
});

export const verifyPasswordSchema = z.object({
  body: z.object({
    email: z.string().email("Invalid email address"),
    code: z.string().min(6, "Code must be at least 6 characters long"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
  }),
});
