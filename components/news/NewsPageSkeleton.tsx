export function NewsPageSkeleton() {
  // A grid of 6 skeleton cards
  return (
    <div className="flex flex-col animate-pulse" aria-hidden="true">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col h-[280px] overflow-hidden rounded-xl border"
            style={{
              backgroundColor: "var(--color-surface)",
              borderColor: "var(--color-border)",
            }}
          >
            <div className="flex flex-col flex-1 p-5 gap-4">
              {/* Header */}
              <div className="flex items-center justify-between gap-4">
                <div className="h-5 w-24 rounded-full" style={{ backgroundColor: "var(--color-surface-raised)" }} />
                <div className="h-4 w-16 rounded" style={{ backgroundColor: "var(--color-surface-raised)" }} />
              </div>

              {/* Title & Excerpt */}
              <div className="flex flex-col gap-3 mt-2">
                <div className="h-6 w-full rounded" style={{ backgroundColor: "var(--color-surface-raised)" }} />
                <div className="h-6 w-3/4 rounded" style={{ backgroundColor: "var(--color-surface-raised)" }} />
                
                <div className="h-4 w-full rounded mt-2" style={{ backgroundColor: "var(--color-surface-raised)" }} />
                <div className="h-4 w-5/6 rounded" style={{ backgroundColor: "var(--color-surface-raised)" }} />
              </div>

              {/* Footer */}
              <div className="mt-auto pt-4 flex items-center justify-between border-t" style={{ borderColor: "var(--color-border)" }}>
                <div className="h-4 w-20 rounded" style={{ backgroundColor: "var(--color-surface-raised)" }} />
                <div className="h-4 w-16 rounded" style={{ backgroundColor: "var(--color-surface-raised)" }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
