import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { env } from '@/config/env';
import { User } from '@/types/index';

/**
 * Generate a JWT token for a user
 * @param user - The user to generate the token for
 * @returns The generated token
 */

export const generateAccessToken = (user: Partial<User>): string => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    env.JWT_SECRET,
    { expiresIn: '15m' },
  );
};

/**
 * Generate a JWT refresh token for a user
 * @param user - The user to generate the token for
 * @returns The generated token
 */

export const generateRefreshToken = (user: Partial<User>): string => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    env.JWT_SECRET,
    { expiresIn: '15m' },
  );
};

/**
 * Generate both the access and refresh token for a user
 * @param user - The user to generate the token for
 * @returns The generated token
 */

export const generateTokenPair = (user: Partial<User>) => {
  return {
    accessToken: generateAccessToken(user),
    refreshToken: generateRefreshToken(user),
  };
};

export const generateToken = (user: Partial<User>) => {
  return generateAccessToken(user);
};

/**
 * Verify a JWT token
 * @param token - Token to verify
 * @returns The verified token or null if invalid
 */

export const verifyToken = (token: string): any => {
  try {
    return jwt.verify(token, env.JWT_SECRET);
  } catch (error) {
    return null;
  }
};

/**
 * Decode a JWT token
 * @param token - The token to decode
 * @returns  The decode token or null if invalid
 */

export const decodeToken = (token: string): any => {
  try {
    return jwt.decode(token);
  } catch (error) {
    return;
  }
};

/**
 * Get Token Expiry
 * @param token - The token to get the expiry date of token
 * @returns  The Expiry date or null if invalid
 */

export const getTokenExpiryDate = (token: string): Date | null => {
  try {
    const decoded = jwt.decode(token) as { exp?: number };
    if (decoded && decoded.exp) {
      return new Date(decoded.exp * 1000);
    }
    return null;
  } catch (error) {
    console.error('Error extracting token expiry date', error);
    return null;
  }
};

/**
 * hash password
 * @param password - The password to hash
 * @returns The hashed password
 */

export const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

/**
 * compare a password
 * @params password - The password to compare
 * @params hash - The hash of the password
 * @returns True if the password matches the hashed password, false otherwise
 */

export const comparePassword = async (
  password: string,
  hashPassword: string,
): Promise<boolean> => {
  return bcrypt.compare(password, hashPassword);
};

/**
 * Generate a verification token
 * @returns The generated token
 */

export const generateVerificationCode = (): string => {
  return crypto.randomInt(100000, 999999).toString();
};
