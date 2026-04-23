"use client";

import * as React from "react";
import { BookDemoButton } from "@/components/book-demo-button";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-40 transition-[background-color,backdrop-filter,border-color] duration-200",
        scrolled
          ? "backdrop-blur-md bg-[color:rgba(8,9,10,0.7)] border-b border-[var(--border)]"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-2 text-[1rem] font-medium text-[var(--text-primary)]"
          aria-label="AIUGC Media — home"
        >
          <span
            aria-hidden
            className="inline-block h-1.5 w-1.5 rounded-full"
            style={{ background: "var(--accent)" }}
          />
          AIUGC Media
        </a>
        <BookDemoButton
          variant={scrolled ? "primary" : "ghost"}
          size="sm"
          withArrow={false}
        />
      </div>
    </header>
  );
}
