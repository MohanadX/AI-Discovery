import type { ReactNode } from "react";
import { CompareProvider } from "@/components/compare/CompareContext";
import { CompareBar } from "@/components/compare/CompareBar";

/**
 * Scoped layout for the /tools subtree.
 * Wraps both the listing page and the detail pages with the compare context
 * and the sticky compare bar.
 */
export default function ToolsLayout({ children }: { children: ReactNode }) {
  return (
    <CompareProvider>
      {children}
      <CompareBar />
    </CompareProvider>
  );
}
