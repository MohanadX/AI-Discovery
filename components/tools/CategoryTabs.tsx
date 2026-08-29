"use client";

import { useCallback } from "react";
import type { CategoryOption } from "@/lib/data/tools";
import type { ToolsFilter } from "@/lib/domain/tools";

// The built-in tab that is always shown first
export const TAB_TOOLS = "tools";

type Tab = {
  id: string; // matches ?tab= param
  label: string;
  mode: "infinite" | "offset";
};

function buildTabs(categories: CategoryOption[]): Tab[] {
  const built: Tab[] = [
    { id: TAB_TOOLS, label: "All Tools", mode: "offset" },
  ];
  for (const cat of categories) {
    built.push({ id: cat.slug, label: cat.name, mode: "offset" });
  }
  return built;
}

export function CategoryTabs({
  categories,
  activeTab,
  onFilterChange,
}: {
  categories: CategoryOption[];
  activeTab: string;
  onFilterChange: (updates: Partial<ToolsFilter>) => void;
}) {
  const tabs = buildTabs(categories);

  const handleTabClick = useCallback(
    (tab: Tab) => {
      if (tab.id === TAB_TOOLS) {
        onFilterChange({ category: "", page: 1 });
      } else {
        onFilterChange({ category: tab.id, page: 1 });
      }
    },
    [onFilterChange],
  );

  return (
    <div
      className="relative border-b"
      style={{ borderColor: "var(--color-border)" }}
    >
      {/* Scrollable tab strip */}
      <div
        className="flex gap-0.5 overflow-x-auto pb-px scrollbar-hide"
        role="tablist"
        aria-label="Tool categories"
      >
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => handleTabClick(tab)}
              className="relative flex shrink-0 items-center gap-1.5 rounded-t-lg px-4 py-2.5 text-sm font-medium transition-colors"
              style={{
                color: isActive
                  ? "var(--color-foreground)"
                  : "var(--color-foreground-muted)",
                backgroundColor: isActive
                  ? "var(--color-surface)"
                  : "transparent",
                borderBottom: isActive
                  ? "2px solid var(--color-accent)"
                  : "2px solid transparent",
              }}
              onMouseEnter={(e) => {
                if (!isActive)
                  (e.currentTarget as HTMLButtonElement).style.color =
                    "var(--color-foreground-soft)";
              }}
              onMouseLeave={(e) => {
                if (!isActive)
                  (e.currentTarget as HTMLButtonElement).style.color =
                    "var(--color-foreground-muted)";
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
