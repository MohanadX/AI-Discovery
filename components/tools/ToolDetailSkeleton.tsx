export function ToolDetailSkeleton() {
  return (
    <div
      className="flex flex-col gap-12 lg:flex-row lg:items-start animate-pulse"
      aria-hidden="true"
    >
      {/* Main Content Column */}
      <div className="flex-1 min-w-0 flex flex-col gap-8">
        
        {/* Header Section */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          {/* Logo Skeleton */}
          <div
            className="h-24 w-24 shrink-0 rounded-2xl border"
            style={{
              backgroundColor: "var(--color-surface-raised)",
              borderColor: "var(--color-border)",
            }}
          />

          <div className="flex flex-col gap-3">
            {/* Title Skeleton */}
            <div
              className="h-9 w-64 rounded-md"
              style={{ backgroundColor: "var(--color-surface-raised)" }}
            />
            {/* Tagline Skeleton */}
            <div
              className="h-6 w-80 rounded-md"
              style={{ backgroundColor: "var(--color-surface-raised)" }}
            />
            
            {/* Badges Skeleton */}
            <div className="flex gap-3 mt-2">
              <div
                className="h-6 w-24 rounded-full"
                style={{ backgroundColor: "var(--color-surface-raised)" }}
              />
              <div
                className="h-6 w-16 rounded-md"
                style={{ backgroundColor: "var(--color-surface-raised)" }}
              />
            </div>
          </div>
        </div>

        {/* Action Buttons Skeleton */}
        <div className="flex gap-4 border-b pb-8" style={{ borderColor: "var(--color-border)" }}>
          <div
            className="h-10 w-36 rounded-lg"
            style={{ backgroundColor: "var(--color-surface-raised)" }}
          />
          <div
            className="h-10 w-36 rounded-lg"
            style={{ backgroundColor: "var(--color-surface-raised)" }}
          />
        </div>

        {/* Description Section Skeleton */}
        <div className="flex flex-col gap-4">
          <div
            className="h-7 w-40 rounded-md"
            style={{ backgroundColor: "var(--color-surface-raised)" }}
          />
          <div className="flex flex-col gap-2">
            <div className="h-4 w-full rounded" style={{ backgroundColor: "var(--color-surface-raised)" }} />
            <div className="h-4 w-[90%] rounded" style={{ backgroundColor: "var(--color-surface-raised)" }} />
            <div className="h-4 w-[95%] rounded" style={{ backgroundColor: "var(--color-surface-raised)" }} />
            <div className="h-4 w-[80%] rounded" style={{ backgroundColor: "var(--color-surface-raised)" }} />
          </div>
        </div>

        {/* Screenshots Skeleton */}
        <div className="flex flex-col gap-4">
          <div
            className="h-7 w-32 rounded-md"
            style={{ backgroundColor: "var(--color-surface-raised)" }}
          />
          <div className="flex gap-4 overflow-hidden pb-4">
            <div
              className="h-[250px] min-w-[350px] shrink-0 rounded-xl"
              style={{ backgroundColor: "var(--color-surface-raised)" }}
            />
            <div
              className="h-[250px] min-w-[350px] shrink-0 rounded-xl hidden sm:block"
              style={{ backgroundColor: "var(--color-surface-raised)" }}
            />
          </div>
        </div>

        {/* Capabilities & Use Cases Skeleton */}
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <div
              className="h-7 w-32 rounded-md"
              style={{ backgroundColor: "var(--color-surface-raised)" }}
            />
            <div className="flex flex-col gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-3">
                  <div className="h-5 w-5 rounded-full shrink-0" style={{ backgroundColor: "var(--color-surface-raised)" }} />
                  <div className="flex flex-col gap-2 w-full mt-0.5">
                    <div className="h-4 w-3/4 rounded" style={{ backgroundColor: "var(--color-surface-raised)" }} />
                    <div className="h-3 w-5/6 rounded" style={{ backgroundColor: "var(--color-surface-raised)" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <div
              className="h-7 w-32 rounded-md"
              style={{ backgroundColor: "var(--color-surface-raised)" }}
            />
            <div className="flex flex-col gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-3">
                  <div className="h-5 w-5 rounded-full shrink-0" style={{ backgroundColor: "var(--color-surface-raised)" }} />
                  <div className="flex flex-col gap-2 w-full mt-0.5">
                    <div className="h-4 w-3/4 rounded" style={{ backgroundColor: "var(--color-surface-raised)" }} />
                    <div className="h-3 w-5/6 rounded" style={{ backgroundColor: "var(--color-surface-raised)" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Skeleton */}
      <div className="w-full lg:w-80 shrink-0">
        <div
          className="rounded-2xl p-6 border flex flex-col gap-6"
          style={{
            backgroundColor: "var(--color-surface)",
            borderColor: "var(--color-border)",
          }}
        >
          {/* Section 1 */}
          <div className="flex flex-col gap-2">
            <div className="h-3 w-24 rounded" style={{ backgroundColor: "var(--color-surface-raised)" }} />
            <div className="h-5 w-32 rounded" style={{ backgroundColor: "var(--color-surface-raised)" }} />
          </div>
          <hr style={{ borderColor: "var(--color-border-strong)" }} />
          
          {/* Section 2 */}
          <div className="flex flex-col gap-2">
            <div className="h-3 w-24 rounded" style={{ backgroundColor: "var(--color-surface-raised)" }} />
            <div className="h-5 w-40 rounded" style={{ backgroundColor: "var(--color-surface-raised)" }} />
            <div className="h-4 w-32 rounded mt-1" style={{ backgroundColor: "var(--color-surface-raised)" }} />
          </div>
          <hr style={{ borderColor: "var(--color-border-strong)" }} />
          
          {/* Section 3 */}
          <div className="flex flex-col gap-3">
            <div className="h-3 w-24 rounded" style={{ backgroundColor: "var(--color-surface-raised)" }} />
            <div className="flex gap-2">
              <div className="h-6 w-16 rounded" style={{ backgroundColor: "var(--color-surface-raised)" }} />
              <div className="h-6 w-20 rounded" style={{ backgroundColor: "var(--color-surface-raised)" }} />
              <div className="h-6 w-14 rounded" style={{ backgroundColor: "var(--color-surface-raised)" }} />
            </div>
          </div>
          <hr style={{ borderColor: "var(--color-border-strong)" }} />
          
          {/* Section 4 */}
          <div className="flex flex-col gap-3">
            <div className="flex justify-between">
              <div className="h-4 w-16 rounded" style={{ backgroundColor: "var(--color-surface-raised)" }} />
              <div className="h-4 w-24 rounded" style={{ backgroundColor: "var(--color-surface-raised)" }} />
            </div>
            <div className="flex justify-between">
              <div className="h-4 w-16 rounded" style={{ backgroundColor: "var(--color-surface-raised)" }} />
              <div className="h-4 w-24 rounded" style={{ backgroundColor: "var(--color-surface-raised)" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
