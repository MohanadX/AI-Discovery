"use client";

import { CATEGORY_ACCENTS } from "@/lib/domain/tools";
import type { NewsListItem } from "@/lib/domain/news";
import { formatDate } from "@/lib/utils";
import { ExternalLink, Clock } from "lucide-react";

export function NewsRow({ article }: { article: NewsListItem }) {
  const accentColor = article.category?.accent
    ? (CATEGORY_ACCENTS[article.category.accent] ?? "var(--color-foreground-faint)")
    : "var(--color-foreground-faint)";

  return (
    <article 
      className="group flex flex-col overflow-hidden rounded-xl border transition-colors relative"
      style={{
        backgroundColor: "var(--color-surface)",
        borderColor: "var(--color-border)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor = "var(--color-surface-hover)";
        (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border-strong)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor = "var(--color-surface)";
        (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)";
      }}
    >
      <div className="flex flex-col flex-1 p-5 gap-4">
        
        {/* Meta / Header */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {article.category ? (
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
                {article.category.name}
              </span>
            ) : (
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium"
                style={{
                  backgroundColor: "var(--color-surface-raised)",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-foreground-soft)",
                }}>
                {article.topic}
              </span>
            )}

            {article.isFeatured && (
              <span
                className="rounded px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
                style={{
                  backgroundColor: "var(--color-signal-muted)",
                  color: "var(--color-signal)",
                }}>
                Featured
              </span>
            )}
          </div>
          
          <time
            dateTime={article.publishedAt ? new Date(article.publishedAt).toISOString() : undefined}
            className="text-xs tabular-nums"
            style={{ color: "var(--color-foreground-faint)" }}>
            {formatDate(article.publishedAt)}
          </time>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-2">
          <h2 
            className="text-lg font-semibold leading-tight line-clamp-2"
            style={{ color: "var(--color-foreground)" }}
          >
            {article.title}
          </h2>
          <p 
            className="text-sm leading-relaxed line-clamp-3"
            style={{ color: "var(--color-foreground-muted)" }}
          >
            {article.excerpt}
          </p>
        </div>

        {/* Footer */}
        <div className="mt-auto pt-4 flex items-center justify-between border-t" style={{ borderColor: "var(--color-border)" }}>
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium" style={{ color: "var(--color-foreground-soft)" }}>
              {article.sourceName}
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-xs" style={{ color: "var(--color-foreground-faint)" }}>
              <Clock className="w-3 h-3" />
              {article.readingMinutes} min
            </span>

            {article.sourceUrl && (
              <a
                href={article.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors hover:text-[var(--color-foreground)] before:absolute before:inset-0"
                style={{ color: "var(--color-foreground-muted)" }}
                aria-label={`Read full article on ${article.sourceName}`}
              >
                <span className="sr-only">Read More</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
