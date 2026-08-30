"use client";

import type { NewsListResult } from "@/lib/data/news";
import { InfiniteNewsList } from "./InfiniteNewsList";

export function NewsPage({
  initialData,
}: {
  initialData: NewsListResult;
}) {
  return (
    <div className="mt-8">
      <InfiniteNewsList initialData={initialData} />
    </div>
  );
}
