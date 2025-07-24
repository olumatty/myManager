import { PrismaClient } from "@prisma/client";
import { env } from "@/config/env";
import { logger } from "@/util/logger";

declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    log:
      env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["query"],
  });

if (env.NODE_ENV !== "production") {
  global.prisma = prisma;
}

export async function checkDatabaseConnection() {
  try {
    await prisma.$connect();
    logger.info("Database connected successfully");
  } catch (error) {
    logger.error("Database connection error:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}
