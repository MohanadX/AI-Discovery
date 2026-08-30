"use client";

import { useCompare } from "./CompareContext";
import type { CompareItem } from "@/lib/compare-store";

type Props = {
  tool: CompareItem;
  /** Visual variant — 'row' is compact (listing), 'detail' is larger (detail page) */
  variant?: "row" | "detail";
};

export function CompareSelectButton({ tool, variant = "row" }: Props) {
  const { toggle, isSelected, canAdd } = useCompare();

  const selected = isSelected(tool.id);
  const disabled = !selected && !canAdd;

  const isRow = variant === "row";

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    toggle(tool);
  }

  if (isRow) {
    // Compact pill for table rows
    return (
      <button
        type="button"
        onClick={handleClick}
        disabled={disabled}
        aria-pressed={selected}
        aria-label={
          selected
            ? `Remove ${tool.name} from comparison`
            : disabled
              ? `Cannot add more than 3 tools to compare`
              : `Add ${tool.name} to comparison`
        }
        className="shrink-0 inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11px] font-medium transition-all duration-150 border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1"
        style={
          selected
            ? {
                backgroundColor: "var(--color-accent-muted)",
                borderColor: "var(--color-accent)",
                color: "var(--color-accent)",
              }
            : disabled
              ? {
                  backgroundColor: "transparent",
                  borderColor: "var(--color-border)",
                  color: "var(--color-foreground-faint)",
                  cursor: "not-allowed",
                  opacity: 0.45,
                }
              : {
                  backgroundColor: "transparent",
                  borderColor: "var(--color-border-strong)",
                  color: "var(--color-foreground-muted)",
                }
        }
        onMouseEnter={(e) => {
          if (!disabled && !selected) {
            (e.currentTarget as HTMLButtonElement).style.borderColor =
              "var(--color-accent)";
            (e.currentTarget as HTMLButtonElement).style.color =
              "var(--color-accent)";
          }
        }}
        onMouseLeave={(e) => {
          if (!disabled && !selected) {
            (e.currentTarget as HTMLButtonElement).style.borderColor =
              "var(--color-border-strong)";
            (e.currentTarget as HTMLButtonElement).style.color =
              "var(--color-foreground-muted)";
          }
        }}
      >
        {selected ? (
          <>
            <svg
              width="10"
              height="10"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="2 6 5 9 10 3" />
            </svg>
            Selected
          </>
        ) : (
          <>
            <svg
              width="10"
              height="10"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <line x1="6" y1="1" x2="6" y2="11" />
              <line x1="1" y1="6" x2="11" y2="6" />
            </svg>
            Compare
          </>
        )}
      </button>
    );
  }

  // Larger variant for the detail page action bar
  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={disabled}
      aria-pressed={selected}
      aria-label={
        selected
          ? `Remove ${tool.name} from comparison`
          : disabled
            ? `Cannot add more than 3 tools to compare`
            : `Add ${tool.name} to comparison`
      }
      className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-150 border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
      style={
        selected
          ? {
              backgroundColor: "var(--color-accent-muted)",
              borderColor: "var(--color-accent)",
              color: "var(--color-accent)",
            }
          : disabled
            ? {
                backgroundColor: "transparent",
                borderColor: "var(--color-border)",
                color: "var(--color-foreground-faint)",
                cursor: "not-allowed",
                opacity: 0.45,
              }
            : {
                backgroundColor: "var(--color-surface)",
                borderColor: "var(--color-border-strong)",
                color: "var(--color-foreground-soft)",
              }
      }
      onMouseEnter={(e) => {
        if (!disabled && !selected) {
          (e.currentTarget as HTMLButtonElement).style.borderColor =
            "var(--color-accent)";
          (e.currentTarget as HTMLButtonElement).style.color =
            "var(--color-accent)";
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled && !selected) {
          (e.currentTarget as HTMLButtonElement).style.borderColor =
            "var(--color-border-strong)";
          (e.currentTarget as HTMLButtonElement).style.color =
            "var(--color-foreground-soft)";
        }
      }}
    >
      {selected ? (
        <>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="3 8 6 11 13 4" />
          </svg>
          Added to Compare
        </>
      ) : (
        <>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <rect x="2" y="2" width="5" height="5" rx="1" />
            <rect x="9" y="2" width="5" height="5" rx="1" />
            <rect x="2" y="9" width="5" height="5" rx="1" />
            <line x1="11.5" y1="9.5" x2="11.5" y2="14.5" />
            <line x1="9" y1="12" x2="14" y2="12" />
          </svg>
          {disabled ? "Compare (max 3)" : "Add to Compare"}
        </>
      )}
    </button>
  );
}
