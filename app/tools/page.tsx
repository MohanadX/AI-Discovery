import type { Metadata } from "next";
import { parseToolsFilter } from "@/lib/domain/tools";
import { getToolsList, getCategories } from "@/lib/data/tools";
import { ToolsPage } from "@/components/tools/ToolsPage";

export const metadata: Metadata = {
  title: "AI Tools Directory",
  description:
    "Browse and discover the best AI tools. Filter by category, pricing, and platform.",
};

export default async function ToolsRoute(props: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const rawParams = await props.searchParams;
  const filter = parseToolsFilter(rawParams);

  // Resolve initial data server-side in parallel
  const [initialData, categories] = await Promise.all([
    getToolsList(filter),
    getCategories(),
  ]);

  return (
    <ToolsPage
      initialData={initialData}
      categories={categories}
      filter={filter}
    />
  );
}
