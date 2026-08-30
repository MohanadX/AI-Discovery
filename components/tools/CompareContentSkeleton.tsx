/**
 * Skeleton placeholder for the compare table while CompareContent is streaming.
 */

export function CompareContentSkeleton({ count }: { count: number }) {
  const cols = Array.from({ length: count });

  return (
    <div
      className="overflow-x-auto rounded-2xl border animate-pulse"
      style={{ borderColor: "var(--color-border)" }}
    >
      {/* Header cards skeleton */}
      <div
        className="grid border-b"
        style={{
          gridTemplateColumns: `160px repeat(${count}, minmax(220px, 1fr))`,
          borderColor: "var(--color-border)",
          backgroundColor: "var(--color-surface)",
        }}
      >
        <div style={{ borderRight: "1px solid var(--color-border)" }} />
        {cols.map((_, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-3 px-4 py-6"
            style={{
              borderRight:
                i < count - 1 ? "1px solid var(--color-border)" : undefined,
            }}
          >
            <div
              className="h-16 w-16 rounded-2xl"
              style={{ backgroundColor: "var(--color-surface-raised)" }}
            />
            <div className="flex flex-col items-center gap-2 w-full">
              <div
                className="h-3 w-24 rounded"
                style={{ backgroundColor: "var(--color-surface-raised)" }}
              />
              <div
                className="h-2.5 w-32 rounded"
                style={{ backgroundColor: "var(--color-surface-raised)" }}
              />
              <div
                className="h-2.5 w-20 rounded"
                style={{ backgroundColor: "var(--color-surface-raised)" }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Row skeletons */}
      {["Pricing", "Platforms", "Company", "Launched", "Capabilities", "Use Cases"].map(
        (label) => (
          <div
            key={label}
            className="grid border-b"
            style={{
              gridTemplateColumns: `160px repeat(${count}, minmax(220px, 1fr))`,
              borderColor: "var(--color-border)",
            }}
          >
            <div
              className="px-4 py-3"
              style={{ borderRight: "1px solid var(--color-border)" }}
            >
              <div
                className="h-2.5 w-16 rounded"
                style={{ backgroundColor: "var(--color-surface-raised)" }}
              />
            </div>
            {cols.map((_, i) => (
              <div
                key={i}
                className="px-4 py-3"
                style={{
                  borderRight:
                    i < count - 1
                      ? "1px solid var(--color-border)"
                      : undefined,
                }}
              >
                <div
                  className="h-3 w-20 rounded"
                  style={{ backgroundColor: "var(--color-surface-raised)" }}
                />
              </div>
            ))}
          </div>
        ),
      )}
    </div>
  );
}
