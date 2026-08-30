import Image from "next/image";
import { PRICING_LABELS, CATEGORY_ACCENTS } from "@/lib/domain/tools";
import { formatDate } from "@/lib/utils";
import type { ToolDetailResult } from "@/lib/data/tools";
import { ExternalLink, CheckCircle2, MonitorSmartphone } from "lucide-react";
import { CompareSelectButton } from "../compare/CompareSelectButton";

export function ToolDetail({ tool }: { tool: NonNullable<ToolDetailResult> }) {
  const primaryCategory = tool.categories[0] ?? null;
  const accentColor = primaryCategory?.accent
    ? (CATEGORY_ACCENTS[primaryCategory.accent] ??
      "var(--color-foreground-faint)")
    : "var(--color-foreground-faint)";

  const initials = tool.name.slice(0, 2).toUpperCase();

  return (
    <article className="flex flex-col gap-12 lg:flex-row lg:items-start">
      {/* Main Content Column */}
      <div className="flex-1 min-w-0 flex flex-col gap-8">
        {/* Header Section */}
        <header className="flex flex-col gap-6 sm:flex-row sm:items-center">
          {/* Logo */}
          <div
            className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-2xl border shadow-sm"
            style={{
              backgroundColor: "var(--color-surface-raised)",
              borderColor: "var(--color-border)",
            }}>
            {tool.logoUrl ? (
              <Image
                src={tool.logoUrl}
                alt={`${tool.name} logo`}
                width={96}
                height={96}
                className="object-contain"
                unoptimized={tool.logoUrl.startsWith("https://placehold")}
              />
            ) : (
              <span
                className="text-3xl font-bold tracking-tight"
                style={{ color: "var(--color-foreground-muted)" }}>
                {initials}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-[var(--color-foreground)]">
              {tool.name}
            </h1>
            <p className="text-lg text-[var(--color-foreground-muted)] max-w-2xl">
              {tool.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-2">
              {primaryCategory && (
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium"
                  style={{
                    backgroundColor: "var(--color-surface-raised)",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-foreground-soft)",
                  }}>
                  <span
                    className="inline-block h-2 w-2 rounded-full shrink-0"
                    style={{ backgroundColor: accentColor }}
                    aria-hidden="true"
                  />
                  {primaryCategory.name}
                </span>
              )}

              {tool.isFeatured && (
                <span
                  className="rounded px-2 py-1 text-xs font-semibold uppercase tracking-wider"
                  style={{
                    backgroundColor: "var(--color-signal-muted)",
                    color: "var(--color-signal)",
                  }}>
                  Featured
                </span>
              )}
            </div>
          </div>
        </header>

        {/* Action Buttons */}
        <div
          className="flex flex-wrap items-center gap-4 border-b pb-8"
          style={{ borderColor: "var(--color-border)" }}>
          <a
            href={tool.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg px-6 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            style={{
              backgroundColor: "var(--color-foreground)",
              color: "var(--color-background)",
            }}>
            Visit Website
            <ExternalLink className="h-4 w-4" />
          </a>

          {tool.docsUrl && (
            <a
              href={tool.docsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-6 py-2.5 text-sm font-medium transition-colors border"
              style={{
                backgroundColor: "var(--color-surface)",
                borderColor: "var(--color-border-strong)",
                color: "var(--color-foreground-soft)",
              }}>
              Documentation
            </a>
          )}
          <CompareSelectButton
            tool={{ id: tool.id, slug: tool.slug, name: tool.name }}
            variant="detail"
          />
        </div>

        {/* Description Section */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-[var(--color-foreground)]">
            About {tool.name}
          </h2>
          <div className="text-[var(--color-foreground-muted)] whitespace-pre-wrap leading-relaxed">
            {tool.description}
          </div>
        </section>

        {/* Screenshots */}
        {tool.screenshots.length > 0 && (
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-[var(--color-foreground)]">
              Gallery
            </h2>
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
              {tool.screenshots.map((img) => (
                <div
                  key={img.id}
                  className="snap-start shrink-0 rounded-xl overflow-hidden border"
                  style={{
                    borderColor: "var(--color-border)",
                    minWidth: "300px",
                    maxWidth: "600px",
                  }}>
                  <Image
                    src={img.imageUrl}
                    alt={img.altText}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    unoptimized={img.imageUrl.startsWith("https://placehold")}
                  />
                  {img.caption && (
                    <div className="p-3 text-sm bg-[var(--color-surface-raised)] text-[var(--color-foreground-muted)]">
                      {img.caption}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Capabilities & Use Cases */}
        <div className="grid sm:grid-cols-2 gap-8">
          {tool.capabilities.length > 0 && (
            <section className="flex flex-col gap-4">
              <h2 className="text-xl font-semibold text-[var(--color-foreground)]">
                Capabilities
              </h2>
              <ul className="flex flex-col gap-3">
                {tool.capabilities.map((cap) => (
                  <li
                    key={cap.id}
                    className="flex gap-3 text-sm text-[var(--color-foreground-soft)]">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--color-accent)]" />
                    <div className="flex flex-col">
                      <span className="font-medium">{cap.title}</span>
                      {cap.summary && (
                        <span className="text-[var(--color-foreground-faint)] mt-0.5">
                          {cap.summary}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {tool.useCases.length > 0 && (
            <section className="flex flex-col gap-4">
              <h2 className="text-xl font-semibold text-[var(--color-foreground)]">
                Use Cases
              </h2>
              <ul className="flex flex-col gap-3">
                {tool.useCases.map((uc) => (
                  <li
                    key={uc.id}
                    className="flex gap-3 text-sm text-[var(--color-foreground-soft)]">
                    <MonitorSmartphone className="h-5 w-5 shrink-0 text-[var(--color-accent)]" />
                    <div className="flex flex-col">
                      <span className="font-medium">{uc.title}</span>
                      {uc.summary && (
                        <span className="text-[var(--color-foreground-faint)] mt-0.5">
                          {uc.summary}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>

      {/* Sidebar - Meta details */}
      <aside className="w-full lg:w-80 shrink-0 flex flex-col gap-6">
        <div
          className="rounded-2xl p-6 border flex flex-col gap-6"
          style={{
            backgroundColor: "var(--color-surface)",
            borderColor: "var(--color-border)",
          }}>
          {/* Pricing */}
          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-foreground-faint)]">
              Pricing Model
            </span>
            <div className="flex items-center gap-2 text-[var(--color-foreground)] font-medium">
              {PRICING_LABELS[tool.pricingModel]}
            </div>
            {tool.pricingNote && (
              <span className="text-sm text-[var(--color-foreground-muted)]">
                {tool.pricingNote}
              </span>
            )}
          </div>

          <hr style={{ borderColor: "var(--color-border-strong)" }} />

          {/* Details */}
          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-foreground-faint)]">
              Company
            </span>
            <span className="text-sm text-[var(--color-foreground-soft)]">
              {tool.companyUrl ? (
                <a
                  href={tool.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-[var(--color-accent-hover)]">
                  {tool.companyName}
                </a>
              ) : (
                tool.companyName
              )}
            </span>
            {tool.companyLocation && (
              <span className="text-sm text-[var(--color-foreground-muted)]">
                {tool.companyLocation}
              </span>
            )}
          </div>

          <hr style={{ borderColor: "var(--color-border-strong)" }} />

          {/* Platforms */}
          {tool.platforms.length > 0 && (
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-foreground-faint)]">
                Platforms
              </span>
              <div className="flex flex-wrap gap-2">
                {tool.platforms.map((p) => (
                  <span
                    key={p.slug}
                    className="rounded px-2 py-1 text-xs font-medium bg-[var(--color-surface-active)] text-[var(--color-foreground-muted)]">
                    {p.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          <hr style={{ borderColor: "var(--color-border-strong)" }} />

          {/* Dates */}
          <div className="flex flex-col gap-3">
            {tool.launchDate && (
              <div className="flex justify-between items-center text-sm">
                <span className="text-[var(--color-foreground-muted)]">
                  Launched
                </span>
                <span className="text-[var(--color-foreground-soft)] font-medium tabular-nums">
                  {formatDate(tool.launchDate)}
                </span>
              </div>
            )}
            {tool.publishedAt && (
              <div className="flex justify-between items-center text-sm">
                <span className="text-[var(--color-foreground-muted)]">
                  Added
                </span>
                <span className="text-[var(--color-foreground-soft)] font-medium tabular-nums">
                  {formatDate(tool.publishedAt)}
                </span>
              </div>
            )}
          </div>
        </div>
      </aside>
    </article>
  );
}
