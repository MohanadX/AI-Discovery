# AI Workflow Rules

## Approach

Build incrementally with a context-first vertical-slice workflow. These documents define the product boundary, UI, architecture, and current state. Resolve ambiguity here and never infer unrelated AI Orbit behavior.

## Scoping

- Implement one verifiable unit at a time.
- Limit work to tools listing/details, ecosystem news, and supporting states.
- Do not introduce auth, CMS/admin, submissions, reviews, billing, scraping, or unrelated modules.
- Split data foundation, shared shell, tools listing, details, news, and hardening into milestones.

## Before Code

1. Read relevant context and inspect existing code/package versions.
2. Read applicable bundled Next.js 16 documentation.
3. Confirm/document dependencies before adding them.
4. Record unresolved choices in `progress-tracker.md` rather than inventing behavior.

## Protected Files and Data

- Never hand-edit `node_modules`, `.next`, generated Prisma Client, or third-party internals.
- Never edit applied migrations; create new ones.
- Never commit `.env`, credentials, `.vercel`, or provider secrets.
- Preserve the assignment brief and do not copy proprietary AI Orbit copy/media.

## Verification

- Data: format/validate schema, generate Client, migrate when a database exists, seed, inspect relationships.
- UI: verify responsive, keyboard, focus, loading, empty, error, and not-found behavior.
- Code: run focused tests, lint, and build.
- Explicitly record credential-dependent checks that could not run and their follow-up command.

## Completion Gate

The unit works end-to-end, architecture invariants hold, context/progress match code, and checks pass or an external limitation is documented.