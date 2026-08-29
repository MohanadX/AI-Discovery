export default function ToolsLoading() {
  return (
    <div
      className="mx-auto w-full max-w-[1280px] px-4 py-8 sm:px-6 lg:px-8"
      aria-busy="true"
      aria-label="Loading tools…"
    >
      {/* Page header skeleton */}
      <div className="mb-6 flex items-center justify-between">
        <div
          className="h-8 w-48 animate-pulse rounded-lg"
          style={{ backgroundColor: "var(--color-surface-raised)" }}
        />
        <div
          className="h-6 w-24 animate-pulse rounded-md"
          style={{ backgroundColor: "var(--color-surface-raised)" }}
        />
      </div>

      {/* Controls row skeleton */}
      <div className="mb-4 flex gap-3">
        <div
          className="h-9 flex-1 animate-pulse rounded-lg"
          style={{ backgroundColor: "var(--color-surface-raised)" }}
        />
        <div
          className="h-9 w-36 animate-pulse rounded-lg"
          style={{ backgroundColor: "var(--color-surface-raised)" }}
        />
      </div>

      {/* Category tabs skeleton */}
      <div className="mb-6 flex gap-2 overflow-hidden">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-8 animate-pulse rounded-full"
            style={{
              backgroundColor: "var(--color-surface-raised)",
              width: `${60 + i * 15}px`,
              flexShrink: 0,
            }}
          />
        ))}
      </div>

      {/* Table header skeleton */}
      <div
        className="mb-px flex gap-4 rounded-t-lg border px-4 py-2.5"
        style={{
          backgroundColor: "var(--color-surface)",
          borderColor: "var(--color-border)",
        }}
      >
        {["40%", "15%", "12%", "15%", "10%"].map((w, i) => (
          <div
            key={i}
            className="h-3.5 animate-pulse rounded"
            style={{
              backgroundColor: "var(--color-surface-raised)",
              width: w,
            }}
          />
        ))}
      </div>

      {/* Row skeletons */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="flex items-center gap-4 border-b px-4 py-4"
          style={{ borderColor: "var(--color-border)" }}
        >
          {/* Logo */}
          <div
            className="h-10 w-10 shrink-0 animate-pulse rounded-lg"
            style={{ backgroundColor: "var(--color-surface-raised)" }}
          />
          {/* Name + tagline */}
          <div className="flex flex-1 flex-col gap-1.5">
            <div
              className="h-4 w-32 animate-pulse rounded"
              style={{ backgroundColor: "var(--color-surface-raised)" }}
            />
            <div
              className="h-3 w-56 animate-pulse rounded"
              style={{ backgroundColor: "var(--color-surface)" }}
            />
          </div>
          {/* Category */}
          <div
            className="h-5 w-20 animate-pulse rounded-full"
            style={{ backgroundColor: "var(--color-surface-raised)" }}
          />
          {/* Pricing */}
          <div
            className="h-5 w-16 animate-pulse rounded-full"
            style={{ backgroundColor: "var(--color-surface-raised)" }}
          />
          {/* Date */}
          <div
            className="h-4 w-20 animate-pulse rounded"
            style={{ backgroundColor: "var(--color-surface)" }}
          />
        </div>
      ))}
    </div>
  );
}
