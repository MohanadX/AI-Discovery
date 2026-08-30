import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CompareContent } from "@/components/tools/CompareContent";
import { CompareContentSkeleton } from "@/components/tools/CompareContentSkeleton";

export const metadata: Metadata = {
  title: "Compare AI Tools",
  description:
    "Side-by-side comparison of AI tools. Compare features, pricing, platforms, and more.",
};

type Props = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function ComparePage({ searchParams }: Props) {
  const raw = await searchParams;
  const idsParam = typeof raw.ids === "string" ? raw.ids : "";

  // Parse and sanitise: max 3 IDs, alphanumeric + hyphens only
  const ids = idsParam
    .split(",")
    .map((id) => id.trim())
    .filter((id) => /^[a-zA-Z0-9_-]+$/.test(id))
    .slice(0, 3);

  return (
    <div className="mx-auto w-full max-w-[1280px] px-4 py-8 sm:px-6 lg:px-8">
      {/* ── Static header — renders immediately, no data needed ── */}
      <header className="mb-8">
        <Link
          href="/tools"
          className="inline-flex items-center gap-1.5 text-sm mb-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded"
          style={{ color: "var(--color-foreground-muted)" }}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Tools
        </Link>

        <h1
          className="text-2xl font-semibold tracking-tight sm:text-3xl"
          style={{ color: "var(--color-foreground)" }}
        >
          Compare AI Tools
        </h1>
        <p
          className="mt-1 text-sm"
          style={{ color: "var(--color-foreground-muted)" }}
        >
          {ids.length >= 2
            ? `Comparing ${ids.length} tool${ids.length > 2 ? "s" : ""} side by side.`
            : "Select at least 2 tools from the directory to compare them here."}
        </p>
      </header>

      {/* ── Dynamic content — fetches tool data server-side ── */}
      {ids.length < 2 ? (
        <EmptyCompare />
      ) : (
        <Suspense fallback={<CompareContentSkeleton count={ids.length} />}>
          <CompareContent ids={ids} />
        </Suspense>
      )}
    </div>
  );
}

function EmptyCompare() {
  return (
    <div
      className="flex flex-col items-center justify-center gap-6 rounded-2xl border py-24 text-center"
      style={{
        borderColor: "var(--color-border)",
        backgroundColor: "var(--color-surface)",
      }}
    >
      <div
        className="flex h-16 w-16 items-center justify-center rounded-2xl"
        style={{
          backgroundColor: "var(--color-surface-raised)",
          border: "1px solid var(--color-border)",
        }}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--color-foreground-faint)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="2" y="3" width="6" height="6" rx="1" />
          <rect x="16" y="3" width="6" height="6" rx="1" />
          <rect x="2" y="15" width="6" height="6" rx="1" />
          <line x1="19" y1="15" x2="19" y2="21" />
          <line x1="16" y1="18" x2="22" y2="18" />
        </svg>
      </div>

      <div className="flex flex-col gap-1">
        <p
          className="text-base font-medium"
          style={{ color: "var(--color-foreground-soft)" }}
        >
          No tools selected
        </p>
        <p
          className="text-sm max-w-xs"
          style={{ color: "var(--color-foreground-muted)" }}
        >
          Use the{" "}
          <span style={{ color: "var(--color-accent)" }}>Compare</span> button
          on any tool in the directory to add it here.
        </p>
      </div>

      <Link
        href="/tools"
        className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors border focus-visible:outline-none focus-visible:ring-2"
        style={{
          backgroundColor: "var(--color-surface-raised)",
          borderColor: "var(--color-border-strong)",
          color: "var(--color-foreground-soft)",
        }}
      >
        Browse Tools Directory
      </Link>
    </div>
  );
}
