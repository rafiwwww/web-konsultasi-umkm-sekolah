import { NextResponse } from "next/server";
import { sql } from "drizzle-orm";
import { getDatabase } from "@/lib/db";
import { isDatabaseUnavailable } from "@/lib/db-errors";

export async function GET() {
  if (!process.env.DATABASE_URL) {
    return NextResponse.json({
      status: "error",
      database: "disconnected",
      reason: "DATABASE_URL is missing. Create backend/.env from backend/.env.example.",
    }, { status: 503 });
  }

  try {
    await getDatabase().execute(sql`select 1`);
    return NextResponse.json({ status: "ok", database: "connected" });
  } catch (error) {
    return NextResponse.json({
      status: "error",
      database: "disconnected",
      reason: isDatabaseUnavailable(error)
        ? "PostgreSQL is unreachable. Start the database and verify DATABASE_URL."
        : "Could not connect to PostgreSQL. Verify DATABASE_URL and the database service.",
    }, { status: 503 });
  }
}