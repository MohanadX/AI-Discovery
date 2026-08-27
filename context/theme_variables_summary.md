# UI Theme Variables Reference

This document summarizes the custom Tailwind CSS v4 `@layer theme` variables extracted from the stylesheet, organized by component type, UI layer, and color space.

---

## 1. Core Application UI Colors (Dark Theme)

These custom CSS properties define the primary surface, text, border, and action colors across the main application.

| Variable | HEX / Computed Value | Visual Role & Description |
| :--- | :--- | :--- |
| `--color-background` | `#000000` | Pure black base background |
| `--color-surface` | `#131316` | Main container and card surface color |
| `--color-surface-raised` | `#18181c` | Elevated card, modal, or dropdown surface |
| `--color-border` | `#232326` | Component dividers and element subtle borders |
| `--color-foreground` | `#ffffff` | Primary text and high-contrast element fill |
| `--color-foreground-muted` | `#a1a1aa` | Secondary subtext, labels, and icons |
| `--color-foreground-faint` | `#71717a` | Tertiary, disabled text, and placeholders |
| `--color-accent` | `#ffffff` | Primary active accent / button background |
| `--color-accent-hover` | `#a1a1aa` | Hover state for primary actions |
| `--color-accent-muted` | `#18181c` | Subtle/ghost background accent |
| `--color-signal` | `#f5a623` | Warm amber badge/warning accent |
| `--color-signal-dim` | `#f5a62333` | Semi-transparent amber signal highlight (20% opacity) |
| `--color-success` | `#22c55e` | Success states, confirmation alerts (Green) |
| `--color-danger` | `#e5484d` | Error states, destructive actions (Red) |

---

## 2. Search Component Theme Subsystem

A dedicated design token set built specifically for search overlays, modals, and interactive search result items.

| Variable | HEX / Computed Value | Purpose & Usage |
| :--- | :--- | :--- |
| `--color-search-bg` | `#0b0b0f` | Background fill for search modal overlay |
| `--color-search-surface` | `#151519` | Default item/card background in search results |
| `--color-search-surface-hover` | `#1d1d23` | Item background when hovered |
| `--color-search-surface-active` | `#26262e` | Item background when selected/active |
| `--color-search-border` | `#26262e` | Default border for search inputs & containers |
| `--color-search-border-hover` | `#34343d` | Border color on hover focus |
| `--color-search-text-primary` | `#f5f5f7` | Main text inside search modal |
| `--color-search-text-secondary` | `#9a9aa5` | Subtitles, metadata, and shortcuts |
| `--color-search-text-tertiary` | `#6b6b76` | Faint helper text / icons |
| `--color-search-accent` | `#3b82f6` | Primary action / link color inside search |
| `--color-search-accent-hover` | `#60a5fa` | Hover state for search links |
| `--color-search-accent-soft` | `#3b82f629` | Soft blue focus glow / selection highlight |
| `--color-search-highlight` | `#e6273f` | Search query text match badge background |
| `--color-search-highlight-text` | `#ffffff` | Text color on search match highlight badge |
| `--color-search-success` | `#22c55e` | Success status indicator in search |
| `--color-search-warning` | `#f59e0b` | Warning status indicator in search |
| `--color-search-danger` | `#ef4444` | Error status indicator in search |

---

## 3. Tier & Pricing Model Colors

Token definitions for membership, subscription, or feature badge pricing indicators.

| Variable | HEX Value | Tier Target |
| :--- | :--- | :--- |
| `--color-pricing-free` | `#71717a` | Free tier badge |
| `--color-pricing-freemium` | `#71717a` | Freemium plan badge |
| `--color-pricing-paid` | `#52525b` | Paid / Premium plan badge |
| `--color-pricing-trial` | `#3f3f46` | Trial indicator badge |

---

## 4. Typography & Layout Specifications

Non-color UI variables for font stacks, line heights, border radii, and container layouts.

| Variable | Extracted Value | Description |
| :--- | :--- | :--- |
| `--font-sans` | `var(--font-geist-sans), system-ui, sans-serif` | Body & primary UI font family |
| `--font-mono` | `var(--font-geist-mono), monospace` | Code & tabular data font family |
| `--radius-card` | `20px` | Outer border radius for main cards |
| `--radius-sm` | `8px` | Small element border radius |
| `--radius-md` | `10px` | Medium input/button border radius |
| `--radius-lg` | `12px` | Large container border radius |
| `--radius-full` | `999px` | Pill / fully rounded border radius |
| `--spacing-navbar` | `68px` | Height reserved for top navigation bar |

---

## 5. Extended Palette Shades (sRGB Fallbacks & Oklab Values)

The standard Tailwind v4 palette color definitions provided in both HEX (sRGB) and wide-gamut `lab()` colors.

| Color Name | Variable | sRGB HEX | Oklab / Lab Value |
| :--- | :--- | :--- | :--- |
| **Red 300** | `--color-red-300` | `#ffa3a3` | `lab(76.5514% 36.422 15.5335)` |
| **Red 400** | `--color-red-400` | `#ff6568` | `lab(63.7053% 60.745 31.3109)` |
| **Red 500** | `--color-red-500` | `#fb2c36` | `lab(55.4814% 75.0732 48.8528)` |
| **Red 600** | `--color-red-600` | `#e40014` | `lab(48.4493% 77.4328 61.5452)` |
| **Red 900** | `--color-red-900` | `#82181a` | `lab(28.5139% 44.5539 29.0463)` |
| **Orange 300** | `--color-orange-300` | `#ffb96d` | `lab(80.8059% 21.7313 50.4455)` |
| **Orange 400** | `--color-orange-400` | `#ff8b1a` | `lab(70.0429% 42.5156 75.8207)` |
| **Orange 500** | `--color-orange-500` | `#fe6e00` | `lab(64.272% 57.1788 90.3583)` |
| **Amber 300** | `--color-amber-300` | `#ffd236` | `lab(86.4156% 6.13147 78.3961)` |
| **Amber 400** | `--color-amber-400` | `#fcbb00` | `lab(80.1641% 16.6016 99.2089)` |
| **Amber 500** | `--color-amber-500` | `#f99c00` | `lab(72.7183% 31.8672 97.9407)` |
| **Amber 600** | `--color-amber-600` | `#dd7400` | `lab(60.3514% 40.5624 87.1228)` |
| **Amber 700** | `--color-amber-700` | `#b75000` | `lab(47.2709% 42.9082 69.2966)` |
| **Yellow 300** | `--color-yellow-300` | `#ffe02a` | `lab(89.7033% -.480294 84.4917)` |
| **Yellow 500** | `--color-yellow-500` | `#edb200` | `lab(76.3898% 14.5258 98.4589)` |
| **Green 300** | `--color-green-300` | `#7bf1a8` | `lab(86.9953% -47.2691 25.0054)` |
| **Green 400** | `--color-green-400` | `#05df72` | `lab(78.503% -64.9265 39.7492)` |
| **Green 500** | `--color-green-500` | `#00c758` | `lab(70.5521% -66.5147 45.8073)` |
| **Emerald 300** | `--color-emerald-300` | `#5ee9b5` | `lab(83.9203% -48.7124 13.8849)` |
| **Emerald 400** | `--color-emerald-400` | `#00d294` | `lab(75.0771% -60.7313 19.4147)` |
| **Emerald 500** | `--color-emerald-500` | `#00bb7f` | `lab(66.9756% -58.27 19.5419)` |
| **Teal 300** | `--color-teal-300` | `#46ecd5` | `lab(84.8977% -48.1516 -1.3321)` |
| **Teal 500** | `--color-teal-500` | `#00baa7` | `lab(67.3859% -49.0983 -2.63511)` |
| **Cyan 300** | `--color-cyan-300` | `#53eafd` | `lab(85.3886% -36.7636 -21.5716)` |
| **Cyan 500** | `--color-cyan-500` | `#00b7d7` | `lab(67.805% -35.3952 -30.2018)` |
| **Sky 300** | `--color-sky-300` | `#77d4ff` | `lab(80.3307% -20.2945 -31.385)` |
| **Sky 400** | `--color-sky-400` | `#00bcfe` | `lab(70.687% -23.6078 -45.9483)` |
| **Sky 500** | `--color-sky-500` | `#00a5ef` | `lab(63.3038% -18.433 -51.0407)` |
| **Blue 300** | `--color-blue-300` | `#90c5ff` | `lab(77.5052% -6.4629 -36.42)` |
| **Blue 400** | `--color-blue-400` | `#54a2ff` | `lab(65.0361% -1.42065 -56.9802)` |
| **Blue 500** | `--color-blue-500` | `#3080ff` | `lab(54.1736% 13.3369 -74.6839)` |
| **Indigo 300** | `--color-indigo-300` | `#a4b3ff` | `lab(74.0235% 8.54138 -41.6075)` |
| **Indigo 500** | `--color-indigo-500` | `#625fff` | `lab(48.295% 38.3129 -81.9673)` |
| **Violet 300** | `--color-violet-300` | `#c4b4ff` | `lab(76.7419% 18.3911 -37.0706)` |
| **Violet 500** | `--color-violet-500` | `#8d54ff` | `lab(49.9355% 55.1776 -81.8963)` |
| **Violet 600** | `--color-violet-600` | `#7f22fe` | `lab(41.088% 68.9966 -91.995)` |
| **Violet 700** | `--color-violet-700` | `#7008e7` | `lab(35.2783% 67.9912 -88.793)` |
| **Violet 900** | `--color-violet-900` | `#4d179a` | `lab(24.3783% 45.7525 -61.4902)` |
| **Purple 300** | `--color-purple-300` | `#d9b3ff` | `lab(78.3298% 26.2195 -34.9499)` |
| **Purple 500** | `--color-purple-500` | `#ac4bff` | `lab(52.0183% 66.11 -78.2316)` |
| **Fuchsia 300** | `--color-fuchsia-300` | `#f2a9ff` | `lab(78.5378% 39.3533 -32.9615)` |
| **Fuchsia 500** | `--color-fuchsia-500` | `#e12afb` | `lab(56.4256% 83.132 -64.639)` |
| **Pink 300** | `--color-pink-300` | `#fda5d5` | `lab(77.8308% 38.525 -10.5394)` |
| **Pink 500** | `--color-pink-500` | `#f6339a` | `lab(56.9303% 76.8162 -8.07021)` |
| **Rose 300** | `--color-rose-300` | `#ffa2ae` | `lab(76.6339% 38.3549 9.68835)` |
| **Rose 400** | `--color-rose-400` | `#ff667f` | `lab(64.4125% 63.0291 19.2068)` |
| **Rose 500** | `--color-rose-500` | `#ff2357` | `lab(56.101% 79.4328 31.4532)` |
| **Slate 200** | `--color-slate-200` | `#e2e8f0` | `lab(91.7353% -.998765 -4.76968)` |
| **Slate 400** | `--color-slate-400` | `#90a1b9` | `lab(65.5349% -2.25151 -14.5072)` |
| **Gray 200** | `--color-gray-200` | `#e5e7eb` | `lab(91.6229% -.159115 -2.26791)` |
| **Gray 300** | `--color-gray-300` | `#d1d5dc` | `lab(85.1236% -.612259 -3.7138)` |
| **Gray 400** | `--color-gray-400` | `#99a1af` | `lab(65.9269% -.832707 -8.17473)` |
| **Gray 500** | `--color-gray-500` | `#6a7282` | `lab(47.7841% -.393182 -10.0268)` |
| **Neutral 200** | `--color-neutral-200` | `#e5e5e5` | `lab(90.952% 0 -.0000119209)` |
| **Neutral 300** | `--color-neutral-300` | `#d4d4d4` | `lab(84.92% 0 -.0000119209)` |
| **Neutral 400** | `--color-neutral-400` | `#a1a1a1` | `lab(66.128% -.0000298023 .0000119209)` |
| **Neutral 500** | `--color-neutral-500` | `#737373` | `lab(48.496% 0 0)` |
| **Neutral 600** | `--color-neutral-600` | `#525252` | `lab(34.924% 0 0)` |
| **Neutral 700** | `--color-neutral-700` | `#404040` | `lab(27.036% 0 0)` |
| **Neutral 800** | `--color-neutral-800` | `#262626` | `lab(15.204% 0 -.00000596046)` |
| **Neutral 900** | `--color-neutral-900` | `#171717` | `lab(7.78201% -.0000149012 0)` |
| **Neutral 950** | `--color-neutral-950` | `#0a0a0a` | `lab(2.75381% 0 0)` |
