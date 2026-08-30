export type NewsListItem = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  coverImageUrl: string | null;
  sourceName: string;
  sourceUrl: string | null;
  authorName: string | null;
  topic: string;
  readingMinutes: number;
  isFeatured: boolean;
  publishedAt: Date | null;
  category: { slug: string; name: string; accent: string | null } | null;
};
