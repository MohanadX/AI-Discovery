"use client";

import { useEffect } from "react";

export default function ToolsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[ToolsError]", error);
  }, [error]);

  return (
    <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center justify-center gap-6 px-4 py-24 text-center sm:px-6 lg:px-8">
      <div
        className="flex h-16 w-16 items-center justify-center rounded-2xl"
        style={{
          backgroundColor: "var(--color-surface-raised)",
          border: "1px solid var(--color-border)",
        }}
        aria-hidden="true">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--color-danger)"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>

      <div className="flex flex-col gap-2">
        <h2
          className="text-xl font-semibold"
          style={{ color: "var(--color-foreground)" }}>
          Something went wrong
        </h2>
        <p
          className="max-w-sm text-sm leading-relaxed"
          style={{ color: "var(--color-foreground-muted)" }}>
          We couldn&apos;t load the tools directory. Please try again.
        </p>
      </div>

      <button
        type="button"
        onClick={reset}
        className="rounded-lg cursor-pointer px-5 py-2 text-sm font-medium transition-colors"
        style={{
          backgroundColor: "var(--color-surface-raised)",
          border: "1px solid var(--color-border-strong)",
          color: "var(--color-foreground-soft)",
        }}>
        Try again
      </button>
    </div>
  );
}
