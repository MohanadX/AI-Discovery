import { cacheLife } from "next/cache";

export async function SiteFooter() {
  "use cache";
  cacheLife("days");
  return (
    <footer
      className="mt-auto border-t py-6"
      style={{
        borderColor: "var(--color-border)",
        backgroundColor: "var(--color-background)",
      }}>
      <div
        className="mx-auto flex max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-8 text-sm"
        style={{ color: "var(--color-foreground-faint)" }}>
        <span>AI Discovery</span>
        <span>© {new Date().getFullYear()} All rights reserved.</span>
      </div>
    </footer>
  );
}
