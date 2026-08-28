# Progress Tracker

## Current Phase

- Phase 1 — specification and persistence foundation in progress.

## Current Goal

- Finalize context, add Prisma/PostgreSQL tables, and seed deterministic showcase tool/news data.

## Completed

- Audited the Next.js 16.3.3, React 19.2.8, strict TypeScript, and Tailwind 4 starter.
- Audited AI Orbit's production stylesheet and specified the dark/purple/amber visual direction.
- Limited scope to public tools listing/details, ecosystem news, and supporting states.
- Selected Vercel + Neon Marketplace with pooled runtime and direct migration URLs.
- Populated the product, UI, architecture, standards, theme, and workflow context.
- Prisma 7 setup, normalized schema, and initial migration (seed pending user action).

## In Progress

1. Shared theme, root metadata, header, and footer.

## Next Up

1. Shared theme, root metadata, header, and footer.
2. Server-side data access/read models.
3. Tools listing with URL-driven controls.
4. Tool details and related content.
5. News listing/details.
6. Full states, responsive/accessibility, and deployment verification.

## Open Questions

- May real third-party logos be stored locally? Use neutral generated marks until licensing is clear.
- Should news contain full original editorial articles or local summaries linking to attributed sources?

Neither blocks the schema or original mock data.

## Architecture Decisions

- Public/read-only release; auth and mutations are out of scope.
- PostgreSQL + Prisma as required; Prisma 7 uses the `pg` driver adapter.
- Vercel hosts Next.js; Neon Marketplace supplies PostgreSQL.
- `DATABASE_URL` is pooled; `DIRECT_URL` is direct for migrations.
- Server-first database reads; narrow Client Components.
- URL owns directory state; deterministic slugs/keys make seeds rerunnable.
- Dark-only AI Orbit-inspired interface.

## Session Notes

- The app still shows the Create Next App page; UI begins after persistence.
- Context files began as untracked templates.
- Local `.env` is empty, so applying a migration/seeding requires Neon or local PostgreSQL credentials.
- Never implement unrelated AI Orbit areas, admin features, or authentication.
