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
- Hardened listing filters, pagination ordering, reduced-motion behavior, date formatting, theme linting, and seed display values after review.
- **`next.config.ts`** — `placehold.co` added to image remote patterns.
- `server-only` package installed.
- `npx next typegen` run; types generated successfully.
- `npx tsc --noEmit` — **0 errors**.

- **`/tools/[id]/[slug]`** — Tool Detail page with rich description, screenshot gallery, capabilities, use cases, and sticky metadata sidebar.
- **`/news`** — News Listing page with infinite scroll using React Query `useInfiniteQuery`.
- **`lib/domain/news.ts`** & **`lib/data/news.ts`** — Domain types and Prisma data access for News.
- **`app/api/news/route.ts`** — JSON route handler powering React Query for infinite scrolling.
- Hardened news pagination, canonical tool redirects, dark theme/font wiring, footer year rendering, separator orientation styles, and Tailwind Stylelint handling after review.
- **Tool comparison feature** (Phase 4):
  - **`lib/compare-store.ts`** — `useSyncExternalStore`-compatible localStorage store (server snapshot `[]` → no hydration mismatch). Supports cross-tab sync via `window.storage` events. Max 3 tools.
  - **`components/compare/CompareContext.tsx`** — React context provider (`CompareProvider`) exposing `selected`, `toggle`, `isSelected`, `canAdd`, `clear`. Uses React 19 `<Context value={...}>` syntax.
  - **`components/compare/CompareSelectButton.tsx`** — Shared client button, `"row"` (compact pill) and `"detail"` (larger) variants. Stops event propagation so row clicks don't navigate.
  - **`components/compare/CompareBar.tsx`** — Fixed bottom bar showing selected tool chips + Link to `/tools/compare`. Appears/disappears based on selection count. Requires ≥ 2 tools to enable the Compare link.
    - Added per-tool remove buttons to selected chips so users can delete individual tools from the comparison state directly from the bar.
  - **`app/tools/layout.tsx`** — New tools layout scoping `CompareProvider` + `CompareBar` to `/tools/**` only (listing + detail, nowhere else).
  - **`components/tools/ToolRow.tsx`** — Restructured root element from `<Link>` to `<div>`. Link covers the non-button area; `CompareSelectButton` is a sibling outside the Link.
  - **`components/tools/ToolDetail.tsx`** — Stays SSR. `CompareSelectButton variant="detail"` injected as a client island with minimal `{ id, name, slug }` props.
  - **`components/tools/ToolsTable.tsx`** — Added "Compare" column header.
  - **`app/tools/compare/page.tsx`** — Compare page: static header renders immediately; dynamic `<CompareContent>` wrapped in `<Suspense>`.
  - **`components/tools/CompareContent.tsx`** — Server component fetching tools in parallel by ID, renders side-by-side grid (pricing, platforms, company, launch, capabilities, use cases, featured).
  - **`components/tools/CompareContentSkeleton.tsx`** — Animated skeleton placeholder for comparison table.
- `npx tsc --noEmit` — **0 errors** after compare feature.

## In Progress

- (None — Phase 4 Tool Comparison is complete.)

## Next Up

1. News detail — `/news/[slug]`.
2. Full responsive/accessibility pass and deployment verification.

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
