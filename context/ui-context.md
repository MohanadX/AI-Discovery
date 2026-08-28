# UI Context

## Theme

Dark-only, clean, and premium, closely following AI Orbit's direction. Pure black frames layered near-black surfaces; white establishes hierarchy; restrained purple identifies interaction/selection; amber marks editorial signals. The interface is discovery-dense but never ornamental or dashboard-like.

## Semantic Colors

| Role | CSS variable | Value |
| --- | --- | --- |
| Background | `--color-background` | `#000000` |
| Subtle background | `--color-background-subtle` | `#0d0d10` |
| Surface / raised | `--color-surface` / `--color-surface-raised` | `#131316` / `#18181c` |
| Hover / active | `--color-surface-hover` / `--color-surface-active` | `#1d1d23` / `#26262e` |
| Border / strong | `--color-border` / `--color-border-strong` | `#232326` / `#3a3a3e` |
| Foreground / soft | `--color-foreground` / `--color-foreground-soft` | `#ffffff` / `#e4e4e7` |
| Muted / faint | `--color-foreground-muted` / `--color-foreground-faint` | `#a1a1aa` / `#71717a` |
| Accent / hover / pressed | `--color-accent` / `--color-accent-hover` / `--color-accent-pressed` | `#7c5cfc` / `#8a73ea` / `#5b41c9` |
| Muted accent | `--color-accent-muted` | `#7c5cfc26` |
| Signal / muted | `--color-signal` / `--color-signal-muted` | `#f5a623` / `#f5a62333` |
| Info / highlight | `--color-info` / `--color-highlight` | `#1a6bff` / `#2dd4bf` |
| Success / danger | `--color-success` / `--color-danger` | `#22c55e` / `#e5484d` |
| Overlay | `--color-overlay` | `#000000cc` |

White is foreground/high-contrast neutral; purple is the brand interaction accent. Amber is reserved for featured/new/editorial signals.

## Typography

- UI/editorial: Geist Sans (`--font-geist-sans`, `--font-sans`).
- Technical metadata: Geist Mono (`--font-geist-mono`, `--font-mono`).
- Body 14–16px at 1.5–1.7; metadata 12–14px; card titles 16–18px; sections 24–32px; page title responsive 36–56px.
- Use restrained weights and tight title tracking; avoid oversized marketing type in result-dense areas.

## Shape and Elevation

- Tags/icon buttons: `rounded-lg`; inputs/buttons: 0.625rem; cards: `rounded-xl`; dialogs/drawers: `rounded-2xl`; pills only for chips/statuses.
- Default 1px border; hover uses stronger border and at most 1px lift.
- Floating shadow: `0 1px 2px #00000059, 0 8px 24px #00000040`.
- Focus: visible 2px purple ring with background offset. Accent glows remain subtle and rare.

## Layout Patterns

- Sticky translucent black top navigation with restrained blur/bottom border.
- Content width 1200–1280px; gutters 16px mobile, 24px tablet, 32px desktop.
- Tools: intro, search/control row, desktop filters, result/sort/view controls, then 1/2/3-column grid or structured list.
- Mobile filters use an accessible drawer; active filters become removable chips.
- Tool details use breadcrumb, identity/actions, editorial main column, and sticky metadata sidebar on wide screens.
- News uses one featured article plus consistent editorial grid/list, never masonry.
- Article body measure is 680–760px with related content adjacent/below.

## Behavior and Accessibility

- Tool cards show logo, name, tagline, category, pricing, platform hints, and featured status without crowding.
- Search has an accessible name and clear action; selected filters use tint plus check/count.
- Skeletons match final geometry; empty states explain and offer reset.
- External links disclose destination and use safe `rel` values.
- Motion is 150–200ms and respects reduced-motion.
- Support 320px width, 44px touch targets, logical keyboard order, focus management, WCAG AA contrast, and non-color state indicators.
- Use one consistent stroke icon family: 16px inline, 20px controls, 24px standalone.