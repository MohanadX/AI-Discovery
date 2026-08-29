"use client";

import { useCallback } from "react";
import type { ToolsFilter } from "@/lib/domain/tools";

function PaginationButton({
  onClick,
  disabled,
  children,
  "aria-label": ariaLabel,
}: {
  onClick: () => void;
  disabled: boolean;
  children: React.ReactNode;
  "aria-label": string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className="flex h-9 items-center gap-1.5 rounded-lg px-3.5 text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-40"
      style={{
        backgroundColor: "var(--color-surface-raised)",
        border: "1px solid var(--color-border)",
        color: "var(--color-foreground-soft)",
      }}
      onMouseEnter={(e) => {
        if (!disabled)
          (e.currentTarget as HTMLButtonElement).style.borderColor =
            "var(--color-border-strong)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.borderColor =
          "var(--color-border)";
      }}>
      {children}
    </button>
  );
}

export function ToolsPagination({
  page,
  pageCount,
  total,
  onFilterChange,
}: {
  page: number;
  pageCount: number;
  total: number;
  onFilterChange: (updates: Partial<ToolsFilter>) => void;
}) {
  const goTo = useCallback(
    (nextPage: number) => {
      onFilterChange({ page: nextPage });
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [onFilterChange],
  );

  if (pageCount <= 1) return null;

  return (
    <div className="flex items-center justify-between pt-4">
      <span
        className="text-sm"
        style={{ color: "var(--color-foreground-muted)" }}>
        Page {page} of {pageCount}
        <span
          className="ml-2 text-xs"
          style={{ color: "var(--color-foreground-faint)" }}>
          ({total} tools)
        </span>
      </span>

      <div className="flex items-center gap-2">
        <PaginationButton
          onClick={() => goTo(page - 1)}
          disabled={page <= 1}
          aria-label="Go to previous page">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Previous
        </PaginationButton>

        <PaginationButton
          onClick={() => goTo(page + 1)}
          disabled={page >= pageCount}
          aria-label="Go to next page">
          Next
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </PaginationButton>
      </div>
    </div>
  );
}
