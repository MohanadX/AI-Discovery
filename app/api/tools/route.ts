/**
 * GET /api/tools
 * JSON endpoint for React Query infinite scroll.
 * Supports the same filter params as the /tools page.
 */
import { type NextRequest, NextResponse } from "next/server";
import { parseToolsFilter } from "@/lib/domain/tools";
import { getToolsList } from "@/lib/data/tools";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const raw: Record<string, string> = {};
  searchParams.forEach((value, key) => {
    raw[key] = value;
  });

  const filter = parseToolsFilter(raw);

  try {
    const result = await getToolsList(filter);
    return NextResponse.json(result);
  } catch (err) {
    console.error("[GET /api/tools]", err);
    return NextResponse.json(
      { error: "Failed to fetch tools." },
      { status: 500 },
    );
  }
}
