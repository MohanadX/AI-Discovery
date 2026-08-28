# AI Orbit Theme Research and Approved Tokens

## Purpose and Evidence

This file turns values extracted from AI Orbit's live production stylesheet into a small implementation set. `ui-context.md` defines behavior; the approved tokens here define color. Research date: 2026-08-27. Reference: `https://aiorbit.club/_next/static/chunks/0399o-c8mam6u.css`.

The bundle has early variables and later cascade overrides. White is foreground/neutral action, while purple is the repeated interaction brand: `#6e56cf` appears extensively and the later semantic accent is `#7c5cfc` with pressed `#5b41c9` and muted `#7c5cfc26`.

## Approved Project Tokens

```css
:root {
  color-scheme: dark;
  --color-background: #000000;
  --color-background-subtle: #0d0d10;
  --color-surface: #131316;
  --color-surface-raised: #18181c;
  --color-surface-hover: #1d1d23;
  --color-surface-active: #26262e;
  --color-border: #232326;
  --color-border-strong: #3a3a3e;
  --color-foreground: #ffffff;
  --color-foreground-soft: #e4e4e7;
  --color-foreground-muted: #a1a1aa;
  --color-foreground-faint: #71717a;
  --color-accent: #7c5cfc;
  --color-accent-hover: #8a73ea;
  --color-accent-pressed: #5b41c9;
  --color-accent-muted: #7c5cfc26;
  --color-accent-reference: #6e56cf;
  --color-signal: #f5a623;
  --color-signal-muted: #f5a62333;
  --color-info: #1a6bff;
  --color-highlight: #2dd4bf;
  --color-success: #22c55e;
  --color-danger: #e5484d;
  --color-overlay: #000000cc;
  --shadow-floating: 0 1px 2px #00000059, 0 8px 24px #00000040;
  --shadow-accent: 0 0 20px #7878ff26;
}
```

## Verified Reference Roles

| Values | Observed role |
| --- | --- |
| `#000000`, `#0d0d10` | Base/alternate backgrounds |
| `#131316`, `#18181c` | Dominant/raised surfaces |
| `#232326`, `#3a3a3e` | Subtle/interactive borders |
| `#ffffff`, `#e4e4e7`, `#a1a1aa`, `#71717a` | Primary through faint text hierarchy |
| `#6e56cf`, `#7c5cfc`, `#5b41c9`, `#8a73ea` | Purple reference, accent, pressed, gradient |
| `#f5a623`, `#f5b400` | Signal/collection gold |
| `#1a6bff`, `#2dd4bf`, `#22c55e`, `#e5484d` | Info, highlight, success, danger |

## Search Mapping

Reference search colors (`#0b0b0f`, `#151519`, `#1d1d23`, `#26262e`, `#f5f5f7`, `#9a9aa5`) map to the shared background/surface/foreground hierarchy instead of creating a competing subsystem.

## Usage Rules

1. Define values once in `app/globals.css` and expose them through Tailwind 4 `@theme inline`.
2. Components consume semantic roles, never raw palette colors or hardcoded brand hex.
3. Purple means action, focus, active filter, or selection; amber means editorial signal.
4. Categories may use restrained purple/blue/teal/amber/green dots, but large surfaces remain neutral.
5. Pricing uses text/icons first and can never rely on color alone.
6. Shadows are sparse; layered surfaces and borders provide separation.
7. Update this file and `ui-context.md` together when tokens change.