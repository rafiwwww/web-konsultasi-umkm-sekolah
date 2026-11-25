import { drizzle, type PostgresJsDatabase } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "@/db/schema";

type Database = PostgresJsDatabase<typeof schema>;
type DatabaseCache = typeof globalThis & {
  postgresClient?: ReturnType<typeof postgres>;
  drizzleDatabase?: Database;
};

const globalForDatabase = globalThis as DatabaseCache;

export function getDatabase(): Database {
  if (globalForDatabase.drizzleDatabase) return globalForDatabase.drizzleDatabase;
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) throw new Error("DATABASE_URL is not configured.");

  const client = globalForDatabase.postgresClient ?? postgres(connectionString, { max: 10 });
  globalForDatabase.postgresClient = client;
  globalForDatabase.drizzleDatabase = drizzle(client, { schema });
  return globalForDatabase.drizzleDatabase;
}

export async function closeDatabase() {
  if (!globalForDatabase.postgresClient) return;
  await globalForDatabase.postgresClient.end({ timeout: 5 });
  globalForDatabase.postgresClient = undefined;
  globalForDatabase.drizzleDatabase = undefined;
}