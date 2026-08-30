import "server-only";

import { prisma } from "@/lib/prisma";
import type { NewsListItem } from "@/lib/domain/news";

const PAGE_SIZE = 12;

export type NewsListResult = {
  items: NewsListItem[];
  total: number;
  page: number;
  pageSize: number;
  pageCount: number;
};

export async function getNewsList(page: number = 1): Promise<NewsListResult> {
  const where = {
    status: "PUBLISHED" as const,
  };

  const orderBy = [{ publishedAt: "desc" as const }, { id: "asc" as const }];

  const skip = (page - 1) * PAGE_SIZE;

  const [rawItems, total] = await Promise.all([
    prisma.newsArticle.findMany({
      where,
      orderBy,
      skip,
      take: PAGE_SIZE,
      select: {
        id: true,
        slug: true,
        title: true,
        excerpt: true,
        body: true,
        coverImageUrl: true,
        sourceName: true,
        sourceUrl: true,
        authorName: true,
        topic: true,
        readingMinutes: true,
        isFeatured: true,
        publishedAt: true,
        category: {
          select: { slug: true, name: true, accent: true },
        },
      },
    }),
    prisma.newsArticle.count({ where }),
  ]);

  return {
    items: rawItems,
    total,
    page,
    pageSize: PAGE_SIZE,
    pageCount: Math.max(1, Math.ceil(total / PAGE_SIZE)),
  };
}
