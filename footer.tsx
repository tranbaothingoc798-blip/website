export function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="flex items-center gap-2">
            <span
              aria-hidden
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ background: "var(--accent)" }}
            />
            <span className="font-medium text-[var(--text-primary)]">
              AIUGC Media
            </span>
          </div>
          <p className="type-caption text-[var(--text-secondary)]">
            AI UGC for performance marketing.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 type-mono text-[var(--text-tertiary)]">
          <a
            href="mailto:hello@aiugcmedia.com"
            className="hover:text-[var(--text-primary)] transition-colors"
          >
            EMAIL
          </a>
          <span aria-hidden>·</span>
          <a
            href="#"
            className="hover:text-[var(--text-primary)] transition-colors"
          >
            LINKEDIN
          </a>
          <span aria-hidden>·</span>
          <a
            href="#"
            className="hover:text-[var(--text-primary)] transition-colors"
          >
            PRIVACY
          </a>
        </div>

        <p className="type-caption text-[var(--text-tertiary)]">
          © 2026 AIUGC Media. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
