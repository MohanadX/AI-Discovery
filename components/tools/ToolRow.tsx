"use client";
import Link from "next/link";
import Image from "next/image";
import type { ToolListItem } from "@/lib/domain/tools";
import { PRICING_LABELS, CATEGORY_ACCENTS } from "@/lib/domain/tools";
import { formatDate } from "@/lib/utils";

const PRICING_COLORS: Record<ToolListItem["pricingModel"], string> = {
  FREE: "var(--color-success)",
  FREEMIUM: "var(--color-highlight)",
  PAID: "var(--color-foreground-muted)",
  FREE_TRIAL: "var(--color-info)",
  CONTACT: "var(--color-signal)",
};

export function ToolRow({ tool }: { tool: ToolListItem }) {
  const primaryCategory = tool.categories[0] ?? null;
  const accentColor = primaryCategory?.accent
    ? (CATEGORY_ACCENTS[primaryCategory.accent] ??
      "var(--color-foreground-faint)")
    : "var(--color-foreground-faint)";

  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="group flex items-center gap-4 border-b px-4 py-3.5 transition-colors"
      style={{
        borderColor: "var(--color-border)",
        textDecoration: "none",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
          "var(--color-surface-hover)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
          "transparent";
      }}>
      {/* Logo */}
      <div
        className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border"
        style={{
          backgroundColor: "var(--color-surface-raised)",
          borderColor: "var(--color-border)",
        }}>
        {tool.logoUrl ? (
          <Image
            src={tool.logoUrl}
            alt={`${tool.name} logo`}
            width={40}
            height={40}
            className="object-contain"
            unoptimized={tool.logoUrl.startsWith("https://placehold")}
          />
        ) : (
          <span
            className="text-xs font-semibold"
            style={{ color: "var(--color-foreground-muted)" }}>
            {tool.name.slice(0, 2).toUpperCase()}
          </span>
        )}
      </div>

      {/* Name + tagline — flexible width */}
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-center gap-2">
          <span
            className="truncate text-sm font-medium"
            style={{ color: "var(--color-foreground)" }}>
            {tool.name}
          </span>
          {tool.isFeatured && (
            <span
              className="hidden shrink-0 rounded px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider sm:inline-block"
              style={{
                backgroundColor: "var(--color-signal-muted)",
                color: "var(--color-signal)",
              }}>
              Featured
            </span>
          )}
        </div>
        <span
          className="truncate text-xs"
          style={{ color: "var(--color-foreground-muted)" }}>
          {tool.tagline}
        </span>
      </div>

      {/* Category */}
      <div className="hidden w-28 shrink-0 sm:block">
        {primaryCategory ? (
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium"
            style={{
              backgroundColor: "var(--color-surface-raised)",
              border: "1px solid var(--color-border)",
              color: "var(--color-foreground-soft)",
            }}>
            <span
              className="inline-block h-1.5 w-1.5 rounded-full shrink-0"
              style={{ backgroundColor: accentColor }}
              aria-hidden="true"
            />
            {primaryCategory.name}
          </span>
        ) : (
          <span style={{ color: "var(--color-foreground-faint)" }}>—</span>
        )}
      </div>

      {/* Pricing */}
      <div className="hidden w-24 shrink-0 lg:block">
        <span
          className="inline-flex items-center gap-1.5 text-xs font-medium"
          style={{ color: PRICING_COLORS[tool.pricingModel] }}>
          <span
            className="h-1.5 w-1.5 rounded-full shrink-0"
            style={{ backgroundColor: PRICING_COLORS[tool.pricingModel] }}
            aria-hidden="true"
          />
          {PRICING_LABELS[tool.pricingModel]}
        </span>
      </div>

      {/* Platforms */}
      <div className="hidden w-28 shrink-0 xl:flex items-center gap-1">
        {tool.platforms.slice(0, 3).map((p) => (
          <span
            key={p.slug}
            className="rounded px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide"
            style={{
              backgroundColor: "var(--color-surface-active)",
              color: "var(--color-foreground-muted)",
            }}>
            {p.slug === "api" ? "API" : p.name.slice(0, 3)}
          </span>
        ))}
        {tool.platforms.length > 3 && (
          <span
            className="text-[10px]"
            style={{ color: "var(--color-foreground-faint)" }}>
            +{tool.platforms.length - 3}
          </span>
        )}
      </div>

      {/* Published date */}
      <div className="hidden w-28 shrink-0 text-right lg:block">
        <time
          dateTime={
            tool.publishedAt
              ? new Date(tool.publishedAt).toISOString()
              : undefined
          }
          className="text-xs tabular-nums"
          style={{ color: "var(--color-foreground-faint)" }}>
          {formatDate(tool.publishedAt)}
        </time>
      </div>
    </Link>
  );
}
