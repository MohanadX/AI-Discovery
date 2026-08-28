# Code Standards

## General and TypeScript

- Keep modules cohesive; fix root causes and avoid speculative abstractions/dependencies.
- Strict TypeScript is required. Never use `any`; narrow `unknown` at boundaries.
- Validate URL parameters, environment variables, and request input.
- Do not expose generated Prisma payloads as UI contracts; map deliberate read models.
- Use `import type` for type-only imports.

## Next.js 16 and React 19

- Read relevant `node_modules/next/dist/docs/` guidance before changing a Next.js API.
- Pages/layouts are Server Components by default; keep `"use client"` boundaries narrow.
- Never import Prisma/data modules into client code.
- Await promised `params` and `searchParams`.
- Use Next.js Link, Image, Font, Metadata, loading/error conventions, and `notFound()` appropriately.
- Canonical directory state belongs in the URL, not a global store.

## Styling and Accessibility

- Use semantic tokens from `ui-context.md`; no brand hex values in component classes.
- Arbitrary values are only for documented layout measurements, not colors.
- Use semantic HTML, labels, headings, alt text, visible focus, keyboard controls, and reduced-motion support.
- Do not communicate state by color alone.

## Data and Prisma

- Access Prisma through `lib/prisma.ts` and query functions under `lib/data/`.
- Select only needed fields/relations and paginate collections.
- Use migrations, not `db push`, in production workflows.
- Seeds must be deterministic, rerunnable, and close Prisma plus the driver pool.
- Never log credentials or connection strings.
- Do not create an API when a Server Component can query the server data layer directly.

## File Organization

- `app/`: route entry points/states.
- `components/ui/`: primitives without domain queries.
- `components/tools/`, `components/news/`: domain UI.
- `lib/data/`: server-only queries/read models.
- `lib/domain/`: pure types, constants, parsers.
- `prisma/`: schema, migrations, seed.

## Verification

- Run `prisma format`, `prisma validate`, client generation, and seed inspection after data changes.
- Run focused tests, `npm run lint`, and `npm run build` for each completed slice.