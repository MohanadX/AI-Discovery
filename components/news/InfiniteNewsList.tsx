"use client";

import { useEffect, useRef, useCallback } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import type { NewsListItem } from "@/lib/domain/news";
import type { NewsListResult } from "@/lib/data/news";
import { NewsRow } from "./NewsRow";

async function fetchNewsPage(
  page: number,
  signal?: AbortSignal,
): Promise<NewsListResult> {
  const params = new URLSearchParams();
  params.set("page", String(page));

  const res = await fetch(`/api/news?${params.toString()}`, { signal });
  if (!res.ok) throw new Error(`Failed to fetch news: ${res.status}`);
  
  const data = (await res.json()) as NewsListResult;
  
  return {
    ...data,
    items: data.items.map((item) => ({
      ...item,
      publishedAt: item.publishedAt ? new Date(item.publishedAt as unknown as string) : null,
    })),
  };
}

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-8" aria-live="polite">
      <div
        className="h-6 w-6 animate-spin rounded-full border-2"
        style={{
          borderColor: "var(--color-border-strong)",
          borderTopColor: "var(--color-accent)",
        }}
      />
    </div>
  );
}

export function InfiniteNewsList({
  initialData,
}: {
  initialData: NewsListResult;
}) {
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteQuery({
      queryKey: ["news-infinite"],
      queryFn: ({ pageParam, signal }) =>
        fetchNewsPage(pageParam as number, signal),
      initialPageParam: 1,
      getNextPageParam: (lastPage) =>
        lastPage.page < lastPage.pageCount ? lastPage.page + 1 : undefined,
      initialData: () => {
        return initialData.page === 1
          ? {
              pages: [initialData],
              pageParams: [1],
            }
          : undefined;
      },
    });

  const handleIntersect = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      if (entries[0]?.isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
    [hasNextPage, isFetchingNextPage, fetchNextPage],
  );

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: "200px",
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [handleIntersect]);

  if (status === "error") {
    return (
      <div className="py-12 text-center text-sm text-[var(--color-danger)]">
        Failed to load news. Please refresh the page.
      </div>
    );
  }

  const allItems: NewsListItem[] = data?.pages.flatMap((p) => p.items) ?? [];

  return (
    <div className="flex flex-col">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {allItems.map((item) => (
          <NewsRow key={item.id} article={item} />
        ))}
      </div>

      <div ref={sentinelRef} aria-hidden="true" />

      {isFetchingNextPage && <LoadingSpinner />}
      {!hasNextPage && allItems.length > 0 && (
        <div className="py-12 text-center text-sm text-[var(--color-foreground-faint)]">
          You&apos;ve reached the end of the feed.
        </div>
      )}
    </div>
  );
}
