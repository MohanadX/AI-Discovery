/**
 * Server component — fetches tool data for all IDs in parallel and renders
 * the comparison table. Wrapped in <Suspense> by the compare page.
 */
import "server-only";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { getToolById } from "@/lib/data/tools";
import { PRICING_LABELS, CATEGORY_ACCENTS } from "@/lib/domain/tools";
import { formatDate } from "@/lib/utils";
import { CheckCircle2, XCircle, ExternalLink } from "lucide-react";

type Tool = NonNullable<Awaited<ReturnType<typeof getToolById>>>;

// ─── Section row helper ───────────────────────────────────────────────────────

function CompareRow({ label, cells }: { label: string; cells: ReactNode[] }) {
  return (
    <div
      className="grid border-b"
      style={{
        gridTemplateColumns: `160px repeat(${cells.length}, 1fr)`,
        borderColor: "var(--color-border)",
      }}>
      {/* Label */}
      <div
        className="flex items-center px-4 py-3 text-xs font-semibold uppercase tracking-wider"
        style={{
          backgroundColor: "var(--color-surface)",
          color: "var(--color-foreground-faint)",
          borderRight: "1px solid var(--color-border)",
        }}>
        {label}
      </div>

      {/* Cells */}
      {cells.map((cell, i) => (
        <div
          key={i}
          className="flex items-start px-4 py-3 text-sm"
          style={{
            color: "var(--color-foreground-soft)",
            borderRight:
              i < cells.length - 1
                ? "1px solid var(--color-border)"
                : undefined,
          }}>
          {cell}
        </div>
      ))}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export async function CompareContent({ ids }: { ids: string[] }) {
  // Fetch all tools in parallel
  const tools = (await Promise.all(ids.map((id) => getToolById(id)))).filter(
    (t): t is Tool => t !== null,
  );

  if (tools.length < 2) {
    return (
      <div
        className="rounded-2xl border p-8 text-center text-sm"
        style={{
          borderColor: "var(--color-border)",
          color: "var(--color-foreground-muted)",
        }}>
        One or more tools could not be found. Please go back and select valid
        tools.
      </div>
    );
  }

  const colCount = tools.length;

  return (
    <div
      className="overflow-hidden rounded-2xl border"
      style={{ borderColor: "var(--color-border)" }}>
      {/* ── Tool header cards ── */}
      <div
        className="grid border-b"
        style={{
          gridTemplateColumns: `160px repeat(${colCount}, 1fr)`,
          borderColor: "var(--color-border)",
          backgroundColor: "var(--color-surface)",
        }}>
        {/* empty label cell */}
        <div
          style={{ borderRight: "1px solid var(--color-border)" }}
          aria-hidden="true"
        />

        {tools.map((tool, i) => {
          const accentColor = tool.categories[0]?.accent
            ? (CATEGORY_ACCENTS[tool.categories[0].accent] ??
              "var(--color-foreground-faint)")
            : "var(--color-foreground-faint)";

          return (
            <div
              key={tool.id}
              className="flex flex-col items-center gap-3 px-4 py-6 text-center"
              style={{
                borderRight:
                  i < colCount - 1
                    ? "1px solid var(--color-border)"
                    : undefined,
              }}>
              {/* Logo */}
              <div
                className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border shadow-sm"
                style={{
                  backgroundColor: "var(--color-surface-raised)",
                  borderColor: "var(--color-border)",
                }}>
                {tool.logoUrl ? (
                  <Image
                    src={tool.logoUrl}
                    alt={`${tool.name} logo`}
                    width={64}
                    height={64}
                    className="object-contain"
                    unoptimized={tool.logoUrl.startsWith("https://placehold")}
                  />
                ) : (
                  <span
                    className="text-xl font-bold"
                    style={{ color: "var(--color-foreground-muted)" }}>
                    {tool.name.slice(0, 2).toUpperCase()}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <Link
                  href={`/tools/${tool.id}/${tool.slug}`}
                  className="text-sm font-semibold hover:underline"
                  style={{ color: "var(--color-foreground)" }}>
                  {tool.name}
                </Link>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "var(--color-foreground-muted)" }}>
                  {tool.tagline}
                </p>
                {tool.categories[0] && (
                  <span
                    className="mx-auto mt-1 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium"
                    style={{
                      backgroundColor: "var(--color-surface-raised)",
                      border: "1px solid var(--color-border)",
                      color: "var(--color-foreground-soft)",
                    }}>
                    <span
                      className="inline-block h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: accentColor }}
                    />
                    {tool.categories[0].name}
                  </span>
                )}
              </div>

              <a
                href={tool.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors border"
                style={{
                  backgroundColor: "var(--color-surface-raised)",
                  borderColor: "var(--color-border-strong)",
                  color: "var(--color-foreground-soft)",
                }}>
                Visit
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          );
        })}
      </div>

      {/* ── Comparison rows ── */}

      {/* Pricing */}
      <CompareRow
        label="Pricing"
        cells={tools.map((t) => (
          <div className="flex flex-col gap-0.5" key={t.id}>
            <span
              className="font-medium"
              style={{ color: "var(--color-foreground)" }}>
              {PRICING_LABELS[t.pricingModel]}
            </span>
            {t.pricingNote && (
              <span
                className="text-xs"
                style={{ color: "var(--color-foreground-muted)" }}>
                {t.pricingNote}
              </span>
            )}
          </div>
        ))}
      />

      {/* Platforms */}
      <CompareRow
        label="Platforms"
        cells={tools.map((t) => (
          <div className="flex flex-wrap gap-1" key={t.id}>
            {t.platforms.length > 0 ? (
              t.platforms.map((p) => (
                <span
                  key={p.slug}
                  className="rounded px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide"
                  style={{
                    backgroundColor: "var(--color-surface-active)",
                    color: "var(--color-foreground-muted)",
                  }}>
                  {p.name}
                </span>
              ))
            ) : (
              <span style={{ color: "var(--color-foreground-faint)" }}>—</span>
            )}
          </div>
        ))}
      />

      {/* Company */}
      <CompareRow
        label="Company"
        cells={tools.map((t) => (
          <div className="flex flex-col gap-0.5" key={t.id}>
            {t.companyUrl ? (
              <a
                href={t.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                style={{ color: "var(--color-accent)" }}>
                {t.companyName}
              </a>
            ) : (
              <span>{t.companyName ?? "—"}</span>
            )}
            {t.companyLocation && (
              <span
                className="text-xs"
                style={{ color: "var(--color-foreground-muted)" }}>
                {t.companyLocation}
              </span>
            )}
          </div>
        ))}
      />

      {/* Launched */}
      <CompareRow
        label="Launched"
        cells={tools.map((t) => (
          <span key={t.id}>
            {t.launchDate ? formatDate(t.launchDate) : "—"}
          </span>
        ))}
      />

      {/* Capabilities */}
      <CompareRow
        label="Capabilities"
        cells={tools.map((t) => (
          <ul className="flex flex-col gap-1.5" key={t.id}>
            {t.capabilities.length > 0 ? (
              t.capabilities.slice(0, 5).map((cap) => (
                <li key={cap.id} className="flex items-start gap-1.5">
                  <CheckCircle2
                    className="h-3.5 w-3.5 mt-0.5 shrink-0"
                    style={{ color: "var(--color-success)" }}
                  />
                  <span className="text-xs">{cap.title}</span>
                </li>
              ))
            ) : (
              <li
                className="flex items-center gap-1.5 text-xs"
                style={{ color: "var(--color-foreground-faint)" }}>
                <XCircle className="h-3.5 w-3.5 shrink-0" />
                Not listed
              </li>
            )}
          </ul>
        ))}
      />

      {/* Use Cases */}
      <CompareRow
        label="Use Cases"
        cells={tools.map((t) => (
          <ul className="flex flex-col gap-1.5" key={t.id}>
            {t.useCases.length > 0 ? (
              t.useCases.slice(0, 5).map((uc) => (
                <li key={uc.id} className="flex items-start gap-1.5">
                  <CheckCircle2
                    className="h-3.5 w-3.5 mt-0.5 shrink-0"
                    style={{ color: "var(--color-highlight)" }}
                  />
                  <span className="text-xs">{uc.title}</span>
                </li>
              ))
            ) : (
              <li
                className="flex items-center gap-1.5 text-xs"
                style={{ color: "var(--color-foreground-faint)" }}>
                <XCircle className="h-3.5 w-3.5 shrink-0" />
                Not listed
              </li>
            )}
          </ul>
        ))}
      />

      {/* Featured status */}
      <CompareRow
        label="Featured"
        cells={tools.map((t) =>
          t.isFeatured ? (
            <span
              className="inline-flex items-center gap-1 text-xs font-semibold"
              style={{ color: "var(--color-signal)" }}
              key={t.id}>
              <CheckCircle2 className="h-3.5 w-3.5" />
              Yes
            </span>
          ) : (
            <span
              className="text-xs"
              style={{ color: "var(--color-foreground-faint)" }}
              key={t.id}>
              —
            </span>
          ),
        )}
      />
    </div>
  );
}
