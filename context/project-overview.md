# AI Discovery

## Overview

AI Discovery is a public, editorial directory for people evaluating artificial intelligence products. Visitors can find tools through search and structured filters, evaluate each product on a complete detail page, and follow ecosystem news connected to those tools. It is a production-ready module inspired by AI Orbit's dark, premium visual language without copying proprietary content.

## Source Assignment Brief

Design one complete module end-to-end, including its listing page, detail page, relevant screens, states, and interactions. AI Orbit is the primary visual reference: black/dark background, white text, the same overall color direction, clean minimal presentation, consistent typography, spacing, borders, cards, and purposeful grid or list layouts. Minor refinements are allowed, but the visual identity must not be reinvented.

Mandatory stack: Next.js, React, TypeScript, Tailwind CSS, Node.js, PostgreSQL, and Prisma ORM. Vercel and a Vercel Marketplace PostgreSQL provider are the deployment target.

## Goals

1. Let visitors locate tools by keyword, category, pricing model, and platform.
2. Give every tool enough structured detail to support an informed visit to its official website.
3. Connect curated ecosystem news to relevant tools in a consistent, accessible module.
4. Demonstrate a normalized PostgreSQL model and deterministic showcase dataset.

## Core User Flow

1. A visitor opens the tools directory.
2. They search, filter, sort, or change view; the URL records this state.
3. They open a tool and review its capabilities, pricing, platforms, company, related tools, and news.
4. They visit its website or return to the preserved directory state.
5. They can browse news, filter by topic, open a story, and follow related tools.

## Features

### AI Tools Directory

- Search name, company, tagline, description, and use cases.
- Filter by category, pricing model, platform, and featured status.
- Sort by relevance, popularity, newest, or name.
- Responsive grid/list views, URL-driven state, pagination, loading, no-results, error, and reset states.

### Tool Details

- Logo, name, tagline, description, official website, launch date, and company metadata.
- Categories, pricing, platforms, capabilities, use cases, screenshots, and editorial status.
- Related tools/news, metadata, unknown-slug handling, and accessible external links.

### AI Ecosystem News

- Featured story, chronological feed, and topic filtering.
- Source, author, publication date, reading time, article content, related tools/stories.
- Loading, empty, error, and unknown-slug states.

## Scope

### In Scope

- `/tools`, `/tools/[slug]`, `/news`, and `/news/[slug]`.
- Shared responsive shell and complete relevant interaction states.
- PostgreSQL schema, Prisma data layer, migrations, and deterministic showcase data.
- Vercel deployment readiness with the Neon Marketplace integration.
- Accessibility, responsive behavior, metadata, and production verification.

### Out of Scope

- Authentication, accounts, saved tools, reviews, comments, and personalization.
- Admin/CMS, submissions, owner claims, moderation, payments, ads, and analytics dashboards.
- Automated scraping/news ingestion, recommendation ML, and unrelated AI Orbit modules.
- Native applications, extensions, and running third-party tools inside this product.

## Success Criteria

1. The seeded database contains published tools, taxonomies, articles, and valid relationships.
2. Visitors can combine filters, share the resulting URL, and reset the directory.
3. Every seeded record has a working detail route; unknown slugs return not found.
4. Related tools/news are loaded without client-side database access.
5. The module is responsive, keyboard accessible, and has visible focus.
6. Prisma validation, lint, and `npm run build` pass before deployment.