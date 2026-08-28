import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "tsx prisma/seed.ts",
  },
  datasource: {
    // Prefer PRISMA_DATABASE_URL (project convention). DIRECT_URL is optional
    // for non-pooled migrate workflows when a provider injects both.
    url: env("PRISMA_DATABASE_URL"),
  },
});
