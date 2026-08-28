# Architecture Context

## Stack

| Layer | Technology | Role |
| --- | --- | --- |
| Framework | Next.js 16 App Router + React 19 | Server-first routes, rendering, metadata, deployment |
| Language | TypeScript 5 strict mode | Domain and boundary safety |
| UI | Tailwind CSS 4 + semantic CSS tokens | Responsive AI Orbit-inspired interface |
| Backend | Server Components + focused Route Handlers | Read models and only necessary JSON endpoints |
| Database | PostgreSQL | Canonical tool, taxonomy, and editorial data |
| ORM | Prisma 7 + `@prisma/adapter-pg` | Schema, migrations, seeds, typed server queries |
| Hosting | Vercel | Preview and production runtime |
| Managed data | Neon via Vercel Marketplace | Pooled runtime and direct migration connections |
| Auth | None | Public read-only module |

## System Boundaries

- `app/` — routes, layouts, metadata, and route states.
- `components/` — reusable presentation and narrow interactive client boundaries.
- `lib/data/` — server-only Prisma queries and read-model mapping.
- `lib/domain/` — shared types, input parsing, and pure helpers.
- `lib/prisma.ts` — single application Prisma client/adapter lifecycle.
- `prisma/` — canonical schema, immutable migrations, and rerunnable seed.
- `public/` — licensed/local optimized media.
- `context/` — authoritative product and engineering specifications.

## Routes and Rendering

- `/` enters or redirects to `/tools`.
- `/tools` awaits `searchParams`, parses them, and queries a paginated read model.
- `/tools/[slug]`, `/news`, and `/news/[slug]` are server-first; missing/unpublished records use `notFound()`.
- Only search, filters, drawers, view controls, and menus requiring browser state are Client Components.
- Query strings are canonical for search, filters, sort, view, and page.

## Storage Model

- **PostgreSQL:** tools, taxonomies, ordered detail content, articles, publication state, and relationships.
- **Seed source:** deterministic showcase records in the repository.
- **Static media:** local assets; remote hosts require an explicit Next.js allowlist.
- **Environment:** credentials supplied locally/Vercel and never committed.

## Data Model

- `Tool`: identity, editorial copy, company, URLs, pricing, publication flags, popularity, timestamps.
- `Category` and `Platform`: reusable slugged taxonomies.
- `ToolCategory` and `ToolPlatform`: explicit many-to-many joins.
- `ToolCapability`, `ToolUseCase`, `ToolScreenshot`: ordered tool detail content.
- `NewsArticle`: attributed editorial story, body, topic, and publication state.
- `NewsArticleTool`: article-to-tool relationship.

## Connection and Deployment

- `DATABASE_URL`: pooled runtime/seed connection.
- `DIRECT_URL`: non-pooled Prisma CLI migration connection.
- Vercel no longer offers first-party Vercel Postgres; attach Neon through Marketplace and map its credentials.
- Use separate preview/production database branches where possible.
- Run `prisma migrate deploy` explicitly during release; never during requests.
- Run `prisma db seed` explicitly, not on every Vercel build.

## Invariants

1. Prisma and credentials remain server-only; clients receive serializable read models.
2. Public queries exclude unpublished tools and articles.
3. Slugs are unique/stable and external URLs use HTTPS.
4. URL input is parsed against allowlists before querying.
5. Collections are paginated/deterministic and avoid unbounded relations.
6. Owned child/join records cascade safely and cannot outlive owners.
7. Applied migrations are never edited.
8. Stable seed keys make repeated seeding idempotent.