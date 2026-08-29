"use client";

import { useEffect, useRef, useCallback } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import type { ToolListItem, ToolsFilter } from "@/lib/domain/tools";
import type { ToolsListResult } from "@/lib/data/tools";
import { ToolsTable } from "./ToolsTable";

// ─── Fetcher ─────────────────────────────────────────────────────────────────

async function fetchToolsPage(
  filter: Omit<ToolsFilter, "page" | "tab">,
  page: number,
  signal?: AbortSignal,
): Promise<ToolsListResult> {
  const params = new URLSearchParams();
  if (filter.q) params.set("q", filter.q);
  if (filter.category) params.set("category", filter.category);
  if (filter.pricing) params.set("pricing", filter.pricing);
  params.set("sort", filter.sort);
  params.set("page", String(page));

  const res = await fetch(`/api/tools?${params.toString()}`, {
    signal,
  });
  if (!res.ok) throw new Error(`Failed to fetch tools: ${res.status}`);
  const data = (await res.json()) as ToolsListResult;
  // Rehydrate Date strings from JSON back to Date objects
  return {
    ...data,
    items: data.items.map((item) => ({
      ...item,
      publishedAt: item.publishedAt
        ? new Date(item.publishedAt as unknown as string)
        : null,
    })),
  };
}

// ─── Spinner ─────────────────────────────────────────────────────────────────

function LoadingSpinner() {
  return (
    <div
      className="flex items-center justify-center py-8"
      aria-live="polite"
      aria-label="Loading more tools">
      <div
        className="h-6 w-6 animate-spin rounded-full border-2"
        style={{
          borderColor: "var(--color-border-strong)",
          borderTopColor: "var(--color-accent)",
        }}
        role="status"
      />
    </div>
  );
}

function EndMarker() {
  return (
    <div
      className="py-8 text-center text-sm"
      style={{ color: "var(--color-foreground-faint)" }}>
      You&apos;ve seen all tools.
    </div>
  );
}

// ─── Component ───────────────────────────────────────────────────────────────

export function InfiniteToolsList({
  filter,
  initialFilter,
  initialData,
}: {
  filter: Omit<ToolsFilter, "page" | "tab">;
  initialFilter: Omit<ToolsFilter, "page" | "tab">;
  initialData: ToolsListResult;
}) {
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteQuery({
      queryKey: [
        "tools-infinite",
        filter.q,
        filter.category,
        filter.pricing,
        filter.sort,
      ],
      queryFn: ({ pageParam, signal }) =>
        fetchToolsPage(filter, pageParam as number, signal),
      initialPageParam: 1,
      getNextPageParam: (lastPage) =>
        lastPage.page < lastPage.pageCount ? lastPage.page + 1 : undefined,
      initialData: () => {
        const isInitial =
          initialData.page === 1 &&
          filter.q === initialFilter.q &&
          filter.category === initialFilter.category &&
          filter.sort === initialFilter.sort &&
          filter.pricing === initialFilter.pricing &&
          initialData.page === 1;
        return isInitial
          ? {
              pages: [initialData],
              pageParams: [1],
            }
          : undefined;
      },
    });

  // IntersectionObserver sentinel → auto-fetch next page
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
      <div
        className="py-12 text-center text-sm"
        style={{ color: "var(--color-danger)" }}>
        Failed to load tools. Please refresh the page.
      </div>
    );
  }

  // Flatten all pages into one items array
  const allItems: ToolListItem[] = data?.pages.flatMap((p) => p.items) ?? [];

  return (
    <div>
      <ToolsTable items={allItems} query={filter.q} />

      {/* Sentinel div — triggers next page load when visible */}
      <div ref={sentinelRef} aria-hidden="true" />

      {isFetchingNextPage && <LoadingSpinner />}
      {!hasNextPage && allItems.length > 0 && <EndMarker />}
    </div>
  );
}
