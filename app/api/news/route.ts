import { type NextRequest, NextResponse } from "next/server";
import { getNewsList } from "@/lib/data/news";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const rawPage = Number.parseInt(searchParams.get("page") ?? "1", 10);
  const page = Number.isInteger(rawPage) && rawPage > 0 ? rawPage : 1;

  try {
    const result = await getNewsList(page);
    return NextResponse.json(result);
  } catch (err) {
    console.error("[GET /api/news]", err);
    return NextResponse.json(
      { error: "Failed to fetch news." },
      { status: 500 },
    );
  }
}
