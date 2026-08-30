"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useCompare } from "./CompareContext";

export function CompareBar() {
  const { selected, clear, toggle } = useCompare();

  const count = selected.length;

  if (count === 0) return null;

  const compareHref = `/tools/compare?ids=${selected.map((t) => t.id).join(",")}`;

  return (
    <div
      role="region"
      aria-label="Compare tools"
      aria-live="polite"
      className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center px-4 pb-4 pointer-events-none"
    >
      <div
        className="pointer-events-auto w-full max-w-2xl flex items-center gap-3 rounded-2xl border px-4 py-3 shadow-2xl"
        style={{
          backgroundColor: "var(--color-surface)",
          borderColor: "var(--color-border-strong)",
          boxShadow:
            "0 4px 6px -1px rgba(0,0,0,0.4), 0 24px 48px -8px rgba(0,0,0,0.6), 0 0 0 1px rgba(124,92,252,0.1)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      >
        {/* Left: label + tool chips */}
        <div className="flex flex-1 flex-wrap items-center gap-2 min-w-0">
          <span
            className="text-xs font-semibold uppercase tracking-wider shrink-0"
            style={{ color: "var(--color-foreground-faint)" }}
          >
            Compare
          </span>

          {selected.map((tool) => (
            <span
              key={tool.id}
              className="inline-flex items-center gap-1.5 rounded-full py-0.5 pl-2.5 pr-1 text-xs font-medium"
              style={{
                backgroundColor: "var(--color-accent-muted)",
                color: "var(--color-accent)",
                border: "1px solid var(--color-accent)",
              }}
            >
              <span>{tool.name}</span>
              <button
                type="button"
                onClick={() => toggle(tool)}
                aria-label={`Remove ${tool.name} from comparison`}
                title={`Remove ${tool.name}`}
                className="inline-flex size-4 items-center justify-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2"
                style={{
                  color: "var(--color-accent)",
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.color =
                    "#ffffff";
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                    "var(--color-accent)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.color =
                    "var(--color-accent)";
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                    "transparent";
                }}
              >
                <X className="size-3" aria-hidden="true" strokeWidth={2.5} />
              </button>
            </span>
          ))}

          {/* Empty slots */}
          {Array.from({ length: 3 - count }).map((_, i) => (
            <span
              key={`empty-${i}`}
              className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs"
              style={{
                backgroundColor: "var(--color-surface-raised)",
                border: "1px dashed var(--color-border-strong)",
                color: "var(--color-foreground-faint)",
              }}
            >
              + add
            </span>
          ))}
        </div>

        {/* Right: actions */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={clear}
            aria-label="Clear comparison"
            className="rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2"
            style={{
              color: "var(--color-foreground-faint)",
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.color =
                "var(--color-foreground-soft)";
              (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                "var(--color-surface-hover)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.color =
                "var(--color-foreground-faint)";
              (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                "transparent";
            }}
          >
            Clear
          </button>

          {count >= 2 ? (
            <Link
              href={compareHref}
              prefetch={false}
              className="inline-flex items-center gap-1.5 rounded-lg px-4 py-1.5 text-sm font-semibold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              style={{
                backgroundColor: "var(--color-accent)",
                color: "#ffffff",
              }}
            >
              <CompareIcon />
              Compare ({count})
            </Link>
          ) : (
            <button
              type="button"
              disabled
              className="inline-flex items-center gap-1.5 rounded-lg px-4 py-1.5 text-sm font-semibold opacity-50"
              style={{
                backgroundColor: "var(--color-surface-active)",
                color: "var(--color-foreground-faint)",
              }}
            >
              <CompareIcon />
              Compare ({count})
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function CompareIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 3h4v4H3zM9 3h4v4H9zM3 9h4v4H3z" />
    </svg>
  );
}
