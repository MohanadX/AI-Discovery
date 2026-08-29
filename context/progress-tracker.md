# Progress Tracker

## Current Phase

- Phase 2 — UI and data layer complete; first module (tools listing) implemented.

## Current Goal

- Tool detail page (`/tools/[slug]`).

## Completed

- Audited the Next.js 16.3.3, React 19.2.8, strict TypeScript, and Tailwind 4 starter.
- Audited AI Orbit's production stylesheet and specified the dark/purple/amber visual direction.
- Limited scope to public tools listing/details, ecosystem news, and supporting states.
- Selected Vercel + Neon Marketplace with pooled runtime and direct migration URLs.
- Populated the product, UI, architecture, standards, theme, and workflow context.
- Prisma 7 setup, normalized schema, and initial migration with deterministic mock data seed.
- **`app/globals.css`** — full dark design token system (semantic CSS vars + Tailwind 4 `@theme inline`).
- **`lib/domain/tools.ts`** — `ToolListItem`, `ToolsFilter` (with `tab` field), `parseToolsFilter`, display helpers.
- **`lib/data/tools.ts`** — server-only `getToolsList` (paginated, filtered) + `getCategories`; Prisma read-model mapping.
- **`app/api/tools/route.ts`** — JSON route handler powering React Query.
- **`components/providers/QueryProvider.tsx`** — React Query `QueryClientProvider` client boundary.
- **`components/layout/SiteHeader.tsx`** — sticky translucent nav with logo and links.
- **`components/layout/SiteFooter.tsx`** — minimal dark footer.
- **`app/layout.tsx`** — updated root layout: SEO metadata, `QueryProvider`, `SiteHeader`, `SiteFooter`.
- **`app/page.tsx`** — root redirects to `/tools`.
- **`app/tools/page.tsx`** — async server page: awaits searchParams, parallel data fetch, passes initial data to `ToolsPage`.
- **`app/tools/loading.tsx`** — geometry-matched skeleton for the full list layout.
- **`app/tools/error.tsx`** — client error boundary with retry.
- **`components/tools/ToolsPage.tsx`** — Client Component orchestrator using `useQuery` for client-side interactivity while hydrating server `initialData`; preserves pricing filter in URL, API params, and initialData comparison.
- **`components/tools/CategoryTabs.tsx`** — controlled tab bar; resets category to empty string for "all categories"; removed unused `mode` property.
- **`components/tools/ToolsControls.tsx`** — controlled debounced search input + sort dropdown; cancels pending debounce on clear.
- **`components/tools/ToolsTable.tsx`** — shared table shell with column headers and empty state.
- **`components/tools/ToolRow.tsx`** — single tool row: logo, name+tagline, category badge, pricing, platforms, date.
- **`components/tools/InfiniteToolsList.tsx`** — React Query `useInfiniteQuery` + IntersectionObserver sentinel; bootstraps only when initialData.page === 1.
- **`components/tools/ToolsPagination.tsx`** — controlled prev/next pagination.
- **`components/go-up-button.tsx`** — respects `prefers-reduced-motion`; uses defined `--color-*` CSS tokens.
- **`lib/data/tools.ts`** — server-only `getToolsList` (paginated, filtered) + `getCategories`; Prisma read-model mapping; deterministic orderBy with secondary `id` key.
- **`lib/utils.ts`** — `formatDate` uses explicit UTC timeZone for consistent SSR/client rendering.
- **`prisma/seed.ts`** — category accents use only CATEGORY_ACCENTS-supported values; logoUrl color padded to 6 hex chars; Chatbots category found by slug.
- **`next.config.ts`** — `placehold.co` added to image remote patterns.
- `server-only` package installed.
- `npx next typegen` run; types generated successfully.
- `npx tsc --noEmit` — **0 errors**.

## In Progress

- (None — tools listing complete and type-checked.)

## Next Up

1. Tool detail page — `/tools/[slug]`.
2. News listing — `/news`.
3. News detail — `/news/[slug]`.
4. Full responsive/accessibility pass and deployment verification.

## Open Questions

- May real third-party logos be stored locally? Use neutral generated marks until licensing is clear.
- Should news contain full original editorial articles or local summaries linking to attributed sources?

## Architecture Decisions

- Public/read-only release; auth and mutations are out of scope.
- PostgreSQL + Prisma as required; Prisma 7 uses the `pg` driver adapter.
- Vercel hosts Next.js; Neon Marketplace supplies PostgreSQL.
- `DATABASE_URL` is pooled; `DIRECT_URL` is direct for migrations.
- Server-first database reads; narrow Client Components.
- URL owns directory state; deterministic slugs/keys make seeds rerunnable.
- Dark-only AI Orbit-inspired interface.
- **Dual pagination modes**: "All Tools" tab uses infinite scroll via React Query `useInfiniteQuery`. All other category tabs use standard offset pagination via React Query `useQuery`.
- `ToolListItem.publishedAt` is rehydrated from ISO string to `Date` on the client after API fetch.

## Session Notes

- `server-only` was not in the initial deps; installed in Phase 2.
- `placehold.co` required explicit Next.js image remote-pattern allowlist.
- `PageProps<"/tools">` requires `next typegen`; replaced with explicit inline type for robustness.
- Never implement unrelated AI Orbit areas, admin features, or authentication.
