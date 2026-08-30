import { Suspense } from "react";
import type { Metadata } from "next";
import { getNewsList } from "@/lib/data/news";
import { NewsPage } from "@/components/news/NewsPage";
import { NewsPageSkeleton } from "@/components/news/NewsPageSkeleton";

export const metadata: Metadata = {
  title: "AI News & Updates — AI Discovery",
  description:
    "The latest updates, releases, and guides from the AI ecosystem.",
};

async function NewsFeedFetcher() {
  const initialData = await getNewsList(1);
  return <NewsPage initialData={initialData} />;
}

export default function NewsRoute() {
  return (
    <div className="mx-auto w-full max-w-[1280px] px-4 py-8 sm:px-6 lg:px-8">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-left tracking-tight text-[var(--color-foreground)]">
          AI News &amp; Updates
        </h1>
        <p className="text-left text-[var(--color-foreground-muted)] max-w-2xl">
          The latest industry announcements, funding rounds, and technical
          guides.
        </p>
      </header>

      <Suspense
        fallback={
          <div className="mt-8">
            <NewsPageSkeleton />
          </div>
        }>
        <NewsFeedFetcher />
      </Suspense>
    </div>
  );
}
