"use client";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header
      className="sticky top-0 z-50 w-full border-b"
      style={{
        backgroundColor: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderColor: "var(--color-border)",
      }}>
      <div className="mx-auto flex h-14 max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/tools"
          className="flex items-center gap-2 font-semibold tracking-tight text-sm"
          style={{ color: "var(--color-foreground)" }}>
          {/* Simple geometric mark */}
          <span
            className="flex h-7 w-7 items-center justify-center rounded-lg text-xs font-bold"
            style={{
              background:
                "linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-hover) 100%)",
              color: "#fff",
            }}
            aria-hidden="true">
            AI
          </span>
          <span>AI Discovery</span>
        </Link>

        {/* Nav */}
        <nav aria-label="Main navigation" className="flex items-center gap-1">
          <NavLink href="/tools">Tools</NavLink>
          <NavLink href="/news">News</NavLink>
        </nav>

        {/* CTA */}
        <div className="flex items-center">
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "#fff",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                "var(--color-accent-hover)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                "var(--color-accent)";
            }}>
            <span aria-hidden="true">+</span>
            <span>Submit Tool</span>
          </button>
        </div>
      </div>
    </header>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="rounded-md px-3 py-1.5 text-sm font-medium transition-colors"
      style={{ color: "var(--color-foreground-muted)" }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.color =
          "var(--color-foreground)";
        (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
          "var(--color-surface-hover)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.color =
          "var(--color-foreground-muted)";
        (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
          "transparent";
      }}>
      {children}
    </Link>
  );
}
