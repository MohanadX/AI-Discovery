import type { ToolListItem } from "@/lib/domain/tools";
import { ToolRow } from "./ToolRow";

// Column header definition
const COLUMNS = [
  { label: "Tool", className: "flex-1" },
  { label: "Category", className: "hidden w-28 shrink-0 sm:block" },
  { label: "Pricing", className: "hidden w-24 shrink-0 lg:block" },
  { label: "Platforms", className: "hidden w-28 shrink-0 xl:block" },
  { label: "Released", className: "hidden w-28 shrink-0 text-right lg:block" },
];

function TableHeader() {
  return (
    <div
      className="flex items-center gap-4 border-b px-4 py-2.5"
      style={{
        backgroundColor: "var(--color-surface)",
        borderColor: "var(--color-border)",
      }}
      role="row"
      aria-label="Column headers"
    >
      {/* Logo spacer */}
      <div className="w-10 shrink-0" aria-hidden="true" />
      {COLUMNS.map((col) => (
        <span
          key={col.label}
          role="columnheader"
          className={`${col.className} text-[11px] font-semibold uppercase tracking-widest`}
          style={{ color: "var(--color-foreground-faint)" }}
        >
          {col.label}
        </span>
      ))}
    </div>
  );
}

function EmptyState({ query }: { query?: string }) {
  return (
    <div
      className="flex flex-col items-center justify-center gap-4 py-20 text-center"
      style={{ color: "var(--color-foreground-muted)" }}
    >
      <div
        className="flex h-14 w-14 items-center justify-center rounded-2xl"
        style={{
          backgroundColor: "var(--color-surface-raised)",
          border: "1px solid var(--color-border)",
        }}
        aria-hidden="true"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-medium" style={{ color: "var(--color-foreground-soft)" }}>
          {query ? `No results for "${query}"` : "No tools found"}
        </p>
        <p className="text-sm" style={{ color: "var(--color-foreground-muted)" }}>
          Try adjusting your search or filters.
        </p>
      </div>
    </div>
  );
}

export function ToolsTable({
  items,
  query,
}: {
  items: ToolListItem[];
  query?: string;
}) {
  return (
    <div
      className="overflow-hidden rounded-xl border"
      style={{ borderColor: "var(--color-border)" }}
      role="table"
      aria-label="AI Tools"
    >
      <TableHeader />
      <div role="rowgroup">
        {items.length === 0 ? (
          <EmptyState query={query} />
        ) : (
          items.map((tool) => <ToolRow key={tool.id} tool={tool} />)
        )}
      </div>
    </div>
  );
}
