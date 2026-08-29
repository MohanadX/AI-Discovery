"use client";

import { useCallback, useRef, useState, useTransition, useEffect } from "react";
import type { ToolsFilter } from "@/lib/domain/tools";

const SORT_OPTIONS = [
  { value: "newest", label: "Newest" },
  { value: "popular", label: "Most Popular" },
  { value: "name", label: "Name (A–Z)" },
] as const;

export function ToolsControls({
  filter,
  onFilterChange,
  total,
}: {
  filter: ToolsFilter;
  onFilterChange: (updates: Partial<ToolsFilter>) => void;
  total: number;
}) {
  const [, startTransition] = useTransition();
  const [localQ, setLocalQ] = useState(filter.q || "");
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Sync local search when prop changes externally (e.g. back button)

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocalQ(value);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      startTransition(() => {
        onFilterChange({ q: value || undefined, page: 1 });
      });
    }, 350);
  };

  const handleSearchClear = () => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
      debounceRef.current = null;
    }
    setLocalQ("");
    onFilterChange({ q: undefined, page: 1 });
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({
      sort: (e.target.value === "newest"
        ? undefined
        : e.target.value) as ToolsFilter["sort"],
      page: 1,
    });
  };

  const initialSort = filter.sort || "newest";

  return (
    <div className="flex items-center gap-3">
      {/* Search input */}
      <div className="relative flex-1">
        <label htmlFor="tools-search" className="sr-only">
          Search AI tools
        </label>
        <span
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2"
          aria-hidden="true"
          style={{ color: "var(--color-foreground-faint)" }}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </span>

        <input
          id="tools-search"
          type="search"
          value={localQ}
          onChange={handleSearchChange}
          placeholder="Search AI tools"
          autoComplete="off"
          className="w-full rounded-lg py-2 pl-9 pr-9 text-sm outline-none transition-colors"
          style={{
            backgroundColor: "var(--color-surface-raised)",
            border: "1px solid var(--color-border)",
            color: "var(--color-foreground)",
          }}
          onFocus={(e) => {
            (e.target as HTMLInputElement).style.borderColor =
              "var(--color-accent)";
          }}
          onBlur={(e) => {
            (e.target as HTMLInputElement).style.borderColor =
              "var(--color-border)";
          }}
        />

        {localQ && (
          <button
            type="button"
            onClick={handleSearchClear}
            aria-label="Clear search"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded p-0.5 transition-colors"
            style={{ color: "var(--color-foreground-faint)" }}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}
      </div>

      {/* Result count */}
      <span
        className="hidden whitespace-nowrap text-sm sm:block"
        style={{ color: "var(--color-foreground-muted)" }}
        aria-live="polite"
        aria-label={`${total} tools found`}
        suppressHydrationWarning>
        {total.toLocaleString()} tools
      </span>

      {/* Sort select */}
      <div className="relative shrink-0">
        <label htmlFor="tools-sort" className="sr-only">
          Sort tools by
        </label>
        <select
          id="tools-sort"
          value={initialSort}
          onChange={handleSortChange}
          className="h-9 cursor-pointer appearance-none rounded-lg py-0 pl-3 pr-8 text-sm outline-none transition-colors"
          style={{
            backgroundColor: "var(--color-surface-raised)",
            border: "1px solid var(--color-border)",
            color: "var(--color-foreground-soft)",
          }}>
          {SORT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <span
          className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2"
          aria-hidden="true"
          style={{ color: "var(--color-foreground-faint)" }}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </div>
    </div>
  );
}
