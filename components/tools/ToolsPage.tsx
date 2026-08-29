"use client";

import { useState, useEffect, useCallback, Suspense } from "react";
import { useQuery } from "@tanstack/react-query";
import type { ToolsFilter } from "@/lib/domain/tools";
import type { ToolsListResult, CategoryOption } from "@/lib/data/tools";
import { CategoryTabs, TAB_TOOLS } from "./CategoryTabs";
import { ToolsControls } from "./ToolsControls";
import { ToolsTable } from "./ToolsTable";
import { ToolsPagination } from "./ToolsPagination";
import { InfiniteToolsList } from "./InfiniteToolsList";

// Resolve the active tab from the filter
function resolveActiveTab(filter: ToolsFilter): string {
  // If a DB category is selected, the tab ID is the category slug
  if (filter.category) return filter.category;
  // Default: Tools tab (page offset, no category filter)
  return TAB_TOOLS;
}

export function ToolsPage({
  initialData,
  categories,
  filter: initialFilter,
}: {
  initialData: ToolsListResult;
  categories: CategoryOption[];
  filter: ToolsFilter;
}) {
  const [filter, setFilter] = useState<ToolsFilter>(initialFilter);

  // Sync state with URL without triggering Next.js server navigation
  useEffect(() => {
    const params = new URLSearchParams();
    if (filter.q) params.set("q", filter.q);
    if (filter.category) params.set("category", filter.category);
    if (filter.sort) params.set("sort", filter.sort);
    if (filter.page > 1) params.set("page", String(filter.page));
    const qs = params.toString();
    const newUrl = `/tools${qs ? `?${qs}` : ""}`;
    window.history.replaceState(null, "", newUrl);
  }, [filter]);

  const activeTab = resolveActiveTab(filter);

  const { data, isPlaceholderData } = useQuery({
    queryKey: ["tools", filter],
    enabled: activeTab !== TAB_TOOLS,
    queryFn: async ({ signal }) => {
      const params = new URLSearchParams();
      if (filter.q) params.set("q", filter.q);
      if (filter.category) params.set("category", filter.category);
      if (filter.sort) params.set("sort", filter.sort);
      if (filter.page > 1) params.set("page", String(filter.page));

      const res = await fetch(`/api/tools?${params.toString()}`, {
        signal,
      });
      if (!res.ok) throw new Error("Failed to fetch tools");
      return res.json() as Promise<ToolsListResult>;
    },
    initialData: () => {
      // Only use initial data if the filter matches what was initially loaded
      const isInitial =
        filter.q === initialFilter.q &&
        filter.category === initialFilter.category &&
        filter.sort === initialFilter.sort &&
        filter.page === initialFilter.page;
      return isInitial ? initialData : undefined;
    },
    placeholderData: (previousData) => previousData, // keep old data while fetching
    staleTime: 60 * 1000,
  });

  const handleFilterChange = useCallback((updates: Partial<ToolsFilter>) => {
    setFilter((prev) => ({ ...prev, ...updates }));
  }, []);
  const displayData = data ?? initialData;

  return (
    <div className="mx-auto w-full max-w-[1280px] px-4 py-8 sm:px-6 lg:px-8">
      {/* Page heading */}
      <div className="mb-6">
        <h1
          className="text-2xl font-semibold tracking-tight sm:text-3xl"
          style={{ color: "var(--color-foreground)" }}>
          AI Tools Directory
        </h1>
        <p
          className="mt-1 text-sm"
          style={{ color: "var(--color-foreground-muted)" }}>
          Discover, evaluate, and compare the best AI tools.
        </p>
      </div>

      {/* Controls row */}
      <div className="mb-4">
        <ToolsControls
          filter={filter}
          onFilterChange={handleFilterChange}
          total={displayData.total}
        />
      </div>

      {/* Category tabs */}
      <div className="mb-6">
        <CategoryTabs
          categories={categories}
          activeTab={activeTab}
          onFilterChange={handleFilterChange}
        />
      </div>

      {/* ── TOOLS / CATEGORY TABS: Content ── */}
      {activeTab === TAB_TOOLS ? (
        <InfiniteToolsList
          filter={filter}
          initialFilter={initialFilter}
          initialData={initialData}
        />
      ) : (
        <div
          className={`flex flex-col gap-4 transition-opacity duration-200 ${isPlaceholderData ? "opacity-60" : "opacity-100"}`}>
          <ToolsTable items={displayData.items} query={filter.q} />
          <ToolsPagination
            page={displayData.page}
            pageCount={displayData.pageCount}
            total={displayData.total}
            onFilterChange={handleFilterChange}
          />
        </div>
      )}
    </div>
  );
}
