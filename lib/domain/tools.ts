/**
 * Domain types and URL-parameter parser for the /tools listing page.
 * Server-safe: no browser APIs, no Prisma imports.
 */

// ─── Read model ──────────────────────────────────────────────────────────────

export type ToolListItem = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  logoUrl: string | null;
  pricingModel: "FREE" | "FREEMIUM" | "PAID" | "FREE_TRIAL" | "CONTACT";
  isFeatured: boolean;
  publishedAt: Date | null;
  categories: { slug: string; name: string; accent: string | null }[];
  platforms: { slug: string; name: string }[];
};

// ─── Filter state ─────────────────────────────────────────────────────────────

export type SortOption = "newest" | "popular" | "name";

export type ToolsFilter = {
  q: string;
  category: string; // slug or empty string = all
  pricing: string; // PricingModel enum value or empty string = all
  sort: SortOption;
  page: number;
  /** UI-only tab identifier — drives infinite vs. offset mode. Not a DB filter. */
  tab: string;
};

// ─── Allowlists ───────────────────────────────────────────────────────────────

const ALLOWED_SORT: SortOption[] = ["newest", "popular", "name"];
const ALLOWED_PRICING = ["FREE", "FREEMIUM", "PAID", "FREE_TRIAL", "CONTACT"];

// ─── Parser ───────────────────────────────────────────────────────────────────

/**
 * Parses raw URL searchParams into a validated ToolsFilter.
 * All values are coerced to safe defaults; no raw URL input reaches Prisma.
 */
export function parseToolsFilter(
  raw: Record<string, string | string[] | undefined>,
): ToolsFilter {
  const q = typeof raw.q === "string" ? raw.q.trim().slice(0, 200) : "";

  const category =
    typeof raw.category === "string"
      ? raw.category.trim().toLowerCase().slice(0, 100)
      : "";

  const pricing =
    typeof raw.pricing === "string" &&
    ALLOWED_PRICING.includes(raw.pricing.toUpperCase())
      ? raw.pricing.toUpperCase()
      : "";

  const rawSort = typeof raw.sort === "string" ? raw.sort : "";
  const sort: SortOption = ALLOWED_SORT.includes(rawSort as SortOption)
    ? (rawSort as SortOption)
    : "newest";

  const rawPage = parseInt(typeof raw.page === "string" ? raw.page : "1", 10);
  const page = Number.isFinite(rawPage) && rawPage > 0 ? rawPage : 1;

  const tab =
    typeof raw.tab === "string" ? raw.tab.trim().toLowerCase().slice(0, 60) : "";

  return { q, category, pricing, sort, page, tab };
}

// ─── Display helpers ─────────────────────────────────────────────────────────

export const PRICING_LABELS: Record<ToolListItem["pricingModel"], string> = {
  FREE: "Free",
  FREEMIUM: "Freemium",
  PAID: "Paid",
  FREE_TRIAL: "Free Trial",
  CONTACT: "Contact",
};

export const CATEGORY_ACCENTS: Record<string, string> = {
  blue: "var(--color-info)",
  purple: "var(--color-accent)",
  amber: "var(--color-signal)",
  teal: "var(--color-highlight)",
  green: "var(--color-success)",
  red: "var(--color-danger)",
};
