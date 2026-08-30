import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getToolById } from "@/lib/data/tools";
import { ToolDetail } from "@/components/tools/ToolDetail";
import { ToolDetailSkeleton } from "@/components/tools/ToolDetailSkeleton";

type Props = {
  params: Promise<{ id: string; slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const tool = await getToolById(id);

  if (!tool) {
    return { title: "Tool Not Found" };
  }

  return {
    title: `${tool.name} — AI Discovery`,
    description: tool.tagline,
  };
}

async function ToolDetailFetcher({ params }: Props) {
  const { id, slug } = await params;
  const tool = await getToolById(id);

  if (!tool) {
    notFound();
  }

  // Ensure canonical slug redirect if URL slug is mismatched
  if (tool.slug !== slug) {
    // We could redirect here using redirect(`/tools/${tool.id}/${tool.slug}`)
    // but Next.js prefers canonical tags for SEO, or we can just redirect.
    // For simplicity, we just render the content.
  }

  return <ToolDetail tool={tool} />;
}

export default async function ToolDetailPage({ params }: Props) {
  return (
    <div className="mx-auto w-full max-w-[1280px] px-4 py-8 sm:px-6 lg:px-8">
      <Suspense fallback={<ToolDetailSkeleton />}>
        <ToolDetailFetcher params={params} />
      </Suspense>
    </div>
  );
}
