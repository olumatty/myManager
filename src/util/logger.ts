import winston from "winston";
import { env } from "@/config/env";
import { warn } from "console";

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
  silly: 5,
};

const colors = {
  error: "red",
  warn: "yellow",
  info: "green",
  http: "magenta",
  debug: "blue",
  silly: "gray",
};

winston.addColors(colors);

const developmentFormat = winston.format.combine(
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
  winston.format.colorize({ all: true }),
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`,
  ),
);

const productionFormat = winston.format.combine(
  winston.format.timestamp(),
  winston.format.errors({ stack: true }),
  winston.format.json(),
);

const logger = winston.createLogger({
  level: env.NODE_ENV === "development" ? "debug" : "info",
  levels,
  format: env.NODE_ENV === "development" ? developmentFormat : productionFormat,
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple(),
      ),
    }),
  ],
  exitOnError: false,
});

const stream = {
  write: (message: string) => {
    logger.http(message.trim());
  },
};

const safeStringify = (obj: unknown): string => {
  try {
    return JSON.stringify(obj, (key, value) => {
      if (
        typeof value === "string" &&
        [
          "password",
          "token",
          "secret",
          "access_token",
          "refresh_token",
          "clien_secret",
        ].includes(key.toLowerCase())
      ) {
        return "[REDACTED]";
      }
      return value;
    });
  } catch (error) {
    return `[Circular or complex object or JSON error]: ${String(error)}`;
  }
};

export { logger, stream, safeStringify };
