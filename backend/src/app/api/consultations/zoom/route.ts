import { NextResponse } from "next/server";
import { inArray } from "drizzle-orm";
import { z } from "zod";
import { requireSession } from "@/lib/auth";
import { getDatabase } from "@/lib/db";
import { consultationBookings } from "@/db/schema";

const zoomUpdateSchema = z.discriminatedUnion("action", [
  z.object({
    action: z.enum(["confirm", "update"]),
    bookingIds: z.array(z.uuid()).min(1).max(100),
    zoomLink: z.url(),
  }),
  z.object({
    action: z.literal("evaluation"),
    bookingIds: z.array(z.uuid()).min(1).max(100),
    evaluationLink: z.url(),
  }),
]).refine((value) => new Set(value.bookingIds).size === value.bookingIds.length, {
  path: ["bookingIds"],
  message: "ID konsultasi tidak boleh duplikat.",
});

export async function POST(request: Request) {
  const { response } = await requireSession(["Admin"]);
  if (response) return response;

  const parsed = zoomUpdateSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "Data Zoom tidak valid.", details: parsed.error.flatten() }, { status: 400 });
  }

  const { action, bookingIds } = parsed.data;
  const db = getDatabase();
  const updatedBookings = await db.transaction(async (tx) => {
    const bookings = await tx.select({
      id: consultationBookings.id,
      status: consultationBookings.status,
    }).from(consultationBookings).where(inArray(consultationBookings.id, bookingIds));

    if (bookings.length !== bookingIds.length) {
      return { error: "Konsultasi tidak ditemukan." as const, status: 404 as const };
    }

    if (action === "confirm" && bookings.some(({ status }) => status !== "waiting_zoom" && status !== "scheduled")) {
      return { error: "Konsultasi harus menunggu Zoom sebelum link dikonfirmasi." as const, status: 409 as const };
    }

    const updated = await tx.update(consultationBookings)
      .set({
        ...(action === "evaluation"
          ? { evaluationLink: parsed.data.evaluationLink }
          : {
              zoomLink: parsed.data.zoomLink,
              ...(action === "confirm" ? { status: "scheduled" as const } : {}),
            }),
      })
      .where(inArray(consultationBookings.id, bookingIds))
      .returning({
        id: consultationBookings.id,
        status: consultationBookings.status,
        zoomLink: consultationBookings.zoomLink,
        evaluationLink: consultationBookings.evaluationLink,
        updatedAt: consultationBookings.updatedAt,
      });

    return { bookings: updated };
  });

  if ("error" in updatedBookings) {
    return NextResponse.json({ error: updatedBookings.error }, { status: updatedBookings.status });
  }
  return NextResponse.json({ bookings: updatedBookings.bookings });
}
