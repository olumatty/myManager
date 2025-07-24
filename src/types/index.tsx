export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "tertiary";
  iconRight?: React.ReactNode;
}

export interface User {
  id: String;
  email: String;
  password?: String;
  firstName?: String;
  lastName?: String;
  name?: String;
  image?: String;
  isEmailVerified: Boolean;
  emailVerfiedAt?: Date;
  resetPasswordExpires?: Date;
  verificationExpires?: Date;
  googleId?: String;
  provider?: String;
  createdAt?: Date;
  updatedAt?: Date;
  lastLoginAt?: Date;
}

export interface Session {
  id: String;
  userId: String;
  token: String;
  expiresAt: Date;
  createdAt: Date;
  updatedAt: Date;
  userAgent?: String;
}
