/**
 * Server-only data access for the /tools listing page.
 * All Prisma imports MUST stay in this file and lib/prisma.ts — never in client code.
 */
import "server-only";

import { prisma } from "@/lib/prisma";
import type { ToolsFilter, ToolListItem } from "@/lib/domain/tools";

// ─── Pagination config ────────────────────────────────────────────────────────

const PAGE_SIZE = 20;

// ─── Result types ─────────────────────────────────────────────────────────────

export type ToolsListResult = {
  items: ToolListItem[];
  total: number;
  page: number;
  pageSize: number;
  pageCount: number;
};

export type CategoryOption = {
  id: string;
  slug: string;
  name: string;
  accent: string | null;
  sortOrder: number;
};

// ─── Queries ─────────────────────────────────────────────────────────────────

export async function getToolsList(
  filter: ToolsFilter,
): Promise<ToolsListResult> {
  const { q, category, pricing, sort, page } = filter;

  // Build dynamic where clause
  const where = {
    status: "PUBLISHED" as const,
    ...(q
      ? {
          OR: [
            { name: { contains: q, mode: "insensitive" as const } },
            { tagline: { contains: q, mode: "insensitive" as const } },
            { description: { contains: q, mode: "insensitive" as const } },
            {
              companyName: { contains: q, mode: "insensitive" as const },
            },
          ],
        }
      : {}),
    ...(category
      ? {
          categories: {
            some: {
              category: { slug: category },
            },
          },
        }
      : {}),
    ...(pricing
      ? {
          pricingModel: pricing as ToolListItem["pricingModel"],
        }
      : {}),
  };

  // Build orderBy
  const orderBy =
    sort === "popular"
      ? [{ popularityScore: "desc" as const }, { id: "asc" as const }]
      : sort === "name"
        ? [{ name: "asc" as const }, { id: "asc" as const }]
        : [{ publishedAt: "desc" as const }, { id: "asc" as const }]; // newest (default)

  const skip = (page - 1) * PAGE_SIZE;

  const [rawItems, total] = await Promise.all([
    prisma.tool.findMany({
      where,
      orderBy,
      skip,
      take: PAGE_SIZE,
      select: {
        id: true,
        slug: true,
        name: true,
        tagline: true,
        logoUrl: true,
        pricingModel: true,
        isFeatured: true,
        publishedAt: true,
        categories: {
          select: {
            category: {
              select: { slug: true, name: true, accent: true },
            },
          },
          orderBy: { category: { sortOrder: "asc" } },
        },
        platforms: {
          select: {
            platform: {
              select: { slug: true, name: true },
            },
          },
          orderBy: { platform: { sortOrder: "asc" } },
        },
      },
    }),
    prisma.tool.count({ where }),
  ]);

  // Map Prisma payloads → read model
  const items: ToolListItem[] = rawItems.map((t) => ({
    id: t.id,
    slug: t.slug,
    name: t.name,
    tagline: t.tagline,
    logoUrl: t.logoUrl,
    pricingModel: t.pricingModel,
    isFeatured: t.isFeatured,
    publishedAt: t.publishedAt,
    categories: t.categories.map((tc) => tc.category),
    platforms: t.platforms.map((tp) => tp.platform),
  }));

  return {
    items,
    total,
    page,
    pageSize: PAGE_SIZE,
    pageCount: Math.max(1, Math.ceil(total / PAGE_SIZE)),
  };
}

export async function getCategories(): Promise<CategoryOption[]> {
  const categories = await prisma.category.findMany({
    select: { id: true, slug: true, name: true, accent: true, sortOrder: true },
    orderBy: { sortOrder: "asc" },
  });
  return categories;
}

export type ToolDetailResult = Awaited<ReturnType<typeof getToolById>>;

export async function getToolById(id: string) {
  const tool = await prisma.tool.findUnique({
    where: { id },
    include: {
      categories: {
        select: {
          category: {
            select: { slug: true, name: true, accent: true },
          },
        },
        orderBy: { category: { sortOrder: "asc" } },
      },
      platforms: {
        select: {
          platform: {
            select: { slug: true, name: true },
          },
        },
        orderBy: { platform: { sortOrder: "asc" } },
      },
      capabilities: {
        orderBy: { sortOrder: "asc" },
      },
      useCases: {
        orderBy: { sortOrder: "asc" },
      },
      screenshots: {
        orderBy: { sortOrder: "asc" },
      },
    },
  });

  if (!tool || tool.status !== "PUBLISHED") {
    return null;
  }

  return {
    ...tool,
    categories: tool.categories.map((tc) => tc.category),
    platforms: tool.platforms.map((tp) => tp.platform),
  };
}
